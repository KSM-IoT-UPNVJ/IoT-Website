from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from backend.core.config import settings

engine = create_engine(
    settings.URL_DATABASE,
    connect_args={"check_same_thread": False} if "sqlite" in settings.URL_DATABASE else {}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
