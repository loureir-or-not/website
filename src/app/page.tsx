import PageClient from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = (() => {
  let res: Metadata = {
    title: "loureir-or-not",
    description: "This is loureir-or-not's homepage.",
    openGraph: {
      type: "website",
    },
  };
  res.openGraph!.title = res.title!;
  res.openGraph!.description = res.description!;
  return res;
})();

export default function Page() {
  return <PageClient />;
}
