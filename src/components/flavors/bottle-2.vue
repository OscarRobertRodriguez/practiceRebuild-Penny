<template>

    <pane>

        <img slot="image" src="../../assets/switcher/PB-ClubSoda.png" alt="tonic">

        <h2>club soda</h2>
        <p>
            Elegant carbonation married with subtle hints of citrus and sea salt.
            What every Club Soda should be and nothing it shouldn't.
        </p>

        <p slot="ingredients">Pure Carbonated Artesian Water, Sea Salt, Potassium Bicarbonate and Tripotassium Citrate.</p>

    </pane>
</template>

<script>
    import pane from "./pane.vue";

export default {
  name: "bottle-2",
  components: {
    pane
  }
};
</script>

<style scoped lang="scss">
</style>
