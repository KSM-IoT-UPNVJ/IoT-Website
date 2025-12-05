from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class Division(BaseModel):
    name: str
    image: str
    description: str
    gradient: str


divisions_data = [
    Division(
        name="Firmware Division",
        image="/firmware.png",
        description=(
            "Berfokus pada riset dan pengembangan perangkat keras melalui desain mekanika, "
            "desain 3D, serta pemilihan material untuk menciptakan solusi IoT yang inovatif."
        ),
        gradient="bg-gradient-to-b from-gray-200/70 via-gray-800/35 to-gray-900/80",
    ),
    Division(
        name="Hardware Division",
        image="/hardware.jpg",
        description=(
            "Mengembangkan sistem tertanam (embedded system) dengan pemrograman mikrokontroler "
            "dan integrasi perangkat keras untuk mendukung implementasi IoT."
        ),
        gradient="bg-gradient-to-b from-indigo-400/70 via-purple-500/40 to-fuchsia-600/70",
    ),
    Division(
        name="Software Division",
        image="/software.jpg",
        description=(
            "Merancang dan mengembangkan aplikasi berbasis web maupun mobile untuk menghubungkan, "
            "mengelola, dan menganalisis data IoT."
        ),
        gradient="bg-gradient-to-b from-amber-300/70 via-pink-400/40 to-rose-500/70",
    ),
    Division(
        name="UI/UX Division",
        image="/uiux.jpg",
        description=(
            "Mendesain antarmuka dan pengalaman pengguna yang intuitif, interaktif, dan mudah "
            "digunakan dalam aplikasi berbasis IoT."
        ),
        gradient="bg-gradient-to-b from-blue-200/70 via-blue-400/40 to-blue-600/70",
    ),
    Division(
        name="Network Division",
        image="/network.jpg",
        description=(
            "Fokus pada perancangan, konfigurasi, dan pengelolaan jaringan komunikasi data "
            "sebagai tulang punggung konektivitas IoT."
        ),
        gradient="bg-gradient-to-b from-emerald-200/70 via-emerald-400/40 to-emerald-700/80",
    ),
]


@router.get("/insight/divisions", response_model=list[Division])
def get_divisions():
    return divisions_data
