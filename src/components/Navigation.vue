<template>
  <div>
    <nav>
      <b-container class="bv-example-row">
        <b-row>
          <b-col md="4">1 of 3</b-col>
          <b-col md="4">2 of 3</b-col>
          <b-col md="4">3 of 3</b-col>
        </b-row>
        <hr />
        <b-row>
          <router-link
            class="spacing"
            v-for="routes in links"
            v-bind:key="routes.id"
            :to="`${routes.page}`"
            ><b-col>{{ routes.text }}</b-col></router-link
          >
        </b-row>
      </b-container>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      links: [
        {
          id: 1,
          text: "About",
          page: "/About",
        },
        {
          id: 2,
          text: "Home",
          page: "/Home",
        },
        {
          id: 3,
          text: "Contact",
          page: "/Contact",
        },
      ],
    };
  },
};
</script>

<style>
.spacing {
  margin-right: 10px;
}
</style>
