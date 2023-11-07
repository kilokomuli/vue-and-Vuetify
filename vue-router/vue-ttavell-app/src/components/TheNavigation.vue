<template>
  <div id="nav">
    <!-- static links -->
    <!-- <router-link to="/">Home</router-link> 
      <router-link to="/brazil">Brazil</router-link>
      <router-link to="/jamaica">Jamaica</router-link>
      <router-link to="/hawaii">Hawaii</router-link>
      <router-link to="/panama">Panama</router-link> -->
    <router-link id="logo" to="/">
      vue-Travel-App
    </router-link>
    <router-link v-for="destination in destinations" :key="destination.id"
      :to="{ name: 'destination.show', params: { id: destination.id } }">
      {{ destination.name }}
    </router-link>
  </div>
</template>
<!-- <style lang="css">
#nav .active-link {
    color: aquamarine;
    border-bottom: 6px solid red;
}
</style> -->
<script>
import sourceData from '@/data.json'
export default {
  data() {
    return {
      destinations: sourceData.destinations
    }
  },
}
</script>