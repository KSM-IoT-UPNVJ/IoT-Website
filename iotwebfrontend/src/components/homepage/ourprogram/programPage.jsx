import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LayoutProgram from "./layoutProgram.jsx";
import FadeIn from "/src/utils/fadeIn";

import ourProgramData from "./ourProgramData.json"; // adjust path and extension as needed

export default function ProgramPage() {
  const { programId } = useParams(); // ambil id dari URL
  const navigate = useNavigate();
  const program = ourProgramData[programId]; // ambil data dari JSON

  // Jika program tidak ditemukan
  useEffect(() => {
    if (!program) {
      navigate("/404", { replace: true });
    }
  }, [program, navigate]);

  // Jangan render apapun jika program belum ada (karena kita redirect)
  if (!program) return null;

  return (
    <FadeIn delay={0.8} direction={"down"}>
      <LayoutProgram program={program} />
    </FadeIn>
  );
}
