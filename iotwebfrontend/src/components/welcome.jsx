import React from 'react';
import VisiMisi from './visimisi.jsx';
import OurProgram from './ourprogram.jsx';
import OurAchievement from './ourachievement.jsx';
import MoreInsight from './insight.jsx';

const Home = () => {
  return (
    <div className='relative overflow-x-hidden'>
      <div className="min-h-screen flex flex-col overflow-x-hidden text-optima">
        {/* Background image with overlay */}
        <div className="relative">
          <div className="absolute inset-0 bg-black opacity-60 z-10" />
          <div
            className="h-[90vh] bg-cover bg-center relative z-0"
            style={{
              backgroundImage: `url('/path-to-your-image.jpg')` // path gambar latar yangg bergerak
            }}
          />

          {/* Content */}
          <div className="absolute top-1/4 left-12 z-20 text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-light">Welcome To</h1>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              KSM Internet Of Things
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mt-4">UPNVJ</h3>
            <p className="mt-6 text-base md:text-lg leading-relaxed">
              KSM Internet of Things (IoT) UPN Veteran Jakarta adalah wadah bagi mahasiswa
              Fakultas Teknik yang berfokus mengembangkan teknologi IoT melalui riset,
              implementasi, dan kompetisi nasional maupun internasional. Bergabunglah untuk
              mengasah kemampuan dan siap menghadapi revolusi industri 4.0 dengan semangat
              <strong> "Innovating Today, Champion Tomorrow"</strong>!
            </p>
          </div>
        </div>
        <VisiMisi />
        <OurProgram />
        <OurAchievement />
        <MoreInsight />
      </div>
    </div>
    
  );
};

export default Home;
