import {CountdownComponent} from '@/components'
function page() {
  return (
    <div>
      <CountdownComponent url='/api/auth/signin'  targetDate={'2024-09-26T12:00:00'} />
    </div>
  )
}

export default page