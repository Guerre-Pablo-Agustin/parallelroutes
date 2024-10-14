import awaitDelay from "@/lib/await"
import { activities } from "@/lib/data"

export default async function  page () {

   await awaitDelay(3000)
  return (
    <div className='bg-red-400 rounded-md'>
      <h2 className="p-3">Actividades recientes</h2>
      <ul className="flex flex-col p-3 text-sm">
        {activities.map((activity) => (
          <li key={activity.id}>
            <p> - {activity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

