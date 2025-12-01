export const dynamicParams = true;

import { notFound } from 'next/navigation';
import ProgramPage from '../../../components/homepage/ourprogram/programPage.jsx';
import ourProgramData from '../../../components/homepage/ourprogram/ourProgramData.json';
import Nav from '@/components/shared/Nav.jsx';
import Footer from '@/components/shared/Footer.jsx';

export default async function ProgramDetailsPage({ params }) {
  const { slug } = await params;
  const normalizedSlug = Array.isArray(slug) ? slug[0] : slug;

  const program = ourProgramData[normalizedSlug];

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
