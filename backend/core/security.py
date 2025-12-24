from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, HTTPBearer
from backend.core.jwt_manager import decode_access_token

oauth2_scheme = HTTPBearer()

def admin_only(token: str = Depends(oauth2_scheme)):
    payload = decode_access_token(token)
    if not payload or payload.get("role") != "admin":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authorized as admin"
        )
    return payload
