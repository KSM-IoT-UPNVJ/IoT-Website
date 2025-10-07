import { useParams, Navigate  } from 'react-router-dom';
import LayoutProgram from './layoutProgram.jsx';
import FadeIn from '/src/utils/fadeIn';
import ourProgramData from './ourProgramData.json'; // adjust path and extension as needed

export default function ProgramPage() {
  const { programId } = useParams(); // ambil id dari URL
  const program = ourProgramData[programId]; // ambil data dari JSON

    if (!program) {
    return <Navigate to="/notfound" replace />;
  }

  return (
    <FadeIn delay={0.8} direction={'down'}>
      <LayoutProgram program={program} />
    </FadeIn>
  );
}
