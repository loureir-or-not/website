import ArticleCard from "@/components/ArticleCard";
import { Metadata } from "next";
import fs from "fs/promises";
import path from "path";

export const metadata: Metadata = {
  title: "Blog | loureir-or-not",
  description: "This is loureir-or-not's blog.",
  openGraph: {
    type: "website",
  },
};

export default async function Page() {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const posts = (await fs.readdir(postsDirectory))
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.substring(0, file.indexOf(".md")))
    .map((slug, index) => <ArticleCard slug={slug} key={index} />);
  return (
    <article className="flex flex-col gap-4">
      <p>
        I write articles as well. They serve as just collections of my own
        thoughts on a current day. This page hopefully shows them all.
      </p>
      {posts}
    </article>
  );
}
