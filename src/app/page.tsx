import MainContent from "@/components/layout/MainContent";
import Link from "next/link";
import { Button } from "@mui/material";

export default function Page() {
  return (
    <MainContent>
      <h1>UI Sandbox</h1>
      <p>Drop test components into the grid below.</p>

      <div className="content-grid">
        <section className="card">
          <h2>Moving Background</h2>
          <Link href="/test/moving-bg">Open</Link>
        </section>

        <section className="card">
          <h2>Animated Text</h2>
          <Link href="/test/animated-text">Open</Link>
        </section>

        {/* <section className="card">
          <h2>Special Buttons</h2>
          <Button variant="contained">Try</Button>
        </section> */}
      </div>
    </MainContent>
  );
}
