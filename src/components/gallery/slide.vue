<template>
    <img :src="require(`../../assets/gallery/gallery-${number}.jpg`)" alt="">
</template>

<script>
export default {
  name: "slide",
  props: {
    number: {
      type: Number
    }
  }
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
  display: block;
  height: 100%;
  overflow: hidden;
}
</style>
