import user from '../../../s/src/models/users';
<template>
  <div class="content-user justify-center d-flex ma-16">
    <v-card class="card-user d-flex flex-column align-center" width="60%">
      <v-card-title>
        Dados Cadastrais
      </v-card-title>

      <v-text-field
        :value="user.name"
        label="Name"
        outlined
        dense
      ></v-text-field>
      <v-text-field
        :value="user.lastName"
        label="Lastname"
        outlined
        dense
      ></v-text-field>
      <v-text-field
        :value="user.login"
        label="Login"
        outlined
        dense
      ></v-text-field>
      <v-text-field type="date" :value="user.birthday"></v-text-field>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      name: "Mateus",
      lastName: "Nogueira",
      login: "mfnogueira",
      birthday: 2 / 6 / 1992,
    },
  }),
};
</script>

<style lang="scss">
.content-user {
  .card-user {
    .v-text-field {
      width: 90%;
    }
  }
}
</style>
