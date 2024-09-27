import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <div className="flex gap-4 items-center ">
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors"
              >
                {session.user.name}
              </Link>
              <img
                className="rounded-full h-10 aspect-square"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              ></img>
            </div>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
