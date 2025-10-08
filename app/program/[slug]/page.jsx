import { notFound } from 'next/navigation';

import ProgramPage from '../../../components/homepage/ourprogram/programPage.jsx';
import ourProgramData from '../../../components/homepage/ourprogram/ourProgramData.json';

export default function ProgramDetailsPage({ params }) {
  const { slug } = params ?? {};
  const program = slug ? ourProgramData[slug] : undefined;

  if (!program) {
    notFound();
  }

  return <ProgramPage program={program} />;
}
