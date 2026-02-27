import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Frontmatter {
  title: string;
  description: string;
  date: Date;
}

type Post = {
  frontmatter: Frontmatter;
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const { frontmatter }: Post = await import(`@/posts/${slug}.md`);
    const metadata: Metadata = {
      title: `${frontmatter.title} | loureir-or-not`,
      description: `${frontmatter.description}`,
      openGraph: {
        type: "website",
      },
    };
    return metadata;
  } catch {
    // This is handled by the page itself.
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  try {
    const { default: Post, frontmatter }: Post = await import(
      `@/posts/${slug}.md`
    );
    return (
      <article className="flex flex-col gap-4 items-start">
        <div>
          <h1>{frontmatter.title}</h1>
          <sub>
            {frontmatter.description} - Published on{" "}
            {frontmatter.date.toString()}
          </sub>
        </div>
        <hr />
        <Post />
      </article>
    );
  } catch (err) {
    if (
      typeof err == "object" &&
      err &&
      "code" in err &&
      typeof err.code == "string" &&
      err.code == "MODULE_NOT_FOUND"
    ) {
      notFound();
    }
    throw err;
  }
}
