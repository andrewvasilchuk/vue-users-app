<template>
  <v-dialog v-model="visible" width="320"
    ><v-card>
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
        ><v-btn
          depressed
          large
          block
          color="primary"
          :loading="loading"
          type="submit"
          >Submit</v-btn
        ></v-form
      ></v-card
    ></v-dialog
  >
</template>

<script lang="ts">
import Vue from 'vue'
import omitBy from 'lodash.omitby'
import isEmpty from 'lodash.isempty'
import { UserDTO } from '@/dto/User'
import { ActionTypes } from '@/store/action-types'
import { Event } from '@/events'

export default Vue.extend({
  name: 'UserCreationModal',
  data() {
    return {
      visible: false,
      user: UserDTO.emptyUser,
      loading: false,
    }
  },

  created() {
    this.$bus.$on(Event.OPEN_USER_CREATION_MODAL, this.openHandler)
  },
  beforeDestroy() {
    this.$bus.$on(Event.OPEN_USER_CREATION_MODAL, this.openHandler)
  },

  methods: {
    openHandler() {
      this.visible = true
      this.loading = false
    },
    async submitHandler() {
      const valid = this.$refs.form.validate()

      if (valid === true) {
        this.loading = true

        const { username, email, address } = this.user

        const user = new UserDTO(username, email, omitBy(address, isEmpty))

        const { success } = await this.$store.dispatch(
          ActionTypes.CREATE_USER,
          user
        )

        if (success === true) {
          this.visible = false
          this.reset()
        } else {
          this.loading = false
        }
      }
    },
    reset() {
      this.user = UserDTO.emptyUser
    },
  },
})
</script>
