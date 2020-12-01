<template>
  <div id="content-user" class="justify-center d-flex ma-16">
    <v-card
      class="card-user d-flex flex-column align-center pb-5"
      width="60%"
      rounded="xl"
    >
      <h1>
        Dados Cadastrais
      </h1>

      <v-text-field
        v-model="user.name"
        label="Name"
        name="name"
        color="black"
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="user.lastname"
        label="Lastname"
        name="lastname"
        color="black"
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="user.birthday"
        label="Birthday"
        name="birthday"
        type="date"
        color="black"
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="user.email"
        label="E-mail"
        type="email"
        name="email"
        color="black"
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="user.balance"
        label="Deposit"
        name="deposit"
        color="black"
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="user.login"
        label="Login"
        name="login"
        color="black"
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
        color="black"
        outlined
        dense
      ></v-text-field>

      <v-btn @click="signup" dark>Submit</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Register",
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
    signup() {},
  },
};
</script>

<style lang="scss">
#content-user {
  .card-user {
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 0.9500175070028011) 10%,
      rgba(0, 212, 255, 1) 90%
    );
    h1 {
      font-size: 40px;
      padding-bottom: 10px;
    }
    .v-text-field {
      width: 90%;
      .v-text-field__slot {
        height: 60px;
        label {
          font-size: 30px;
          width: 20%;
        }
        input {
          font-size: 30px;
        }
      }
    }
    .v-btn {
      width: 80%;
    }
  }
}
</style>
