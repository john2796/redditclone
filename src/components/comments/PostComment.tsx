'use client'

import { useClickOutside } from '@mantine/hooks'
import { formatTimeToNow } from '@/lib/utils'
import { CommentRequest } from '@/lib/validators/comment'
import { CommentVote, Comment, User } from '@prisma/client'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { MessageSquare } from 'lucide-react'
import { useRouter } from 'next/router'
import { FC, useRef, useState } from 'react'
import CommentVotes from '../CommentVotes'

interface PostCommentProps {}

const PostComment: FC<PostCommentProps> = ({}) => {
  return <div>PostComment</div>
}

export default PostComment
