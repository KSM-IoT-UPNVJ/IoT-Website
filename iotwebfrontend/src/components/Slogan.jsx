import React from 'react';
import Today from "../assets/Today.png";

const Slogan = () => (
  <section className="slogan-section">
    <div className="slogan-container">
      <img src={Today} alt="KSM IoT Logo" className="slogan-Today" />
      <p className="slogan-subtitle">
        Slogan ini menjadi fondasi utama dan cerminan semangat KSM IoT tahun 2025 yang memiliki dua pilar utama:
      </p>

      <h3 className="slogan-heading">Innovating Today</h3>
      <p className="slogan-text">Menanamkan keberanian untuk bermimpi besar, berani mencoba, dan tak henti <br /> 
        menciptakan solusi cerdas di bidang teknologi Internet of Things.</p>

      <h3 className="slogan-heading">Champion Tomorrow</h3>
      <p className="slogan-text">Menegaskan tujuan besar untuk melahirkan individu yang menjadi juara, baik 
        dalam <br /> kompetisi teknologi maupun sebagai pribadi yang bermanfaat dan menjadi  <br />penggerak perubahan di 
        era teknologi.</p>
    </div>
  </section>
);

export default Slogan;