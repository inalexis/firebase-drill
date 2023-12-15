
<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col>
        <v-card>
          <v-card-title>Perfil de Usuario</v-card-title>
          <v-card-text>
            <div>Email: {{ user.email }}</div>
          </v-card-text>
        </v-card>
        <v-btn @click="logout" color="red darken-3">Cerrar Sesión</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  methods: {
    logout() {
      this.$firebase.auth().signOut()
        .then(() => {
          this.$router.push('/');
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
  },
};
</script>

<style scoped>

</style>
