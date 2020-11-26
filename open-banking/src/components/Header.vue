<template>
  <div class="header">
    <v-app-bar app>
      <div class="d-flex align-center">
        <v-img
          alt="Bank Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-menu bottom offset-y transition="scale-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab small color="withe" v-bind="attrs" v-on="on">
            <v-icon size="40">mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-list dark>
          <v-list-item>
            <v-btn text to="/">
              Dashboard
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text to="/transactions">
              Transactions
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text to="/editUser">
              User
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text to="/login">
              Sair
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss">
div .header {
  .v-app-bar {
    background: rgba(2, 0, 36, 1) !important;
  }
}
</style>
