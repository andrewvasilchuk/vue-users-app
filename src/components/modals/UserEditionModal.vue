<template>
  <v-dialog v-model="visible" width="320"
    ><v-card v-if="user !== null">
      <v-form ref="form" class="pa-4" @submit.prevent="submitHandler"
        ><v-text-field
          v-model="user.username"
          :rules="$rules.username"
          label="Username"
          placeholder="John Doe"
        ></v-text-field>
        <v-text-field
          v-model="user.email"
          :rules="$rules.email"
          label="Email"
          placeholder="example@gmail.com"
        ></v-text-field>
        <v-text-field
          v-model="user.address.city"
          :rules="$rules.city"
          label="City"
          placeholder="Kiev"
        ></v-text-field>
        <v-text-field
          v-model="user.address.street"
          :rules="$rules.street"
          label="Street"
          placeholder="Khreshchatyk"
        ></v-text-field
        ><v-text-field
          v-model="user.address.block"
          :rules="$rules.block"
          label="Block"
          placeholder="Block"
        ></v-text-field
        ><v-card-actions
          ><v-btn
            depressed
            large
            block
            color="primary"
            :loading="loading"
            type="submit"
            >Submit</v-btn
          ></v-card-actions
        ></v-form
      ></v-card
    ></v-dialog
  >
</template>

<script lang="ts">
import Vue from 'vue'
import { User } from '@/types'
import { UserDTO } from '@/dto/User'
import { Event } from '@/events'
import cloneDeep from 'lodash.clonedeep'
import merge from 'lodash.merge'
import omitBy from 'lodash.omitby'
import isEmpty from 'lodash.isempty'
import { ActionTypes } from '@/store/action-types'

export default Vue.extend({
  name: 'UserCreationModal',
  data() {
    return {
      visible: false,
      user: null,
      loading: false,
    } as {
      visible: boolean
      user: null | User
      loading: boolean
    }
  },
  created() {
    this.$bus.$on(Event.OPEN_USER_EDITITION_MODAL, this.openHandler)
  },
  beforeDestroy() {
    this.$bus.$on(Event.OPEN_USER_EDITITION_MODAL, this.openHandler)
  },
  methods: {
    openHandler(id: User) {
      const user = this.$store.getters.getUserById(id)

      if (user !== undefined) {
        this.user = merge(UserDTO.emptyUser, cloneDeep(user))
        this.visible = true
        this.loading = false
      } else {
        // handle
      }
    },
    async submitHandler() {
      const valid = this.$refs.form.validate()

      if (valid === true) {
        const { id, username, email, address } = this.user!

        const user = new UserDTO(username, email, omitBy(address, isEmpty))

        this.loading = true
        const { success } = await this.$store.dispatch(ActionTypes.EDIT_USER, {
          id,
          user,
        })

        if (success === true) {
          this.visible = false
        } else {
          this.loading = false
          // handle error
        }
      }
    },
  },
})
</script>
