import Link from "next/link";

interface NavButton {
  name: string;
  href: string;
  id: number;
}

function createNavButton(name: string, href: string, id: number) {
  return (
    <Link href={href} key={id} className="navbutton">
      {name}
    </Link>
  );
}

export default function NavBar() {
  const navs: NavButton[] = [{ name: "Home", href: "/", id: 0 }];
  return (
    <>
      <nav className="flex justify-center md:grid grid-cols-2 gap-4">
        <div className="hidden md:flex">
          <Link href="/" className="navbutton">
            Renato Loureiro
          </Link>
        </div>
        <div className="flex gap-4 justify-end">
          {navs.map(({ name, href, id }) => createNavButton(name, href, id))}
        </div>
      </nav>
    </>
  );
}
