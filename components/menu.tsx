import "@/styles/menu.css"
import SignOut from "./sign-out";

export default function Menu(){
  return (
    <div className="menu_container">
      <ul className="opcao_lista">
            <li>
                <a className="opcao" href="/">Início</a>
            </li>
            <li>
                <a className="opcao" href="/cupcakes">
                    <span>Cupcakes</span></a>
            </li>
            <li>
                <a className="opcao" href="#">
                    <span>Bolos</span></a>
            </li>
            <li>
                <a className="opcao" href="#">
                    <span>Tortas</span></a>
            </li>
            <li>
                <a className="opcao" href="#">
                    <span>Sucos</span></a>
            </li>
            <li>
                <a className="opcao" href="/login">
                    <span>login</span></a>
            </li>
        </ul>
    </div>
  );
}