import Link from 'next/link'
import React from 'react'

export const RegisterAction: React.FC<{url:string}> = ({url}) => {
  return (
    <div>
        <Link href={url} className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Register Now
        </Link>
    </div>
  )
}
