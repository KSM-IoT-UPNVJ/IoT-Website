from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from backend.db.session import get_db
from backend.models.insight import InsightSlide
from backend.schemas.insight_schema import InsightCreate, InsightUpdate, InsightResponse

router = APIRouter(prefix="/admin/insight", tags=["Admin - Insight"])


@router.post("/", response_model=InsightResponse)
def create_insight(data: InsightCreate, db: Session = Depends(get_db)):
    new_item = InsightSlide(**data.dict())
    db.add(new_item)
    db.commit()
    db.refresh(new_item)
    return new_item

@router.get("/", response_model=list[InsightResponse])
def get_all_insights(db: Session = Depends(get_db)):
    items = db.query(InsightSlide).all()
    return items

@router.get("/category/{category}", response_model=list[InsightResponse])
def get_by_category(category: str, db: Session = Depends(get_db)):
    items = db.query(InsightSlide).filter(InsightSlide.category == category).all()
    return items

@router.get("/{insight_id}", response_model=InsightResponse)
def get_by_id(insight_id: int, db: Session = Depends(get_db)):
    item = db.query(InsightSlide).filter(InsightSlide.id == insight_id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Insight not found")
    return item

@router.put("/{insight_id}", response_model=InsightResponse)
def update_insight(insight_id: int, data: InsightUpdate, db: Session = Depends(get_db)):
    item = db.query(InsightSlide).filter(InsightSlide.id == insight_id).first()

    if not item:
        raise HTTPException(status_code=404, detail="Insight not found")

    for key, value in data.dict(exclude_unset=True).items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item

@router.delete("/{insight_id}")
def delete_insight(insight_id: int, db: Session = Depends(get_db)):
    item = db.query(InsightSlide).filter(InsightSlide.id == insight_id).first()

    if not item:
        raise HTTPException(status_code=404, detail="Insight not found")

    db.delete(item)
    db.commit()
    return {"message": "Insight deleted"}
