<template>

    <pane>

        <img slot="image" src="../../assets/switcher/PB-GingerAle.png" alt="tonic">

        <h2>ginger ale</h2>
        <p>
            Like our Ginger Beer, this Ginger Ale is clean and fresh.
            A beautiful pairing of natural ginger with our signature blend of citrus, pure cane sugar and agave nectar.
        </p>

        <p slot="ingredients">Pure Carbonated Artesian Water, Natural Cane Sugar, Agave Nectar, Ginger, Natural Flavors, Citric Acid, and Sea Salt.</p>

    </pane>
</template>

<script>
import pane from "./pane.vue";
export default {
  name: "bottle-4",
  components: {
    pane
  }
};
</script>

<style scoped lang="scss">
</style>
