import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | loureir-or-not",
  description: "This is what happens when we don't find a page.",
};

export default function Page() {
  return (
    <article className="flex flex-col gap-2 items-center">
      <h1 className="bigBadText">404</h1>
      <p>
        Couldn't find the page you are looking for. Maybe try something else?
      </p>
    </article>
  );
}
