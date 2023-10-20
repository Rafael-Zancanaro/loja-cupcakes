import { Item } from "components/item";
import { tortas } from "constants/tortas";

export default function Tortas() {
  return (
    <div className="p-4 mt-14">
      <div className="grid gap-4 mb-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tortas.map((item) => (
          <Item src={item.image} nome={item.name} preco={item.price} />
        ))}
      </div>
    </div>
  );
}
