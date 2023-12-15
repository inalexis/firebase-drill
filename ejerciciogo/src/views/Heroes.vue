
<template>
  <v-container fluid class="heroes-container">
    <v-row>
      <v-col>
        <v-img src="blurry-background.jpg" height="500px" class="blur-background"></v-img>
        <v-btn @click="goToHomePage" color="orange darken-3">Volver a Home</v-btn>
        <v-divider></v-divider>
        <v-row justify="center">
          <v-col v-for="hero in heroes" :key="hero.id">
            <v-avatar size="100">
              <v-img :src="hero.image" :alt="hero.name"></v-img>
            </v-avatar>
            <v-btn @click="showHeroDetails(hero)" v-if="user">Ver Detalles</v-btn>
          </v-col>
        </v-row>
        <v-dialog v-model="dialog" max-width="500px">
          <hero-details :hero="selectedHero" :user="user" />
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeroDetails from "@/views/HeroDetails.vue";

export default {
  props: {
    user: Object,
  },
  data() {
    return {
      heroes: [
        // ... tu lista de héroes
      ],
      dialog: false,
      selectedHero: null,
    };
  },
  methods: {
    goToHomePage() {
      this.$router.push('/');
    },
    showHeroDetails(hero) {
      // Abrir el diálogo solo si el usuario ha iniciado sesión
      if (this.user) {
        this.selectedHero = hero;
        this.dialog = true;
      } else {
        // Pide al usuario que inicie sesión
        this.$router.push('/');
      }
    },
  },
  components: {
    HeroDetails,
  },
};
</script>

<style scoped>
.heroes-container {
  text-align: center;
  padding: 50px;
}

.blur-background {
  filter: blur(5px);
}
</style>
