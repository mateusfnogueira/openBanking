<template>
  <div id="content-login" class="justify-center d-flex">
    <v-card
      class="card-login align-center d-flex flex-column ma-16 pa-4"
      width="45%"
      rounded="xl"
    >
      <h1>Acesse sua conta</h1>
      <v-text-field
        v-model="user.login"
        label="Login"
        color="black"
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="user.password"
        label="Password"
        color="black"
        :type="show ? 'text' : 'password'"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show = !show"
        outlined
        dense
      ></v-text-field>
      <v-btn @click="signin" dark>Submit</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    show: false,
    user: {
      id: "",
      login: "",
      password: "",
    },
  }),

  methods: {
    signin() {
      this.$store.dispatch("getUser", this.user.login);
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style lang="scss" scoped>
#content-login {
  .card-login {
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 0.9500175070028011) 10%,
      rgba(0, 212, 255, 1) 90%
    );
    h1 {
      font-size: 60px;
    }
    .v-text-field {
      width: 60%;
      label {
        font-size: 40px;
      }
    }
  }
}
</style>
