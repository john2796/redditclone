'use client'

import { cn } from '@/lib/utils'
import { signIn } from 'next-auth/react'
import * as React from 'react'
import { FC } from 'react'
import { Button } from './ui/Button'
import { Icons } from './Icons'

interface UserAuthFormProps {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const { toast } = useToast()
  return <div>UserAuthForm</div>
}

export default UserAuthForm
