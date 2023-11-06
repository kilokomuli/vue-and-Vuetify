<script setup lang="ts">
import { ref } from 'vue';
const drawer = ref(false);
</script>
<template>
  <v-layout class="rounded rounded-md">
    <!-- props :color :elavation :density :location -->
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon variant="text" @click.stop="$event => drawer = !drawer">

        </v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link to="/" class="text-decoration-none text-blue">Blog</router-link>
        </v-toolbar-title>
      </template>
      <template #append>
        <div>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-avatar color="info" v-bind="props">
                <v-icon icon="mdi-account-circle"></v-icon>
              </v-avatar>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in ['Profile', 'Settings', 'Log out']" :key="index" :value="index">
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </template>
    </v-app-bar>

    <v-navigation-drawer expand-on-hover rail v-model="drawer">
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-note-outline" :to="'/posts'" title="Posts" value="posts"></v-list-item>
        <v-list-item prepend-icon="mdi-comment-outline" :to="'/comments'" title="Comments" value="comment"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="min-height: 300px;">
      <div class="pa-5">
        <router-view></router-view>
      </div>

    </v-main>
  </v-layout>
</template>