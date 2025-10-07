import { useParams } from 'react-router-dom';
import LayoutProgram from './layoutProgram.jsx';
import FadeIn from '/src/utils/fadeIn';
import NotFound from '/src/components/NotFound.jsx';
import ourProgramData from './ourProgramData.json'; // adjust path and extension as needed

export default function ProgramPage() {
  const { programId } = useParams(); // ambil id dari URL
  const program = ourProgramData[programId]; // ambil data dari JSON

  if (!program) return <NotFound />;

  return (
    <FadeIn delay={0.8} direction={'down'}>
      <LayoutProgram program={program} />
    </FadeIn>
  );
}
