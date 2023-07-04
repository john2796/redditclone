import { formatTimeToNow } from '@/lib/utils'
import { Post, Vote, User } from '@prisma/client'
import { FC, useRef } from 'react'

type PartialVote = Pick<Vote, 'type'>

interface PostProps {
  post: Post & {
    author: User
    votes: Vote[]
  }
  votesAmt: number
  subredditName: string
  currentVote?: PartialVote
  commentAmt: number
}

const Post: FC<PostProps> = ({
  post,
  votesAmt: _votesAmt,
  currentVote: _currentVote,
  subredditName,
  commentAmt
}) => {
  const pRef = useRef<HTMLParagraphElement>(null)

  return (
    <div>
      <div>
        {/* PostVoteClient */}

        <div>
          <div>
            {subredditName && (
              <>
                <a>
                  <span className="px-1">•</span>
                </a>
              </>
            )}
            <span>Posted by u/{post.author.username}</span>
            {formatTimeToNow(new Date(post.createdAt))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
