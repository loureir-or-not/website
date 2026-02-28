import Link from "next/link";
import Card from "./Card";

interface Props {
  slug: string;
  id: number;
}

export default async function ArticleCard({ slug, id }: Readonly<Props>) {
  const { frontmatter } = await import(`@/posts/${slug}.md`);
  if (frontmatter.published) {
    return (
      <Card key={id}>
        <h2>
          <Link href={`/blog/${slug}`}>{frontmatter.title}</Link>
        </h2>
        <p>
          {frontmatter.description} - Published on {frontmatter.date}
        </p>
      </Card>
    );
  } else {
    <></>;
  }
}
