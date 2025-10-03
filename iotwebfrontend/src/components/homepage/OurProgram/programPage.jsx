import { useParams } from "react-router-dom";
import ourProgramData from "./ourProgramData.json";
import LayoutProgram from "./layoutProgram.jsx";
import FadeIn from "/src/utils/fadeIn";

export default function ProgramPage() {
  const { programId } = useParams(); // ambil id dari URL
  const program = ourProgramData[programId]; // ambil data dari JSON

  if (!program) {
    return <h2 className="text-center text-red-500">Program not found</h2>;
  }

  return (
    <FadeIn delay={0.8} direction={"down"}>
      <LayoutProgram program={program} />
    </FadeIn>
  );
}
