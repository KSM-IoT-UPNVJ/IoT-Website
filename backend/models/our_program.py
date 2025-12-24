from sqlalchemy import Column, Integer, String, Text, ForeignKey, JSON
from sqlalchemy.orm import relationship
from backend.db.database import Base


class OurProgram(Base):
    __tablename__ = "our_program"

    id = Column(Integer, primary_key=True, index=True)
    slug = Column(String, unique=True, index=True, nullable=False)

    data = relationship(
        "OurProgramData",
        back_populates="program",
        uselist=False,
        cascade="all, delete"
    )

    author = relationship(
        "OurProgramAuthor",
        back_populates="program",
        uselist=False,
        cascade="all, delete"
    )


class OurProgramData(Base):
    __tablename__ = "our_program_data"

    id = Column(Integer, primary_key=True, index=True)
    program_id = Column(Integer, ForeignKey("our_program.id"), nullable=False)

    fotoHeader = Column(String)
    headerAuthor = Column(String)
    footerAuthor = Column(String)
    fotoSlider = Column(JSON)        # LIST of images
    fotoKolase = Column(String)

    frontText = Column(Text)
    deskripsi1 = Column(Text)
    deskripsi2 = Column(Text)
    deskripsi3 = Column(Text)

    testimoni = Column(Text)
    title = Column(String)

    program = relationship("OurProgram", back_populates="data")


class OurProgramAuthor(Base):
    __tablename__ = "our_program_author"

    id = Column(Integer, primary_key=True, index=True)
    program_id = Column(Integer, ForeignKey("our_program.id"), nullable=False)

    namaHeader = Column(String)
    jabatanHeader = Column(String)
    namaFooter = Column(String)
    jabatanFooter = Column(String)

    program = relationship("OurProgram", back_populates="author")
