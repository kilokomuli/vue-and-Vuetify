<template>
  <v-layout class="rounded rounded-md">
    <!-- props :color :elavation :density :location -->
    <v-app-bar title="Application bar">
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

    <v-navigation-drawer expand-on-hover rail>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
        <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>