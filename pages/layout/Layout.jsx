import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen pb-2">
      <Navbar />
      <main className="w-2/3 p-4 bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
