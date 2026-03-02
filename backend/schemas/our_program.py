from pydantic import BaseModel
from typing import List


# ---------- DATA ----------
class OurProgramDataBase(BaseModel):
    fotoHeader: str
    headerAuthor: str
    footerAuthor: str
    fotoSlider: List[str]
    fotoKolase: str
    frontText: str
    deskripsi1: str
    deskripsi2: str
    deskripsi3: str
    testimoni: str
    title: str

    class Config:
        from_attributes = True


# ---------- AUTHOR ----------
class OurProgramAuthorBase(BaseModel):
    namaHeader: str
    jabatanHeader: str
    namaFooter: str
    jabatanFooter: str

    class Config:
        from_attributes = True


# ---------- CREATE ----------
class OurProgramCreate(BaseModel):
    slug: str
    data: OurProgramDataBase
    author: OurProgramAuthorBase


# ---------- UPDATE ----------
class OurProgramUpdate(BaseModel):
    data: OurProgramDataBase | None = None
    author: OurProgramAuthorBase | None = None


# ---------- RESPONSE ----------
class OurProgramResponse(BaseModel):
    slug: str
    data: OurProgramDataBase
    author: OurProgramAuthorBase

    class Config:
        from_attributes = True
