<template>
  <v-card max-width="512" class="mx-auto">
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>Users</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="searching = !searching">
        <v-icon>{{ searching === true ? 'mdi-close' : 'mdi-magnify' }}</v-icon>
      </v-btn>
      <v-btn icon @click="addHandler">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>
    <div v-if="searching === true" class="pa-4">
      <v-text-field
        v-model="text"
        outlined
        hide-details
        single-line
        label="Search"
      ></v-text-field>
    </div>
    <v-list v-if="filteredUsers.length > 0">
      <v-list-item v-for="user in filteredUsers" :key="user.id">
        <v-list-item-content>
          <v-list-item-title>{{ user.username }}</v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon color="primary" large @click="editHandler(user.id)"
            ><v-icon>mdi-pencil</v-icon></v-btn
          ></v-list-item-action
        >
        <v-list-item-action>
          <v-btn icon color="error" large @click="deleteHandler(user.id)"
            ><v-icon>mdi-delete</v-icon></v-btn
          ></v-list-item-action
        >
      </v-list-item>
    </v-list>
    <div v-else class="pa-4">
      <v-alert border="left" color="primary" dark dense>
        There are no users, matching the following username
      </v-alert>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { User } from '@/types'

export default Vue.extend({
  name: 'UsersCard',
  props: {
    users: {
      type: Array as PropType<Array<User>>,
      required: true,
    },
  },
  data() {
    return {
      text: '',
      searching: false,
    }
  },
  computed: {
    filteredUsers() {
      if (this.searching === true && this.text !== '') {
        return this.users.filter(user =>
          user.username.toUpperCase().startsWith(this.text.toUpperCase())
        )
      } else {
        return this.users
      }
    },
  },
  methods: {
    addHandler() {
      this.$emit('add')
    },
    editHandler(id: number) {
      this.$emit('edit', id)
    },
    deleteHandler(id: number) {
      this.$emit('delete', id)
    },
  },
})
</script>
