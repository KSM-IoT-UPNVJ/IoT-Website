from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.db.database import Base, engine
from backend.api.admin.iot_insight import router as admin_router_insight
from backend.api.admin.our_program import router as admin_router_our_program
from backend.api.admin.projects import router as admin_router_projects
from backend.api.admin.achievement import router as admin_router_achievement

app = FastAPI()

# ====== CORS CONFIG ======
origins = [
    "http://localhost:3000",   # React / Next.js
    "http://127.0.0.1:3000",
    # tambahkan domain production jika ada
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,      # atau ["*"] untuk semua origin (dev only)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ====== DATABASE ======
Base.metadata.create_all(bind=engine)

# ====== ROUTERS ======
app.include_router(admin_router_insight)
app.include_router(admin_router_our_program)
app.include_router(admin_router_projects)
app.include_router(admin_router_achievement)
