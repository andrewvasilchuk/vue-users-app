import { GetterTree } from 'vuex'
import { State } from './state'

export const getters: GetterTree<State, State> = {
  getUserById: state => (id: number) => {
    return state.users.find(user => user.id === id)
  },
}
