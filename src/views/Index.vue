<template>
  <v-container>
    <section>
      <users-card
        :users="users"
        @add="addHandler"
        @edit="editHandler"
        @delete="deleteHandler"
      ></users-card>
    </section>
    <user-creation-modal></user-creation-modal>
    <user-edition-modal></user-edition-modal>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import UsersCard from '@/components/UsersCard.vue'
import UserCreationModal from '@/components/modals/UserCreationModal.vue'
import UserEditionModal from '@/components/modals/UserEditionModal.vue'
import { ActionTypes } from '@/store/action-types'
import { Event } from '@/events'
import { User } from '../types'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    UsersCard,
    UserCreationModal,
    UserEditionModal,
  },

  computed: {
    users() {
      return this.$store.state.users
    },
  },
  mounted() {
    this.$store.dispatch(ActionTypes.GET_USERS)
  },
  methods: {
    addHandler() {
      this.$bus.$emit(Event.OPEN_USER_CREATION_MODAL)
    },
    editHandler(id: number) {
      this.$bus.$emit(Event.OPEN_USER_EDITITION_MODAL, id)
    },
    userEditHandler(user: User) {},
    async deleteHandler(id: number) {
      this.$overlay.value = true
      const { success } = await this.$store.dispatch(
        ActionTypes.DELETE_USER,
        id
      )
      this.$overlay.value = false
    },
  },
})
</script>
