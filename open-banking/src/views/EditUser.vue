<template>
  <div id="content-userEdit" class="justify-center d-flex ma-16">
    <v-card
      class="card-user d-flex flex-column align-center pb-5"
      width="60%"
      rounded="xl"
    >
      <v-card-title>
        Dados Cadastrais
      </v-card-title>

      <v-text-field
        :value="$store.state.user.name"
        label="Name"
        readonly
        outlined
        dense
      ></v-text-field>
      <v-text-field
        :value="$store.state.user.lastname"
        label="Lastname"
        readonly
        outlined
        dense
      ></v-text-field>
      <v-text-field
        :value="$store.state.user.email"
        label="E-mail"
        readonly
        outlined
        dense
      ></v-text-field>
      <v-text-field
        :value="$store.state.user.login"
        label="Login"
        outlined
        dense
      ></v-text-field>
      <v-text-field
        :value="$store.state.user.password"
        label="Password"
        type="password"
        outlined
        dense
      ></v-text-field>

      <v-text-field
        v-model="$store.state.user.birthday"
        label="Birthday"
        prepend-icon="mdi-calendar"
        readonly
      ></v-text-field>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss">
#content-userEdit {
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
