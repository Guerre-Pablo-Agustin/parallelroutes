import awaitDelay from "@/lib/await"
import { notifications } from "@/lib/data"


export default async function page  ()  {

  await awaitDelay(1000)

  return (
    <div className='bg-red-500 rounded-md mb-auto'>
      <h2 className="p-3">Notificaciones</h2>
    <div>
      <ul className="flex flex-col p-3 text-sm">
        {notifications.map((notification) => (
          <li key={notification.id}>
          <p> - {notification.description}</p>
          </li>
        ))}
      </ul>  
    </div>      
    </div>
  )
}
