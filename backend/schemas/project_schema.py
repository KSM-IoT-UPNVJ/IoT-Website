from pydantic import BaseModel, Field
from typing import Optional, List

class ProjectBase(BaseModel):
    slug: str
    title: str
    githubLink: str
    description: str
    division: str
    date: str
    divisionImage: str
    image: str

    # Optional
    subtitle2: Optional[str] = None
    description2: Optional[str] = None
    image2: Optional[str] = None
    subtitle3: Optional[str] = None
    description3: Optional[str] = None

class ProjectCreate(ProjectBase):
    pass


class ProjectUpdate(BaseModel):
    slug: Optional[str] = None
    title: Optional[str] = None
    githubLink: Optional[str] = None
    description: Optional[str] = None
    division: Optional[str] = None
    date: Optional[str] = None
    divisionImage: Optional[str] = None
    image: Optional[str] = None
    subtitle2: Optional[str] = None
    description2: Optional[str] = None
    image2: Optional[str] = None
    subtitle3: Optional[str] = None
    description3: Optional[str] = None


class MemberBase(BaseModel):
    name: str
    title: str
    image: str

class MemberCreate(MemberBase):
    pass


class MemberUpdate(BaseModel):
    name: Optional[str] = None
    title: Optional[str] = None
    image: Optional[str] = None


class MemberResponse(MemberBase):
    id: int

    class Config:
        orm_mode = True

class ProjectResponse(ProjectBase):
    id: int
    hm: List[MemberResponse] = Field(default_factory=list)

    class Config:
        orm_mode = True
