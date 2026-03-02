from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

from backend.db.session import get_db
from backend.models.our_program import (
    OurProgram,
    OurProgramData,
    OurProgramAuthor
)
from backend.schemas.our_program import (
    OurProgramCreate,
    OurProgramUpdate,
    OurProgramResponse
)

router = APIRouter(prefix="/admin/our-program", tags=["Admin - Our Program"])


# CREATE
@router.post("/", response_model=OurProgramResponse)
def create_program(payload: OurProgramCreate, db: Session = Depends(get_db)):
    program = OurProgram(slug=payload.slug)

    program.data = OurProgramData(**payload.data.dict())
    program.author = OurProgramAuthor(**payload.author.dict())

    db.add(program)
    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=409, detail="Slug already exists")

    db.refresh(program)
    return program


# GET ALL
@router.get("/", response_model=list[OurProgramResponse])
def get_all(db: Session = Depends(get_db)):
    return db.query(OurProgram).all()


# GET BY SLUG
@router.get("/{slug}", response_model=OurProgramResponse)
def get_by_slug(slug: str, db: Session = Depends(get_db)):
    program = db.query(OurProgram).filter_by(slug=slug).first()
    if not program:
        raise HTTPException(status_code=404, detail="Program not found")
    return program


# UPDATE
@router.put("/{slug}", response_model=OurProgramResponse)
def update_program(
    slug: str,
    payload: OurProgramUpdate,
    db: Session = Depends(get_db)
):
    program = db.query(OurProgram).filter_by(slug=slug).first()
    if not program:
        raise HTTPException(status_code=404, detail="Program not found")

    if payload.data:
        for k, v in payload.data.dict().items():
            setattr(program.data, k, v)

    if payload.author:
        for k, v in payload.author.dict().items():
            setattr(program.author, k, v)

    db.commit()
    db.refresh(program)
    return program


# DELETE
@router.delete("/{slug}")
def delete_program(slug: str, db: Session = Depends(get_db)):
    program = db.query(OurProgram).filter_by(slug=slug).first()
    if not program:
        raise HTTPException(status_code=404, detail="Program not found")

    db.delete(program)
    db.commit()
    return {"message": "Program deleted"}
