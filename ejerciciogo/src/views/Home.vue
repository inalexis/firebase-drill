
<template>
  <v-container fluid class="home-container">
    <v-row align="center" justify="center">
      <v-col>
        <v-img src="background.jpg" height="500px" class="blur-background"></v-img>
        <v-btn @click="goToHeroesPage" color="orange darken-3">Ver Héroes</v-btn>
        <v-btn @click="login" v-if="!user">Iniciar Sesión</v-btn>
        <v-btn @click="logout" v-if="user">Cerrar Sesión</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    goToHeroesPage() {
      this.$router.push('/heroes');
    },
    login() {
      this.$firebase.auth().signInWithEmailAndPassword("user@example.com", "password")
        .then((userCredential) => {
          this.user = userCredential.user;
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
    logout() {
      this.$firebase.auth().signOut()
        .then(() => {
          this.user = null;
        })
        .catch((error) => {
        
          console.error(error.message);
        });
    },
  },
  created() {
    
    this.$firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
};
</script>

<style scoped>
.home-container {
  background-color: rgba(128, 0, 128, 0.5); 
  text-align: center;
  padding: 50px;
}

.blur-background {
  filter: blur(5px);
}
</style>
