import CommentsSection from '@/components/CommentsSection'
import EditorOutput from '@/components/EditorOutput'
import PostVoteServer from '@/components/post-vote/PostVoteServer'
import { buttonVariants } from '@/components/ui/Button'
import { db } from '@/lib/db'
import { redis } from '@/lib/redis'
import { formatTimeToNow } from '@/lib/utils'
import { CachedPost } from '@/types/redis'
import { Post, User, Vote } from '@prisma/client'
import { ArrowBigDown, ArrowBigUp, Loader2 } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

interface SubredditPostPageProps {
  params: {
    postId: string
  }
}

export const dynamic = 'force-static'
export const fetchCache = 'force-no-store'

const SubredditPostPage = () => {
  return <div>{/* TODO [postId]/page.tsx*/}</div>
}

export default SubredditPostPage
