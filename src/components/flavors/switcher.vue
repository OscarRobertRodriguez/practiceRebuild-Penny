<template>
    <div class="switcher__container" :class="$mq">


        <component :is="currentTabComponent"></component>

          <div class="tabs" :class="$mq">
            <div class="bottle-1" @click="currentTab = 1 " :class="[{active : currentTab == 1}, $mq]">
                <img class="tabs__img" src="../../assets/switcher/PB-Tonic-sm.png" alt="tonic">
                <p class="tabs__text" :class="$mq">tonic water</p>
            </div>
            <div class="bottle-2" @click="currentTab = 2 " :class="[{active : currentTab == 2}, $mq]">
                <img class="tabs__img" src="../../assets/switcher/PB-ClubSoda-sm.png" alt="tonic">
                <p class="tabs__text" :class="$mq">club soda</p>
            </div>
            <div class="bottle-3" @click="currentTab = 3 " :class="[{active : currentTab == 3}, $mq]">
                <img class="tabs__img" src="../../assets/switcher/PB-GingerBeer-sm.png" alt="tonic">
                <p class="tabs__text" :class="$mq">ginger beer</p>
            </div>
            <div class="bottle-4" @click="currentTab = 4 " :class="[{active : currentTab == 4}, $mq]">
                <img class="tabs__img" src="../../assets/switcher/PB-GingerAle-sm.png" alt="tonic">
                <p class="tabs__text" :class="$mq">ginger ale</p>
            </div>
          </div>
    </div>
</template>

<script>
import bottle1 from "./bottle-1.vue";
import bottle2 from "./bottle-2.vue";
import bottle3 from "./bottle-3.vue";
import bottle4 from "./bottle-4.vue";

export default {
  name: "switcher",
  components: {
    bottle1,
    bottle2,
    bottle3,
    bottle4
  },
  data() {
    return {
      currentTab: "1"
    };
  },
  computed: {
    currentTabComponent() {
      return "bottle-" + this.currentTab.toString();
    }
  }
};
</script>

<style scoped lang="scss">
.active {
  background: rgba(0, 0, 0, 0.2);

  &.mobile {
    background: #b5b5b5;
  }

  & p {
    color: #fff;
  }
}
.switcher {
  &__container {
    position: relative;
    display: grid;
    max-width: 100rem;
    width: 100%;
    margin: 5rem auto 0;

    &.mobile {
      align-content: center;
      justify-content: center;
      justify-items: center;
    }
  }
}

.tabs {
  display: grid;
  grid-template-columns: repeat(4, 15rem);
  justify-items: center;
  align-items: end;
  bottom: 3rem;
  right: 1rem;
  position: absolute;
  &.desktop {
    bottom: 3rem;
    grid-template-columns: repeat(4, 15rem);
  }

  &.tablet {
    grid-template-columns: repeat(4, 15rem);
    bottom: 3rem;
    right: 1rem;

    & > * {
      white-space: normal;
      grid-template-columns: 5rem;
    }
  }
  &.mobile {
    position: static;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    margin-top: 2rem;
    grid-column-gap: 1rem;
    justify-items: center;

    & > * {
      grid-template-columns: 5rem;
      max-width: 100%;
      white-space: normal;
      &:hover {
        background: #b5b5b5;
      }
    }
  }

  & > * {
    display: grid;
    grid-template-columns: 5rem;
    border-radius: 15px;
    padding: 2rem 3rem;
    cursor: pointer;
    justify-items: center;
    align-items: end;
    grid-row-gap: 1rem;
    white-space: nowrap;
    transition: all 0.2s ease;

    & p {
    }

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }

    &:hover > p {
      color: #fff;
    }
  }

  &__text {
    font-weight: bold;
    text-transform: uppercase;
    display: block;
    transition: all 0.2s ease;
    font-size: 1.2rem;
    letter-spacing: 1px;
    text-align: center;
    color: #1d201f;

    &.desktop {
      font-size: 0.9rem;
    }

    &.tablet,
    &.mobile {
      font-size: 1.5rem;
      padding-top: 0.5rem;
    }
    &.mobile {
      color: #fff;
    }
  }

  &__img {
    display: block;
    width: 100%;
  }
}
</style>
