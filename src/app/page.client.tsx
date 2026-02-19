"use client";

import {
  ChatBubble,
  Email,
  GitHub,
  LinkedIn,
  Telegram,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import Card from "../components/Card";

export default function Page() {
  return (
    <article className="flex flex-col gap-4">
      <section className="flex flex-col-reverse md:flex-row-reverse gap-4 items-start">
        <div className="flex flex-col gap-2">
          <h1>It&apos;s pleasant to see you. My name is Renato Loureiro.</h1>
          <p>
            I am a junior software engineer from the United Kingdom. I have
            experience in React and Next.js, Python and Go, and Linux and GitHub
            Actions. I am always open to learning new things. I also like
            reading and writing anything from literature, to screenplays, to
            code, hence I am a programmer. I also have experience in maintaining
            Linux systems, as well as FreeBSD systems.
          </p>
          <div className="flex justify-evenly h-full">
            <Link
              href="https://www.linkedin.com/in/renato-loureiro-530aa43b1/"
              title="LinkedIn"
            >
              <LinkedIn />
            </Link>
            <Link href="https://github.com/loureir-or-not" title="GitHub">
              <GitHub />
            </Link>
            <Link href="mailto:loureiror@proton.me" title="Email">
              <Email />
            </Link>
            <Link href="#" title="Telegram (@loureir_or_not)">
              <Telegram />
            </Link>
          </div>
        </div>
      </section>
      <h1>Where did I study?</h1>
      <Card>
        <h2>City of Peterborough Academy</h2>
        <h3>Achievements</h3>
        <ul>
          <li>Pass - Functional Skills Level 2 Maths</li>
          <li>Pass - Functional Skills Level 2 English</li>
          <li>Level 5 - GCSE Maths</li>
          <li>Level 5 - GCSE English</li>
        </ul>
      </Card>
      <Card>
        <h2>Peterborough College</h2>
        <h3>Achievements</h3>
        <ul>
          <li>Merit - BTEC Media Level 2</li>
        </ul>
      </Card>
      <h1>Projects</h1>
      <Card>
        <h2>collatzmark</h2>
        <p>
          A Rosetta-Code project for benchmarking the collatz conjecture.
          Includes examples written in Go, Rust, Python, and other languages.
        </p>
        <a href="https://github.com/loureir-or-not/collatzmark">
          <GitHub />
        </a>
      </Card>
      <Card>
        <h2>sget</h2>
        <p>
          It gets information about your system, and prints it out in a pretty
          way. It is written entirely in Haskell.
        </p>
        <a href="https://github.com/loureir-or-not/sget">
          <GitHub />
        </a>
      </Card>
      <Card>
        <h2>This website</h2>
        <p>
          You're looking at it right now! It is written entirely in TypeScript,
          Next.js and TailwindCSS. It is also hosted on Vercel due to it's
          integration with Next.js.
        </p>
        <a href="https://github.com/loureir-or-not/website">
          <GitHub />
        </a>
      </Card>
      <h1>Skills</h1>
      <section className="grid grid-cols-4 gap-2 content-stretch">
        <Card>Frontend development</Card>
        <Card>Library development</Card>
        <Card>Backend development</Card>
        <Card>CI development</Card>
        <Card>GitHub Actions</Card>
        <Card>Vercel</Card>
        <Card>Rust</Card>
        <Card>Go</Card>
        <Card>Python</Card>
        <Card>Ruby</Card>
        <Card>Kotlin</Card>
        <Card>Java</Card>
        <Card>C++</Card>
        <Card>C</Card>
        <Card>Bash</Card>
        <Card>Batch</Card>
        <Card>Linux</Card>
        <Card>FreeBSD</Card>
        <Card>Windows Server</Card>
      </section>
      <h1>Let's get in touch!</h1>
      <p>
        Interested in seeing what I can do?{" "}
        <Link href="mailto:loureiror@proton.me">Contact me!</Link> I'd love to
        hear from you!
      </p>
    </article>
  );
}
