import Link from "next/link";
function Navbar() {
  return (
    <div className="bg-blue-200 w-screen text-center">
      <h1>
        <Link href="/"> React Snippets</Link>
      </h1>
    </div>
  );
}

export default Navbar;
