<template>
  <v-card>
    <v-img :src="hero.image" height="200"></v-img>
    <v-card-title>{{ hero.name }}</v-card-title>
    <v-card-subtitle>{{ hero.function }}</v-card-subtitle>
    <v-card-text>
      <div>Titulo: {{ hero.title }}</div>
      <div>Ataque: {{ hero.attack }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    hero: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
