import user from '../../../s/src/models/users';
<template>
  <div class="content-user justify-center d-flex ma-16">
    <v-card
      class="card-user d-flex flex-column align-center pb-5"
      width="60%"
      rounded="xl"
    >
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

      <v-text-field
        v-model="user.birthday"
        label="Birthday"
        prepend-icon="mdi-calendar"
        readonly
      ></v-text-field>
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
      birthday: "02/06/1992",
    },
  }),
};
</script>

<style lang="scss">
.content-user {
  .card-user {
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 0.9500175070028011) 10%,
      rgba(0, 212, 255, 1) 90%
    );
    .v-text-field {
      width: 90%;
    }
  }
}
</style>
