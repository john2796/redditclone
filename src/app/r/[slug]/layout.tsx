// SubscribeLeaveToggle
// ToFeedButton

import { getAuthSession } from '@/lib/auth'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Reddit',
  description: 'A reddit clone built with Next.js and Typescript'
}

const Layout = async ({
  children,
  params: { slug }
}: {
  children: ReactNode
  params: { slug: string }
}) => {
  const session = await getAuthSession()

  return (
    <div>
      <div>
        <ToFeedButton />
      </div>
    </div>
  )
}

export default Layout
