<template>
  <v-app>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">

    <!-- call layouts -->
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<style lang="scss">

  .user-info .v-list-item__title
  {
    font-weight: bold;
    font-size:1.2em;
  }
  .user-info .v-list-item__subtitle
  {
    font-size:0.7em;
  }
  .user-info .v-card__actions span
  {
    font-size: 0.7em;
  }
</style>

<script>

export default {
  name: 'App'
};
</script>
