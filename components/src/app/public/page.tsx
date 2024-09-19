'use client'

import { IUserSession } from "@/lib/types/UserSession"
import { useSearchParams } from "next/navigation"

const page = () => {
  const mode = useSearchParams().get('mode')
  const session: IUserSession = {
    user: {
      name: 'test',
      email: 'test@test.com',
      image: 'https://avatars.githubusercontent.com/u/10192985?v=4',
      id: '1'
    },
    expires: '2024-09-26T12:00:00',
    status: 'authenticated'

  }
  return (
    <div>page 
      <pre>
      {
        JSON.stringify({ mode, session }, null, 2)
      }
    </pre>
    </div>
  )
}

export default page