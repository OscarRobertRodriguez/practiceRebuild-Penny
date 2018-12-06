<template>

    <pane>

        <img slot="image" src="../../assets/switcher/PB-GingerBeer.png" alt="tonic">

        <h2>ginger beer</h2>
        <p>
            Clean, fresh & powerful. This Ginger Beer is Big, Bold & Exciting.
            Starts with powerful ginger notes, followed by a subtle burn and a clean finish.
        </p>

        <p slot="ingredients">Pure Carbonated Artesian Water, Natural Cane Sugar, Agave Nectar, Natural Flavor, Citric Acid, Sea Salt and Ginger Root.</p>

    </pane>
</template>

<script>
import pane from "./pane.vue";
export default {
  name: "bottle-3",
  components: {
  	pane
  }
};
</script>

<style scoped lang="scss">

</style>
