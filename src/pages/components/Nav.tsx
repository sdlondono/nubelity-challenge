import Link from "next/link";
const Nav: React.FC = () => {
  return (
    <nav className="w-full">
      <ul className="flex gap-3 justify-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
