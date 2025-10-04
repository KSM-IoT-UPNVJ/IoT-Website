import { useState } from 'react';
import FadeIn from '../../../utils/fadeIn';
import AchievementCard from './AchievementCard';
import AchievementPopup from './AchievementPopUp';

const OurAchievement = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [clickedElementPosition, setClickedElementPosition] = useState(null);

  const achievements = [
    {
      id: 1,
      title: 'KKI 2024 kategori ASV',
      award: 'Finalis',
      description:
        'Pelaksanaan KKI merupakan agenda kemahasiswaan penting yang diselenggarakan oleh Balai Pengembangan Talenta Indonesia di bawah Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. Kegiatan ini bertujuan untuk mengembangkan inovasi teknologi kemaritiman digital dan mendukung kemandirian teknologi nasional dengan melibatkan mahasiswa serta dosen dari bidang ilmu terkait. Para peserta diharapkan dapat memberikan sumbangsih pemikiran di bidang kelautan dari perspektif teknologi kemaritiman dan perkapalan. Pada tahun 2024, kompetisi ini terbagi menjadi dua kategori, yaitu Lomba Desain Kapal serta Lomba Pembuatan dan Performa Prototipe.',
      image: '/homepage/achievement/kki2024/kki1.jpg',
      images: [
        '/homepage/achievement/kki2024/kki1.jpg',
        '/homepage/achievement/kki2024/kki2.png',
        '/homepage/achievement/kki2024/kki3.webp',
        '/homepage/achievement/kki2024/kki4.webp',
        '/homepage/achievement/kki2024/kki5.mp4',
        '/homepage/achievement/kki2024/kki6.png',
      ],
      time: '23/09/2024',
      organizer: 'BPTI Puspresnas Kemdikbudristek',
      contributors: [
        'Zahid Faqih Alim Rabbani',
        'Muhfaiq Abdullah Trianto',
        'Krisna Dwi Firmansyah ',
        'Izzan Edwan Mursalaat',
        'Mochammad Haiqal Bagaskara',
        'Fakhri Akbar Ayub, S.T., M.Eng., Ph.D',
      ],
    },
    {
      id: 2,
      title: 'KRI 2024 cabang KRSTI',
      award: 'Peringkat 13 Nasional Wilayah 1',
      description:
        'Robot Indonesia (KRI) adalah kegiatan kompetisi tahunan mahasiswa dalam bidang rancang bangun dan rekayasa robotika yang dapat diikuti oleh seluruh mahasiswa pada perguruan tinggi di  wilayah Republik Indonesia, dari berbagai K/L atau kedinasan, yang tercatat pada Pangkalan Data Pendidikan TInggi. KRI 2024 diselenggarakan oleh Balai Pengembangan Talenta Indonesia (BPTI) Pusat Prestasi Nasional Puspresnas) Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi (Kemendikbudristek) Republik Indonesia. KRI  pertama kali diselenggarakan pada tahun 2003 di bawah Direktorat Jenderal Pendidikan Tinggi, Departemen Pendidikan dan Kebudayaan pada saat itu. Kontes Robot Indonesia tahun 2024 mempertandingkan 7 (tujuh) divisi sebagai berikut: Kontes Robot ABU Indonesia (KRAI); Kontes Robot SAR Indonesia (KRSRI); Kontes Robot Sepak Bola Indonesia (KRSBI) Beroda; Kontes Robot Sepak Bola Indonesia(KRSBI) Humanoid; Kontes Robot Seni Tari Indonesia (KRSTI); Kontes Robot Tematik Indonesia (KRTMI); Kontes Robot Bawah Air Indonesia (KRBAI).',
      image: '/homepage/achievement/krsti2024/krsti2024_1.jpg',
      images: [
        '/homepage/achievement/krsti2024/krsti2024_1.jpg',
        '/homepage/achievement/krsti2024/krsti2024_2.jpg',
        '/homepage/achievement/krsti2024/krsti2024_3.jpg',
        '/homepage/achievement/krsti2024/krsti2024_4.jpg',
      ],
      time: '27 Mei - 1 Juni 2024',
      organizer: 'BPTI Puspresnas Kemdikbudristek',
      contributors: [
        'Daniel Putra',
        'Mutiara Putri Rafhsanjani Darmawan',
        'Rizal Restu Ramadhan',
        'Aryaguna Abi Rafdi Yasa',
      ],
    },
    {
      id: 3,
      title: 'KRI 2023 cabang KRSTI',
      award: 'Peringkat 12 Nasional Wilayah 1',
      description:
        'Robot Indonesia (KRI) adalah kegiatan kompetisi tahunan mahasiswa dalam bidang rancang bangun dan rekayasa robotika yang dapat diikuti oleh seluruh mahasiswa pada perguruan tinggi di  wilayah Republik Indonesia, dari berbagai K/L atau kedinasan, yang tercatat pada Pangkalan Data Pendidikan TInggi. KRI 2023 diselenggarakan oleh Balai Pengembangan Talenta Indonesia (BPTI) Pusat Prestasi Nasional (Puspresnas) Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi (Kemendikbudristek) Republik Indonesia. KRI  pertama kali diselenggarakan pada tahun 2003 di bawah Direktorat Jenderal Pendidikan Tinggi. Kontes Robot Indonesia tahun 2023 mempertandingkan 7 (tujuh) divisi, yaitu Kontes Robot ABU Indonesia (KRAI); Kontes Robot SAR Indonesia (KRSRI); Kontes Robot Sepak Bola Indonesia (KRSBI) Beroda; Kontes Robot Sepak Bola Indonesia (KRSBI) Humanoid; Kontes Robot Seni Tari Indonesia (KRSTI); Kontes Robot Tematik Indonesia (KRTMI); Kontes Robot Bawah Air Indonesia (KRBAI).',
      image: '/homepage/achievement/krsti2023/krsti_2023_1.jpg',
      images: [
        '/homepage/achievement/krsti2023/krsti_2023_1.jpg',
        '/homepage/achievement/krsti2023/krsti_2023_2.jpg',
        '/homepage/achievement/krsti2023/krsti_2023_3.jpg',
        '/homepage/achievement/krsti2023/krsti_2023_4.jpg',
      ],
      time: '28 Mei - 5 Juni 2023',
      organizer: 'BPTI Puspresnas Kemdikbudristek',
      contributors: [
        'Ahmad Sarifpudin',
        'Cantika Aryanti',
        'Daffa Yusril Ihya',
        'Jati Kinsela Brajamusti',
      ],
    },
    {
      id: 4,
      title: 'Poster Design Competition I-Nanotech 2024',
      award: 'Peringkat II',
      description:
        'I-Nanotech (International Competition on Engineering dan Creativity) 2024',
      image: '/homepage/achievement/posterdesign/posterdesign.png',
      images: ['/homepage/achievement/posterdesign/posterdesign.png'],
      time: '17/08/2024',
      organizer: 'Fakultas Teknik Universitas Muhammadiyah Mataram',
      contributors: ['Jati Kinsela'],
    },
    {
      id: 5,
      title: 'Sumo Bot FIK Fair',
      award: '4th Place',
      description:
        'Kompetisi Robot Sumo FIK FAIR 2025 dengan tema "Synergetic Motion: Robotics for a Smarter Tomorrow" adalah kompetisi tahunan yang diselenggarakan oleh BEMF-IK UPN VETERAN JAKARTA yang bertujuan untuk mengukur kompetensi, kreativitas dan inovasi di bidang perancangan robot. Lomba robot sumo yang diadakan oleh FIK FAIR 2025 merupakan pertandingan robot yang bertujuan mengalahkan lawan menggunakan kekuatan dan strategi untuk saling mendorong robot keluar dari arena pertandingan. Robot yang digunakan adalah robot yang dikendalikan menggunakan remote control.',
      image: '/homepage/achievement/sumobot/sumobot1.jpg',
      images: [
        '/homepage/achievement/sumobot/sumobot1.jpg',
        '/homepage/achievement/sumobot/sumobot2.jpg',
        '/homepage/achievement/sumobot/sumobot3.jpg',
        '/homepage/achievement/sumobot/sumobot4.jpg',
      ],
      time: '27/09/2025',
      organizer: 'BEMF-IK Universitas Pembangunan Nasional Veteran Jakarta',
      contributors: [
        'Muhamad Nabhan Azmi',
        'Khalif Farel Fauzan',
        'Ramadhani Putra Yuditama',
      ],
    },
    {
      id: 6,
      title: 'TO BE ACHIEVED...',
      award: 'TO BE ACHIEVED',
      description: 'TO BE ACHIEVED...',
      image: null,
      images: [],
      time: '2025',
      organizer: 'TO BE ACHIEVED',
      contributors: [''],
    },
  ];

  const handleOpenPopup = (achievement, elementPosition) => {
    setSelectedAchievement(achievement);
    setClickedElementPosition(elementPosition);
  };

  const handleClosePopup = () => {
    setSelectedAchievement(null);
    setClickedElementPosition(null);
  };

  return (
    <div className="py-24 px-8 flex flex-col items-center justify-center">
      <FadeIn direction={'left'} delay={0.3}>
        <h2 className="text-[56px] font-bold text-center text-gray-800 mb-16 font-optima">
          Our Achievement
        </h2>
      </FadeIn>

      {/* card component */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-full">
        {achievements.map((item) => (
          <AchievementCard
            key={item.id}
            item={item}
            onSelect={handleOpenPopup}
          />
        ))}
      </div>

      {/* pop up component */}
      <AchievementPopup
        item={selectedAchievement}
        onClose={handleClosePopup}
        clickedElementPosition={clickedElementPosition}
      />
    </div>
  );
};

export default OurAchievement;
