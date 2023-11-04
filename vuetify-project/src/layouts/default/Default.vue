<template>
  <v-layout class="rounded rounded-md">
    <!-- props :color :elavation :density :location -->
    <v-app-bar title="Application bar"
    :color="'red'"
    :density="'default'"
    :location="'top'">

    </v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      Main Content
    </v-main>
  </v-layout>
</template>