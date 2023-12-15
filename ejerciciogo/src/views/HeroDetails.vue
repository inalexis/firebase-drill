<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col>
        <v-img :src="hero.image" height="300"></v-img>
        <v-card>
          <v-card-title>{{ hero.name }}</v-card-title>
          <v-card-subtitle>{{ hero.function }}</v-card-subtitle>
          <v-card-text>
            <div>Titulo: {{ hero.title }}</div>
            <div>Ataque: {{ hero.attack }}</div>
          </v-card-text>
        </v-card>
        <v-btn @click="goBack" color="orange darken-3">Volver</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    hero: {
      type: Object,
      required: true,
    },
    user: Object,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>

</style>
