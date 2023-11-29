import { FaCartShopping } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { getServerSession } from "next-auth/next";
import { ButtonSignOut } from "./sign-out";
import Link from "next/link";

export default async function Navbar() {
  const session = await getServerSession();

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3 flex items-center justify-between">
        <div className="menu_esquerdo flex items-center justify-start">
          <Link href="/" className="flex ml-2 md:mr-24">
            <img
              src="\principal\padaria-bolo.png"
              className="h-8 mr-3 rounded-full"
              alt="Loja Logo"
            />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
              RafaCakes
            </span>
          </Link>
        </div>
        <div className="menu_direito flex gap-2">
          <div className="flex items-center content-center w-10 h-8 pl-1 bg-gray-600 rounded-md hover:bg-blue-700 group">
            <Link href="/carrinho">
              <FaCartShopping className="w-8 text-lg group-hover:text-white text-gray-400" />
            </Link>
          </div>
          <div className="flex items-center content-center w-10 h-8 pl-1 bg-gray-600 rounded-md hover:bg-blue-700 group">
            {session ? (
              <ButtonSignOut className="group-hover:text-white">
                <MdOutlineLogout className="text-gray-400 group-hover:text-white w-8 text-xl" />
              </ButtonSignOut>
            ) : (
              <Link href="/login" className="group-hover:text-white">
                <IoPerson className="text-gray-400 group-hover:text-white w-8 text-xl" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
