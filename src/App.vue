<template>
  <v-app>
    <v-app-bar app color="primary" dark
      ><v-toolbar-title>Users Application</v-toolbar-title></v-app-bar
    >
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-overlay :value="$overlay.value">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
})
</script>
