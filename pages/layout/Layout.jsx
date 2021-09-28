import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import Link from "next/link";

function Layout({ children }) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className="flex flex-col items-center justify-between min-h-screen pb-2">
      <Navbar />
      <main className="w-2/3 p-4 bg-gray-50">{children}</main>
      {path !== "/" && (
        <div>
          <Link href="/">
            <button>Back</button>
          </Link>

          <a
            href={
              "https://github.com/sushil-kamble/react-snips/blob/main/pages" +
              path +
              ".jsx"
            }
            className="ml-4"
            target="_blank"
            rel="noopener"
          >
            <button>Source Code</button>
          </a>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Layout;
