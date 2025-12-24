from pydantic import BaseModel
from typing import Optional

class InsightBase(BaseModel):
    category: str
    image: str
    vol: int
    title: str
    link: str

class InsightCreate(InsightBase):
    pass

class InsightUpdate(BaseModel):
    category: Optional[str] = None
    image: Optional[str] = None
    vol: Optional[int] = None
    title: Optional[str] = None
    link: Optional[str] = None

class InsightResponse(InsightBase):
    id: int

    class Config:
        orm_mode = True
