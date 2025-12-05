from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from backend.routers.our_program import router as ourprogram_router
from backend.routers.achievement import router as achievement_router
from backend.routers.projects import router as projects_router
from backend.routers.insight import router as insight_router

from . import models, schemas
from .database import engine, SessionLocal, Base

# buat tabel di database
Base.metadata.create_all(bind=engine)

app = FastAPI()
origins = [
    "http://localhost:3000",   # React dev server
    "http://localhost:5173",   # Vite dev server
    "http://103.197.188.140:8000"
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


app.include_router(ourprogram_router)
app.include_router(achievement_router)
app.include_router(projects_router)
app.include_router(insight_router)