<template>
    <h2>
        <slot>where pennyback tonics and sodas are sold</slot>
    </h2>
</template>

<script>
export default {
  name: "subTitle"
};
</script>

<style scoped lang="scss">
h2 {
  color: $primary-gold;
  font-size: 2rem;
  letter-spacing: 4px;
  padding: 1.5rem 2rem;
  text-transform: uppercase;
}
</style>
