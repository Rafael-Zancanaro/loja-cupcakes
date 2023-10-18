import "@/styles/cupcake.css"
import Image from "next/image";
import Menu from "@/components/menu"
import Header from "@/components/header";
import BotaoCarrinho from "@/components/botao-carrinho";

export default function Cupcakes() {
  return (
    <div>
      <Header />
      <div className="cupcakes">
        <Menu />
        <ul className="lista_cupcakes">
          <li className="item">
            <Image
              src="/padaria-bolo.png"
              alt="Logo Cake Shop"
              width={303}
              height={280}
            />
            <p>R$ 4,99</p>
            <BotaoCarrinho />
          </li>
          <li className="item">
            <Image
              src="/padaria-bolo.png"
              alt="Logo Cake Shop"
              width={303}
              height={280}
            />
            <p>R$ 4,99</p>
            <BotaoCarrinho />
          </li>
          <li className="item">
            <Image
              src="/padaria-bolo.png"
              alt="Logo Cake Shop"
              width={303}
              height={280}
            />
            <p>R$ 4,99</p>
            <BotaoCarrinho />
          </li>
          <li className="item">
            <Image
              src="/padaria-bolo.png"
              alt="Logo Cake Shop"
              width={303}
              height={280}
            />
            <p>R$ 4,99</p>
            <BotaoCarrinho />
          </li>
          <li className="item">
            <Image
              src="/padaria-bolo.png"
              alt="Logo Cake Shop"
              width={303}
              height={280}
            />
            <p>R$ 4,99</p>
            <BotaoCarrinho />
          </li>
          <li className="item">
            <Image
              src="/padaria-bolo.png"
              alt="Logo Cake Shop"
              width={303}
              height={280}
            />
            <p>R$ 4,99</p>
            <BotaoCarrinho />
          </li>
          <li className="item">
            <Image
              src="/padaria-bolo.png"
              alt="Logo Cake Shop"
              width={303}
              height={280}
            />
            <p>R$ 4,99</p>
            <BotaoCarrinho />
          </li>
          <li className="item">
            <Image
              src="/padaria-bolo.png"
              alt="Logo Cake Shop"
              width={303}
              height={280}
            />
            <div className="footer_item">
              <p>R$ 4,99</p>
              <BotaoCarrinho />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}