from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship
from backend.db.database import Base


class Achievement(Base):
    __tablename__ = "achievements"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    award = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    image = Column(String, nullable=False)
    time = Column(String, nullable=False)
    organizer = Column(String, nullable=False)

    # relationship
    images = relationship(
        "AchievementImage",
        back_populates="achievement",
        cascade="all, delete"
    )
    contributors = relationship(
        "AchievementContributor",
        back_populates="achievement",
        cascade="all, delete"
    )


class AchievementImage(Base):
    __tablename__ = "achievement_images"

    id = Column(Integer, primary_key=True, index=True)
    achievement_id = Column(Integer, ForeignKey("achievements.id"))
    image_url = Column(String, nullable=False)

    achievement = relationship("Achievement", back_populates="images")


class AchievementContributor(Base):
    __tablename__ = "achievement_contributors"

    id = Column(Integer, primary_key=True, index=True)
    achievement_id = Column(Integer, ForeignKey("achievements.id"))
    name = Column(String, nullable=False)

    achievement = relationship("Achievement", back_populates="contributors")
