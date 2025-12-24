from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    URL_DATABASE: str 
    SECRET_KEY: str 
    ALGORITHM: str 
    ACCESS_TOKEN_EXPIRE_MINUTES: int 

    model_config = {
        "env_file": ".env",
        "case_sensitive": True
    }

settings = Settings()
