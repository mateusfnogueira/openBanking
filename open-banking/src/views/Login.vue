<template>
  <div class="content-login justify-center d-flex">
    <v-card
      class="card-login align-center d-flex flex-column ma-16 pa-4"
      width="30%"
      rounded="xl"
    >
      <v-card-title>Acesse sua conta</v-card-title>
      <v-text-field
        v-model="user.login"
        label="Login"
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="user.password"
        label="Password"
        type="password"
        outlined
        dense
      ></v-text-field>
      <v-btn @click="signin" color="">Submit</v-btn>
    </v-card>
  </div>
</template>

<script>
// import { baseApiUrl, showError, userKey } from "@/global";
// import axios from "axios";

export default {
  data: () => ({
    show: false,
    user: {
      login: "",
      password: "",
    },
  }),
  methods: {
    signin() {
      this.$store.dispatch("getUser");
      // axios
      //   .post(`${baseApiUrl}/signin`, this.user)
      //   .then((res) => {
      //     this.$store.commit("setUser", res.data);
      //     localStorage.setItem(userKey, JSON.stringify(res.data));
      //     this.$router.push({ path: "/" });
      //   })
      //   .catch(showError);
    },
  },
};
</script>

<style lang="scss" scoped>
.content-login {
  .card-login {
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 0.9500175070028011) 10%,
      rgba(0, 212, 255, 1) 90%
    );
    .v-text-field {
      width: 50%;
    }
  }
}
</style>
