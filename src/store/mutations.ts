import { MutationTree } from 'vuex'
import { User } from '@/types'
import { State } from './state'
import { MutationTypes } from './mutation-types'

export const mutations: MutationTree<State> = {
  [MutationTypes.SET_USERS](state, users: User[]) {
    state.users = users
  },
  [MutationTypes.ADD_USER](state, user: User) {
    state.users.push(user)
  },
  [MutationTypes.EDIT_USER](state, { id, user }: { id: number; user: User }) {
    const index = state.users.findIndex(u => u.id === id)

    if (index !== -1) {
      state.users.splice(index, 1, user)
    }
  },
  [MutationTypes.DELETE_USER](state, id: number) {
    state.users = state.users.filter(user => user.id !== id)
  },
}
