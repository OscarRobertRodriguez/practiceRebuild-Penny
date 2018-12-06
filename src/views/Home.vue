<template>
    <div>

    <div class="page-border">
        <div class="line-container" :class="$mq">
            <div class="line"></div>
        </div>
    <main class="main" :class="$mq">
        <AppHeader></AppHeader>
        <sectionHero></sectionHero>
        <sectionFlavors></sectionFlavors>
    <sectionStory></sectionStory>
        <sectionLocations></sectionLocations>
    <sectionEvents></sectionEvents>
      <AppFooter></AppFooter>
    </main>
    </div>
    </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/app-header.vue";
import AppFooter from "@/components/app-footer.vue";
import sectionLocations from "@/components/sections/section-locations";
import sectionHero from "@/components/sections/section-hero";
import sectionFlavors from "@/components/sections/section-flavors";
import sectionStory from "@/components/sections/section-story";
import sectionEvents from "@/components/sections/section-events";

export default {
  name: "home",
  components: {
    AppHeader,
    AppFooter,
    sectionHero,
    sectionFlavors,
    sectionLocations,
    sectionStory,
    sectionEvents
  }
};
</script>


<style scoped lang="scss">
.line-container {
  width: 100%;
  position: absolute;
  top: 25%;

  &.desktop {
    top: 10%;
  }

  &.laptop {
    top: 14%;
  }

  &.tablet {
    top: 14%;
  }

  &.mobile {
    display: none;
  }
}

.line {
  position: absolute;
  z-index: -2;
  top: 0%;
  left: -50%;
  width: 300%;
  height: 16px;
  background-color: #b17151;
  -webkit-transform: rotate(-33deg);
  -ms-transform: rotate(-33deg);
  transform: rotate(-33deg);
}
.main {
  max-width: 1400px;
  width: 100%;
  padding-top: 10rem;
  margin: 0 auto;
  display: grid;
  position: relative;
  overflow: hidden;
  justify-content: center;

  &.mobile {
    padding-top: 1rem;
  }
}

.page-border {
  border: 3px solid $primary-gold;
  border-image: linear-gradient(90deg, #a26343, #d2996c, #a26343);
  border-image-slice: 1;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}
</style>
