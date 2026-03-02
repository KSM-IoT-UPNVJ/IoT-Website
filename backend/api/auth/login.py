from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from backend.db.session import get_db
from backend.core.jwt_manager import create_access_token

router = APIRouter(
    prefix="/auth",
    tags=["auth"]
)

# For testing, we will hardcode an admin user
TEST_ADMIN = {
    "username": "admin",
    "password": "admin123",  # In production, this should be hashed
    "role": "admin"
}

@router.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    username = form_data.username
    password = form_data.password

    # Simple authentication check
    if username == TEST_ADMIN["username"] and password == TEST_ADMIN["password"]:
        token = create_access_token({"sub": username, "role": TEST_ADMIN["role"]})
        return {"access_token": token, "token_type": "bearer"}
    
    raise HTTPException(status_code=401, detail="Invalid credentials")
