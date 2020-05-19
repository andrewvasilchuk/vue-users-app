import { ActionTree } from 'vuex'
import { User } from '@/types'
import { ServiceContainer } from '@/services'
import { State } from './state'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'

export const actions: ActionTree<State, State> = {
  async [ActionTypes.GET_USERS]({ commit }) {
    try {
      const res = await ServiceContainer.getInstance()
        .getUserService()
        .list()

      commit(MutationTypes.SET_USERS, res.data)

      return { success: true }
    } catch (e) {
      return { success: false }
    }
  },
  async [ActionTypes.CREATE_USER]({ commit }, user: User) {
    try {
      const res = await ServiceContainer.getInstance()
        .getUserService()
        .create(user)

      console.log(res.data)

      commit(MutationTypes.ADD_USER, res.data)

      return { success: true }
    } catch (e) {
      return { success: false }
    }
  },
  async [ActionTypes.EDIT_USER](
    { commit },
    { id, user }: { id: number; user: Partial<User> }
  ) {
    try {
      const res = await ServiceContainer.getInstance()
        .getUserService()
        .edit(id, user)

      commit(MutationTypes.EDIT_USER, { id, user: res.data })

      return { success: true }
    } catch (e) {
      return { success: false }
    }
  },
  async [ActionTypes.DELETE_USER]({ commit }, id: number) {
    try {
      await ServiceContainer.getInstance()
        .getUserService()
        .delete(id)

      commit(MutationTypes.DELETE_USER, id)

      return { success: true }
    } catch (e) {
      return { success: false }
    }
  },
}
