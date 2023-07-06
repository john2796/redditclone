import { getAuthSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { Comment, CommentVote, User } from '@prisma/client'

import CreateComment from './CreateComment'
import PostComment from './comments/PostComment'

interface CommentsSectionProps {}

const CommentsSection = ({}) => {
  return <div>CommentsSection</div>
}

export default CommentsSection
