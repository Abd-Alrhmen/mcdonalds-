import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { fetcher } from './../utils/fetcher';


function Layout() {
  const { data: menuItems, isLoading, isError, error } = useQuery({
  queryKey: ["menu"],
  queryFn: () => fetcher("/Menu.json"),
  staleTime: 1000 * 60 * 5,
});

if (isLoading) return <p className="text-center p-4">Loading Data..</p>;
if (isError) return <p className="text-red-500 text-center p-4"> Error: {error.message}</p>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-4 pt-[80px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
