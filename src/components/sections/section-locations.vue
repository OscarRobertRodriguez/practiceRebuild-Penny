<template>
<section id="our-locations" class="find-us">
    <sectionTitle>find us</sectionTitle>
    <subTitle></subTitle>
    <hr>
    <h3 :class="$mq">Twin Liquors</h3>
    <p :class="$mq">Austin, Bee Cave, Boerne, Cedar Park, College Station, Conroe, Copperas Cove, Dripping Springs,
        Georgetown, Harker Heights, Hutto, Killeen, Lakeway, Marble Falls,
        New Braunfels, Round Rock, San Antonio, San Marcos, Spring, Temple, Victoria, & Waco
    </p>
    <hr>
    <h3 :class="$mq">available through amazon</h3>
    <hr>
    <h3>total wine</h3>
    <p :class="$mq">Lakeline – Sunset Valley – Arboretum – Mueller Locations</p>
</section>
</template>

<script>
import sectionTitle from "@/components/sectionTitle.vue";
import subTitle from "@/components/subTitle.vue";
export default {
  components: {
    sectionTitle,
    subTitle
  }
};
</script>

<style scoped lang="scss">
.find-us {
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 6rem 0;
}
h3 {
  font-size: 2.8rem;
  text-transform: uppercase;
  padding-top: 3rem;
  padding-bottom: 1rem;

  &.mobile {
    font-size: 3rem;
    width: 70%;
  }
}

h3:nth-of-type(2) {
  padding: 4rem 0;
}

p {
  font-size: 1.9rem;
  text-align: center;
  width: 45%;
  font-family: Roboto;
  line-height: 1.8;
  padding-bottom: 3rem;

  &.mobile {
    width: 65%;
  }
}
</style>
