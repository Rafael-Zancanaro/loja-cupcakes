import "@/styles/cupcake.css"
import Image from "next/image";
import Menu from "@/components/menu"
import Header from "@/components/header";

export default function Cupcakes() {
  return (
    <div className="div_cupcakes_principal">
      <Header />
      <Menu />
      <ul className="lista_cupcakes">
        <li className="item">
          <Image
            src="/padaria-bolo.png"
            alt="Logo Cake Shop"
            width={180}
            height={203}
          />
        </li>
        <li className="item">
          <Image
            src="/padaria-bolo.png"
            alt="Logo Cake Shop"
            width={180}
            height={203}
          />
        </li>
        <li className="item">
          <Image
            src="/padaria-bolo.png"
            alt="Logo Cake Shop"
            width={180}
            height={203}
          />
        </li>
        <li className="item">
          <Image
            src="/padaria-bolo.png"
            alt="Logo Cake Shop"
            width={180}
            height={203}
          />
        </li>
        <li className="item">
          <Image
            src="/padaria-bolo.png"
            alt="Logo Cake Shop"
            width={180}
            height={203}
          />
        </li>
        <li className="item">
          <Image
            src="/padaria-bolo.png"
            alt="Logo Cake Shop"
            width={180}
            height={203}
          />
        </li>
        <li className="item">
          <Image
            src="/padaria-bolo.png"
            alt="Logo Cake Shop"
            width={180}
            height={203}
          />
        </li>
        <li className="item">
          <Image
            src="/padaria-bolo.png"
            alt="Logo Cake Shop"
            width={180}
            height={203}
          />
        </li>
      </ul>
    </div>
  );
}