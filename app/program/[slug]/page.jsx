import { notFound } from 'next/navigation';

import ProgramPage from '../../../components/homepage/ourprogram/programPage.jsx';
import ourProgramData from '../../../components/homepage/ourprogram/ourProgramData.json';
import Nav from '@/components/shared/Nav.jsx';
import Footer from '@/components/shared/Footer.jsx';

export default function ProgramDetailsPage({ params }) {
  const { slug } = params ?? {};
  const program = slug ? ourProgramData[slug] : undefined;

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
