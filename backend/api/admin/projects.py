from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

from backend.db.session import get_db
from backend.models.projects import ProjectsData, ProjectMember
from backend.schemas.project_schema import (
    ProjectCreate, ProjectUpdate, ProjectResponse,
    MemberCreate, MemberUpdate, MemberResponse
)

router = APIRouter(prefix="/admin/projects", tags=["Admin - Projects"])

@router.post("/", response_model=ProjectResponse)
def create_project(data: ProjectCreate, db: Session = Depends(get_db)):
    new_item = ProjectsData(**data.dict())
    db.add(new_item)
    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=409,
            detail="Slug already exists"
        )

    db.refresh(new_item)
    return new_item

@router.get("/", response_model=list[ProjectResponse])
def get_all_projects(db: Session = Depends(get_db)):
    items = db.query(ProjectsData).all()
    return items

@router.get("/{slug}", response_model=ProjectResponse)
def get_project(slug: str, db: Session = Depends(get_db)):
    item = db.query(ProjectsData).filter(ProjectsData.slug == slug).first()

    if not item:
        raise HTTPException(status_code=404, detail="Project not found")

    return item


@router.put("/{slug}", response_model=ProjectResponse)
def update_project(slug: str, data: ProjectUpdate, db: Session = Depends(get_db)):
    item = db.query(ProjectsData).filter(ProjectsData.slug == slug).first()

    if not item:
        raise HTTPException(status_code=404, detail="Project not found")

    for key, value in data.dict(exclude_unset=True).items():
        setattr(item, key, value)

    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=409, detail="Slug already exists")

    db.refresh(item)
    return item


@router.delete("/{slug}")
def delete_project(slug: str, db: Session = Depends(get_db)):
    item = db.query(ProjectsData).filter(ProjectsData.slug == slug).first()

    if not item:
        raise HTTPException(status_code=404, detail="Project not found")

    db.delete(item)
    db.commit()
    return {"message": "Project deleted"}


@router.post("/{slug}/members", response_model=MemberResponse)
def add_member(slug: str, data: MemberCreate, db: Session = Depends(get_db)):
    project = db.query(ProjectsData).filter(ProjectsData.slug == slug).first()

    if not project:
        raise HTTPException(status_code=404, detail="Project not found")

    new_member = ProjectMember(project_id=project.id, **data.dict())
    db.add(new_member)
    db.commit()
    db.refresh(new_member)
    return new_member


@router.get("/{slug}/members", response_model=list[MemberResponse])
def get_members(slug: str, db: Session = Depends(get_db)):
    project = db.query(ProjectsData).filter(ProjectsData.slug == slug).first()

    if not project:
        raise HTTPException(status_code=404, detail="Project not found")

    return project.hm


@router.put("/members/{member_id}", response_model=MemberResponse)
def update_member(member_id: int, data: MemberUpdate, db: Session = Depends(get_db)):
    member = db.query(ProjectMember).filter(ProjectMember.id == member_id).first()

    if not member:
        raise HTTPException(status_code=404, detail="Member not found")

    for key, value in data.dict(exclude_unset=True).items():
        setattr(member, key, value)

    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=409, detail="Slug already exists")

    db.refresh(member)
    return member

@router.delete("/members/{member_id}")
def delete_member(member_id: int, db: Session = Depends(get_db)):
    member = db.query(ProjectMember).filter(ProjectMember.id == member_id).first()

    if not member:
        raise HTTPException(status_code=404, detail="Member not found")

    db.delete(member)
    db.commit()
    return {"message": "Member deleted"}
