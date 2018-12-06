<template>

    <pane>
        <img slot="image" src="../../assets/switcher/PB-Tonic.png" alt="tonic">

            <h2>Tonic water</h2>
            <p>
                Bold & Refreshing. Pure & Profound. A tonic with real swagger.
                The perfect balance of citrus, pure cane sugar, agave nectar and quinine from natural Cinchona Bark.
                All pot conditioned to deliver the finest tonic water available.
            </p>

        <p slot="ingredients">Pure Carbonated Artesian Water, Natural Cane Sugar, Agave Nectar, Ginger, Natural Flavors, Citric Acid, and Sea Salt.</p>
    </pane>
</template>

<script>
import pane from "./pane.vue";

export default {
  name: "bottle-1",
  components: {
    pane
  }
};
</script>

<style scoped lang="scss">
</style>
