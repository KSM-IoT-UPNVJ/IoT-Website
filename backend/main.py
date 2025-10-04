from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from . import models, schemas
from .database import engine, SessionLocal, Base

# buat tabel di database
Base.metadata.create_all(bind=engine)

app = FastAPI()
origins = [
    "http://localhost:3000",   # React dev server
    "http://localhost:5173",   # Vite dev server
]
# Allow CORS (supaya bisa diakses dari React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # bisa dibatasi sesuai domain React
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/api/contact")
def create_contact(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    new_contact = models.Contact(
        name=contact.name,
        email=contact.email,
        phone=contact.phone,
        message=contact.message
    )
    db.add(new_contact)
    db.commit()
    db.refresh(new_contact)
    return {"message": "Contact saved!", "id": new_contact.id}
