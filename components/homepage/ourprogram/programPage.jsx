import FadeIn from '../../../utils/fadeIn';
import LayoutProgram from './layoutProgram.jsx';

export default function ProgramPage({ program }) {
  if (!program) {
    return (
      <div className="py-24 text-center text-lg font-semibold text-red-500">
        Program not found
      </div>
    );
  }

  return (
    <FadeIn delay={0.8} direction={'down'}>
      <LayoutProgram program={program} />
    </FadeIn>
  );
}
