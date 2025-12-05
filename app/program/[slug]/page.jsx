import { notFound } from 'next/navigation';

import ProgramPage from '../../../components/homepage/ourprogram/programPage.jsx';
import Nav from '@/components/shared/Nav.jsx';
import Footer from '@/components/shared/Footer.jsx';

export default async function ProgramDetailsPage({ params }) {
  const { slug } = params ?? {};

  // --- FETCH DATA FROM FASTAPI ---
  const res = await fetch("http://localhost:8000/api/our-program", {
    cache: "no-store", // biar selalu data terbaru
  });

  if (!res.ok) {
    notFound();
  }

  const ourProgramData = await res.json();

  // Ambil data berdasarkan slug
  const program = ourProgramData[slug];

  if (!program) {
    notFound();
  }

  return (
    <>
      <Nav />
      <ProgramPage program={program} />
      <Footer />
    </>
  );
}
