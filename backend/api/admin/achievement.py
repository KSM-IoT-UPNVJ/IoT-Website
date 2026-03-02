from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from backend.db.session import get_db
from backend.models.achievement import (
    Achievement,
    AchievementImage,
    AchievementContributor
)
from backend.schemas.achievement_schema import (
    AchievementCreate,
    AchievementUpdate,
    AchievementResponse
)

router = APIRouter(prefix="/admin/achievement", tags=["Admin - Achievement"])


# CREATE
@router.post("/", response_model=AchievementResponse)
def create_achievement(data: AchievementCreate, db: Session = Depends(get_db)):
    new_item = Achievement(
        title=data.title,
        award=data.award,
        description=data.description,
        image=data.image,
        time=data.time,
        organizer=data.organizer,
    )

    # Add images
    for img in data.images:
        new_item.images.append(AchievementImage(image_url=img))

    # Add contributors
    for name in data.contributors:
        new_item.contributors.append(AchievementContributor(name=name))

    db.add(new_item)
    db.commit()
    db.refresh(new_item)
    return new_item


# GET ALL
@router.get("/", response_model=list[AchievementResponse])
def get_all_achievements(db: Session = Depends(get_db)):
    items = db.query(Achievement).all()
    return items


# GET BY ID
@router.get("/{achievement_id}", response_model=AchievementResponse)
def get_by_id(achievement_id: int, db: Session = Depends(get_db)):
    item = db.query(Achievement).filter(Achievement.id == achievement_id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Achievement not found")
    return item


# UPDATE
@router.put("/{achievement_id}", response_model=AchievementResponse)
def update_achievement(achievement_id: int, data: AchievementUpdate, db: Session = Depends(get_db)):
    item = db.query(Achievement).filter(Achievement.id == achievement_id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Achievement not found")

    # Update simple fields
    item.title = data.title
    item.award = data.award
    item.description = data.description
    item.image = data.image
    item.time = data.time
    item.organizer = data.organizer

    # Clear old images, insert new ones
    db.query(AchievementImage).filter(AchievementImage.achievement_id == item.id).delete()
    for img in data.images:
        db.add(AchievementImage(achievement_id=item.id, image_url=img))

    # Clear old contributors, insert new ones
    db.query(AchievementContributor).filter(AchievementContributor.achievement_id == item.id).delete()
    for name in data.contributors:
        db.add(AchievementContributor(achievement_id=item.id, name=name))

    db.commit()
    db.refresh(item)
    return item


# DELETE
@router.delete("/{achievement_id}")
def delete_achievement(achievement_id: int, db: Session = Depends(get_db)):
    item = db.query(Achievement).filter(Achievement.id == achievement_id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Achievement not found")

    db.delete(item)
    db.commit()
    return {"message": "Achievement deleted"}
