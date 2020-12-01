<template>
  <div id="content-dashboard" class="d-flex flex-column align-center mt-10">
    <v-card
      class="d-flex card-dashboard mb-8"
      height="200px"
      width="90%"
      rounded="xl"
    >
      <v-col class="d-flex" cols="12" md="6">
        <v-col cols="12" md="3">
          <v-icon class="ma-10" size="60">
            mdi-wallet
          </v-icon>
        </v-col>
        <v-col cols="12" md="9">
          <h1>My Current Account</h1>
          <p>
            {{ $store.state.user.name }}
            {{ ("0000" + $store.state.user.ag).slice(-4) }} -
            {{ $store.state.user.accountN }}
          </p>
        </v-col>
      </v-col>
      <v-col cols="12" md="3">
        <h1 class="mt-3">R$ {{ $store.state.user.balance.toFixed(2) }}</h1>
        <p>
          Total Balance
        </p>
      </v-col>
      <v-col cols="12" md="3">
        <h1 class="mt-3">
          R$ {{ ($store.state.user.balance - 2000).toFixed(2) }}
        </h1>
        <p>
          Available balance
        </p>
      </v-col>
    </v-card>

    <v-card class="card-graph ma-4" height="350px" width="90%" rounded="xl">
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          fill
          :labels="transitions"
          color="rgba(255, 255, 255, .5)"
          height="75%"
          :value="transitions"
          smooth="6"
          show-labels="true"
          auto-draw="true"
          auto-draw-duration="5000"
          auto-draw-easing="ease"
        >
        </v-sparkline>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => ({
    transitions: [10, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8],
  }),
};
</script>

<style lang="scss">
#content-dashboard {
  .card-dashboard {
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 0.9500175070028011) 23%,
      rgba(0, 212, 255, 1) 72%
    );
  }
  .card-graph {
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 0.9500175070028011) 23%,
      rgba(0, 212, 255, 1) 72%
    );
  }
}
</style>
