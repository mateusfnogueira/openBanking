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
        v-model="user.name"
        label="Name"
        name="name"
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="user.lastname"
        label="Lastname"
        name="lastname"
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="user.birthday"
        label="Birthday"
        name="birthday"
        type="date"
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="user.email"
        label="E-mail"
        type="email"
        name="email"
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="user.balance"
        label="Deposit"
        name="deposit"
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="user.login"
        label="Login"
        name="login"
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="user.password"
        label="Password"
        name="password"
        :type="show ? 'text' : 'password'"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show = !show"
        outlined
        dense
      ></v-text-field>

      <v-btn @click="signup">Submit</v-btn>
    </v-card>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  data: () => ({
    show: false,
    user: {
      name: "",
      lastname: "",
      login: "",
      email: "",
      password: "",
      birthday: "",
      balance: "",
    },
  }),
  methods: {
    signup() {
      axios
        .post(`${baseApiUrl}/signup`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.user = {};
          this.showSignup = false;
        })
        .catch(showError);
    },
  },
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
