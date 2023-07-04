import { getAuthSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { SubredditValidator } from '@/lib/validators/subreddit'
import { z } from 'zod'

export async function POST(req: Request) {
  try {
    const session = await getAuthSession()
    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 })
    }
    const body = await req.json()
    const { name } = SubredditValidator.parse(body)

    // check if subreddit already exists
  } catch (error) {}
}
