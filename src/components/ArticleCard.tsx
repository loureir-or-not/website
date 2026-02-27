import Link from "next/link";
import Card from "./Card";

interface Props {
  slug: string;
  key: number;
}

export default async function ArticleCard({ slug, key }: Readonly<Props>) {
  const { frontmatter } = await import(`@/posts/${slug}.md`);
  if (frontmatter.published) {
    return (
      <Card key={key}>
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
