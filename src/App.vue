<template>
  <div id="app">
    <router-view />
    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: "app",
  components: {
    Navigation: Navigation,
  },
};
</script>
<style>
#menu {
  heights: 120px;
}
body,
html {
  height: 100%;
}
#app {
  /* Full height */
  height: 100%;
  /* The image used */
  background-image: url("https://s3-us-west-2.amazonaws.com/annazhang16.com/vincent-burkhead-LhlxYMfnTF0-unsplash.jpg");
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
