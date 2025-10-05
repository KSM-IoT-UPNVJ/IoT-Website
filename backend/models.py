from sqlalchemy import Column, Integer, String, Text, TIMESTAMP, func
from .database import Base

class Contact(Base):
    __tablename__= "contact"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    email = Column(String(150))
    phone = Column(String(20))
    message = Column(Text)
    created_at = Column(TIMESTAMP, server_default=func.now())