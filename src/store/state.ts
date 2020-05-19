import { User } from '@/types'

export const state: { users: User[] } = {
  users: [],
}

export type State = typeof state
