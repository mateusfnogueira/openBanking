<template>
  <div class="header">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      dark
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed color="rgba(2, 0, 36, 1)" app>
      <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer" />
      <v-btn color="white" icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  transition(to, from) {
    if (!from) {
      return "slide-left";
    }
    return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
  },
  data() {
    return {
      clipped: true,
      drawer: true,
      items: [
        {
          icon: "mdi-apps",
          title: "DashBoard",
          to: "/",
        },
        {
          icon: "mdi-bank-transfer",
          title: "Transitions",
          to: "/Transactions",
        },
        {
          icon: "mdi-account-circle",
          title: "User",
          to: "/EditUser",
        },
        {
          icon: "mdi-logout",
          title: "Logout",
          to: "/Login",
        },
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: "XBank",
    };
  },
};
</script>

<style lang="scss">
div .header {
  .v-app-bar {
    background: rgba(2, 0, 36, 1) !important;
    color: aliceblue;
  }
}
</style>
