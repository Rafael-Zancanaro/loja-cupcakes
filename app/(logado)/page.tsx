import Aside from "@/components/aside";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Principal() {
  return (
    <div>
      <Aside />
      <div className="sm:ml-64 grid gap-3 mt-14 p-4 max-w-full bg-gray-300">
        <div className="flex justify-center">
          <Image
            width={260}
            height={200}
            className="w-2/4 rounded-lg border-2 border-gray-800"
            src="/cupcakes/trento.jpg"
            alt="Imagem home"
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div>
            <Image
              width={260}
              height={200}
              className="rounded-md h-full w-full object-cover border-2 border-gray-800"
              src="/cupcakes/ganache.png"
              alt="Imagem home"
            />
          </div>
          <div>
            <Image
              width={260}
              height={200}
              className="rounded-md h-full w-full object-cover border-2 border-gray-800"
              src="/tortas/torta-biz.jpg"
              alt="Imagem home"
            />
          </div>
          <div>
            <Image
              width={260}
              height={200}
              className="rounded-md h-full w-full object-cover border-2 border-gray-800"
              src="/bolos/kitkat.jpg"
              alt="Imagem home"
            />
          </div>
          <div>
            <Image
              width={260}
              height={200}
              className="rounded-md h-full w-full object-cover border-2 border-gray-800"
              src="/bolos/recheio-creme.jpg"
              alt="Imagem home"
            />
          </div>
          <div>
            <Image
              width={260}
              height={200}
              className="rounded-md h-full w-full object-cover border-2 border-gray-800"
              src="/tortas/banoff.jpg"
              alt="Imagem home"
            />
          </div>
        </div>
      </div>
      <footer className="flex flex-col justify-center items-center bg-gray-400 h-36">
        <p>Site Desenvolvido por Rafael Zancanaro Cardoso</p>
        <p>Me siga nas Redes Sociais 👍</p>
        <div className="flex gap-3">
          <a
            className="flex flex-row content-center items-center gap-1 bg-blue-400 rounded-md p-1"
            href="https://github.com/Rafael-Zancanaro"
            target="_blank"
          >
            <FaGithub />
            Github
          </a>
          <a
            className="flex flex-row content-center items-center gap-1 bg-blue-400 rounded-md p-1"
            href="https://www.instagram.com/rafa_zancanaro/"
            target="_blank"
          >
            <FaInstagram />
            Instagram
          </a>
          <a
            className="flex flex-row content-center items-center gap-1 bg-blue-400 rounded-md p-1"
            href="https://www.linkedin.com/in/rafael-zancanaro-cardoso-0a1854215/"
            target="_blank"
          >
            <FaLinkedin />
            Linkedin
          </a>
        </div>
      </footer>
    </div>
  );
}
