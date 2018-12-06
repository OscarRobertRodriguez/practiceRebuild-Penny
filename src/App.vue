<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "styles/base/base.scss";
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import url("https://fonts.googleapis.com/css?family=Allerta+Stencil");

body {
  font-family: "Allerta Stencil", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary-white;
}

#app {
  border: 3px solid $primary-gold;
  border-image: linear-gradient(90deg, #a26343, #d2996c, #a26343);
  border-image-slice: 100%;
  border-image-slice: 1;
  min-height: 100%;
  padding: 0.5rem;
}
</style>
