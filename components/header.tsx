import Image from "next/image";
import "@/styles/header.css"
import AuthStatus from "./auth-status";

export default function Header() {
    return (
        <header>
            <nav className="cabecalho_container">
                <a className="logo_item" href="/">
                    <Image
                        src="/padaria-bolo.png"
                        priority
                        alt="Logo Cake Shop"
                        className="h-10 w-10 rounded-full"
                        width={20}
                        height={20}
                    />
                </a>
                
                <AuthStatus/>

                <div className="cabecalho_icones">
                    <a className="cabecalho_apps" href="/"></a>
                    <a className="cabecalho_notificacoes" href="/"></a>
                    <a className="cabecalho_avatar" href="/"></a>
                </div>
            </nav>
        </header>
    )
};