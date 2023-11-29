import Aside from "@/components/aside";
import Image from "next/image";

export default function Principal() {
  return (
    <div>
      <Aside />
      <div className="sm:ml-64 min-h-screen grid gap-3 mt-14 p-4 max-w-full bg-gray-300">
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
    </div>
  );
}
