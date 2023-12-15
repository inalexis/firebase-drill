<template>
  <v-app>
    <v-container fluid>
      <v-app-bar app>
        <v-btn to="/">Home</v-btn>
      </v-app-bar>

      <router-view/>

      <v-footer app color="blue darken-4">
        FOOTER
      </v-footer>
    </v-container>
  </v-app>
</template>

<style>


body {
  background-image: url('your-background-image.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.blur-background {
  filter: blur(5px);
}
</style>
