<template>
<ul class="paginator" :class="$mq">
    <li  class="paginator__control" v-for="(page, index) in pages" :key="index" @click="highLight(index)"  :class="{highlight: index === activeIndex }">{{page}}</li>
</ul>
</template>

<script>
import { eventBus } from "../../main";
export default {
  data() {
    return {
      pages: ["01", "02", "03", "04", "05", "06"],
      activeIndex: 0
    };
  },
  methods: {
    highLight(index) {
      eventBus.$emit("updateGallery", index);
      return (this.activeIndex = index);
    }
  },
  created() {
    eventBus.$on("chicken", data => {
      this.activeIndex = data;
    });
  }
};
</script>

<style scoped lang="scss">
.paginator {
  display: flex;
  max-width: 30rem;
  justify-content: space-between;
  list-style: none;
  margin: 1rem auto 0;

  &__control {
    color: $primary-gold;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: Roboto, sans-serif;
    cursor: pointer;
    padding: 2rem;
  }

  &.mobile {
    max-width: 20rem;
    justify-content: space-between;

    & li {
      padding: 1rem;
    }
  }
}

.highlight {
  color: #fff;
}
</style>
