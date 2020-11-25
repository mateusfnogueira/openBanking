<template>
  <div class="content-login justify-center d-flex">
    <v-card
      class="card-login align-center d-flex flex-column ma-16 pa-4"
      width="30%"
      color="rgb(238, 234, 234)"
      rounded="xl"
    >
      <v-card-title>Acesse sua conta</v-card-title>
      <v-text-field label="Login" outlined dense></v-text-field>
      <v-text-field label="Password" outlined dense></v-text-field>
      <v-btn color="">Submit</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content-login {
  .card-login {
    .v-text-field {
      width: 50%;
    }
  }
}
</style>
