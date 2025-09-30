import { useState } from 'react';
import { MoveLeft } from 'lucide-react';
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
      image: '/path/to/your/image1.jpg',
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
      title: 'KRI 2023 cabang KRSTI',
      award: 'Peringkat 12 Nasional Wilayah 1',
      description:
        'Berhasil masuk final KKI dengan inovasi Automatic Surface Vehicle.',
      image: '/path/to/your/image2.jpg',
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
      id: 3,
      title: 'KRI 2024 cabang KRSTI',
      award: 'Peringkat 13 Nasional Wilayah 1',
      description: 'Deskripsi untuk achievement 3.',
      image: '/path/to/your/image3.jpg',
      time: '27 Mei - 1 Juni 2024',
      organizer: 'BPTI Puspresnas Kemdikbudristek',
      contributors: ['Daniel Putra'],
    },
    {
      id: 4,
      title: 'Poster Design Competition I-Nanotech 2024',
      award: 'Peringkat II',
      description:
        'I-Nanotech (International Competition on Engineering dan Creativity) 2024',
      image: '/path/to/your/image4.jpg',
      time: '17/08/2024',
      organizer: 'Fakultas Teknik Universitas Muhammadiyah Mataram',
      contributors: ['Jati Kinsela'],
    },
    {
      id: 5,
      title: 'Achievement Name 5',
      award: 'Penghargaan 5',
      description: 'Deskripsi untuk achievement 5.',
      image: '/path/to/your/image5.jpg',
      time: '2020',
      organizer: 'Penyelenggara 5',
      contributors: ['Tim Penelitian'],
    },
    {
      id: 6,
      title: 'Achievement Name 6',
      award: 'Penghargaan 6',
      description: 'Deskripsi untuk achievement 6.',
      image: '/path/to/your/image6.jpg',
      time: '2019',
      organizer: 'Penyelenggara 6',
      contributors: ['Delegasi IOT 2019'],
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
