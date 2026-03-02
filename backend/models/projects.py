from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship
from backend.db.database import Base


class ProjectsData(Base):
    __tablename__ = "projects_data"

    id = Column(Integer, primary_key=True, index=True)
    slug = Column(String, unique=True, index=True)
    title = Column(String)
    githubLink = Column(String)
    description = Column(Text)
    division = Column(String)
    date = Column(String)
    divisionImage = Column(String)
    image = Column(String)

    # Optional
    subtitle2 = Column(String, nullable=True)
    description2 = Column(Text, nullable=True)
    image2 = Column(String, nullable=True)
    subtitle3 = Column(String, nullable=True)
    description3 = Column(Text, nullable=True)

    hm = relationship("ProjectMember", back_populates="project", cascade="all, delete")


class ProjectMember(Base):
    __tablename__ = "project_members"

    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, ForeignKey("projects_data.id"))
    name = Column(String)
    title = Column(String)
    image = Column(String)

    project = relationship("ProjectsData", back_populates="hm")
