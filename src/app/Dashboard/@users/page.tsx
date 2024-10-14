import React from 'react'
import  awaitDelay  from "../../../lib/await"
import { users } from "../../../lib/data"



export default async function page()  {

  await awaitDelay(2000)

  return (
    <div className='bg-red-300 rounded-md'>
      <h2 className='p-3'>Usuarios</h2>
      <div>
        <ul className='flex flex-col p-3 text-sm'>
          {users.map((user) => (
            <li key={user.id} className=''> - {user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

