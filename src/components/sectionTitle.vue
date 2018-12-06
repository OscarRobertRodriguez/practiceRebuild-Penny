<template>
    <h2 :class="$mq">
        <slot></slot>
    </h2>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
h2 {
  font-size: 5rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  font-family: Roboto, sans-serif;
  padding: 1rem 2rem;
  justify-items: center;
  text-transform: uppercase;
  word-wrap: revert;
  letter-spacing: 2px;

  &.tablet,
  &.mobile {
    grid-template-columns: auto;

    &::before,
    &::after {
      display: none;
    }
  }

  &::before,
  &::after {
    content: "";
    background-image: url("../assets/ornate-element.svg");
    background-size: 267px 50px;
    width: 267px;
    height: 60px;
    align-self: center;
  }
  &::before {
    justify-self: end;
  }
  &::after {
    transform: rotateX(1800deg) rotateY(180deg);
    justify-self: start;
  }
}
</style>
