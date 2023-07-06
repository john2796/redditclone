'use client'

import { toast } from '@/hooks/use-toast'
import { Button } from './ui/Button'
import { useCustomToasts } from '@/hooks/use-custom-toasts'
import { cn } from '@/lib/utils'
import { CommentVoteRequest } from '@/lib/validators/vote'
import { usePrevious } from '@mantine/hooks'
import { CommentVote, VoteType } from '@prisma/client'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { ArrowBigDown, ArrowBigUp } from 'lucide-react'
import { FC, useState } from 'react'

interface CommentVotesProps {
  commentId: string
  votesAmt: number
  currentVote?: PartialVote
}

type PartialVote = Pick<CommentVote, 'type'>

const CommentVotes: FC<CommentVotesProps> = ({
  commentId,
  votesAmt: _votesAmt,
  currentVote: _currentVote
}) => {
  const { loginToast } = useCustomToasts()
  const [votesAmt, setVotesAmt] = useState<number>(_votesAmt)
  const [currentVote, setCurrentVote] = useState<PartialVote | undefined>(
    _currentVote
  )

  const prevVote = usePrevious(currentVote)

  // const {mutate:}

  return <div>CommentVotes</div>
}

export default CommentVotes
