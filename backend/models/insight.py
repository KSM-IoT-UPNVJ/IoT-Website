from sqlalchemy import Column, Integer, String
from backend.db.database import Base

class InsightSlide(Base):
    __tablename__ = "insight_slides"

    id = Column(Integer, primary_key=True, index=True)
    category = Column(String, index=True)
    image = Column(String)
    vol = Column(Integer)
    title = Column(String)
    link = Column(String)
