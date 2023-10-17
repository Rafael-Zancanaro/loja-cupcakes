import "@/styles/cupcake.css"
import Image from "next/image";
import Menu from "@/components/menu"
import SignOut from "@/components/sign-out";
import Header from "@/components/header";

export default function Cupcakes() {
  return (
    <div className="cupcakes_corpo">
      <Header />
      <Menu />
        <ul className="lista_cupcakes">
          <li className="item">
            <Image
              src="/padaria-bolo.png"
              alt="Logo Cake Shop"
              width={1000}
              height={1000}
              />
          </li>
        </ul>
      <SignOut />
    </div>
  );
}