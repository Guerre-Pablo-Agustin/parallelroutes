import awaitDelay from "@/lib/await";
import { orders } from "@/lib/data";

export default async function Orders() {

await awaitDelay(4000)

  return (
    <div className="bg-red-300 rounded-md">
      <h3 className="p-3">Lista de ordenes</h3>
      <ul className="flex flex-col text-sm p-3">
        {orders.map((order) => (
          <li key={order.id}> - {order.user.name} - {order.createdAt}</li>
        ))}
      </ul>
    </div>
  );
}
