'use client'

import { usePathname } from 'next/navigation'
import { buttonVariants } from './ui/Button'
import { ChevronLeft } from 'lucide-react'

const ToFeedButton = () => {
  const pathname = usePathname()

  // if path is /r/mycom, turn into /r/mycom/post/cligad6jf0003uhest4qqkeco.
  // if path  /r/mycom/post/cligad6jf0003uhest4qqkeco turn into is /r/mycom.
  const subredditPath = getSubredditPath(pathname)

  return (
    <a href={subredditPath} className={buttonVariants({ variant: 'ghost' })}>
      <ChevronLeft className="h-4 w-4 mr-1" />
      {subredditPath === '/' ? 'Back home' : 'Back to community'}
    </a>
  )
}

const getSubredditPath = (pathname: string) => {
  const splitPath = pathname.split('/')

  if (splitPath.length === 3) return '/'
  else if (splitPath.length > 3) return `/${splitPath[1]}/${splitPath[2]}`
  else return '/'
}

export default ToFeedButton
