<template>
    <header class="header" :class="[$mq, {background : scrollPosition > 35}]">
        <mq-layout mq="laptop+" class="header__logo-icon">
        <PennyLogo ></PennyLogo>
        </mq-layout>

        <mq-layout mq="laptop+">
        <nav class="nav">
            <ul class="nav__items-list">
                <li class="nav__item">
                    <a class="nav__link" href="#our-flavors">Flavors</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#our-story">our story</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#our-locations">find us</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#our-events">events</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#contact">contact</a>
                </li>
            </ul>
        </nav>
        </mq-layout>
        <ul class="social" :class="$mq">
            <li class="social__icon-container" :class="$mq">

                <a href="#" class="social__icon">
                    <facebook-logo class="facebook"></facebook-logo>
                </a>
            </li>
            <li class="social__icon-container" :class="$mq">
                <a href="#" class="social__icon">
                    <instagram-logo class="instagram"></instagram-logo>
                </a>
            </li>
        </ul>
    </header>
</template>

<script>
import FacebookLogo from "../assets/facebook.svg?inline";
import InstagramLogo from "../assets/instagram.svg?inline";
import PennyLogo from "../assets/pennyback-monogram.svg?inline";

export default {
  name: "app-header",
  components: {
    FacebookLogo,
    InstagramLogo,
    PennyLogo
  },
  data() {
    return {
      scrollPosition: null,
      windowWidth: document.documentElement.clientWidth
    };
  },
  methods: {
    updateScroll() {
      console.log(window.scrollY);
      this.scrollPosition = window.scrollY;
    }
  },
  created() {},
  mounted() {
    if (this.windowWidth > 1183) {
      window.addEventListener("scroll", this.updateScroll);
    }
  },
  beforeDestroy() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>

<style scoped lang="scss">
.background {
  background-color: #1d1f1f;
  transform: translateY(-5px);
}
.header {
  position: fixed;
  width: calc(100% - 4.2rem);
  display: grid;
  left: 2.1rem;
  top: 0;
  padding: 5rem 3rem;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  align-content: center;
  height: 12rem;
  z-index: 1000;
  transition: all 0.3s ease;

  &.tablet,
  &.mobile {
    position: static;
    padding: 10rem 0;
    grid-template-columns: auto;
    margin: 0 auto;
  }
  &__logo-icon {
    justify-self: start;
  }
}
.nav {
  &__items-list {
    color: inherit;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, auto);
    justify-content: center;
    width: 100%;
  }
  &__item {
    position: relative;
    color: $primary-white;
    display: flex;
    align-items: center;
    margin-right: 2rem;

    &:not(:last-child)::after {
      content: "";
      margin-left: 3rem;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 8px solid $primary-gold;
      width: 0;
      height: 0;
      align-self: center;
      position: absolute;
      right: -0.1rem;
    }
  }

  &__link {
    color: inherit;
    text-decoration: none;
    font-size: 1.5rem;
    text-transform: uppercase;
    transition: all 0.2s ease;
    letter-spacing: 4px;
    margin-right: 2rem;

    &:hover {
      color: $primary-gold;
    }
  }
}

.nav ul li:last-child {
  margin-right: 0;
}

//// social icons

.social {
  justify-self: end;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  &.tablet,
  &.mobile {
    justify-self: center;
  }
  &__icon-container {
    list-style: none;
    display: block;
    width: 5rem;
    height: 5rem;
    border: 3px solid $primary-gold;
    border-radius: 50%;
    transition: all 0.2s;
    cursor: pointer;

    &.tablet,
    &.mobile {
      width: 6rem;
      height: 6rem;
    }

    &:hover {
      border-color: #fff;
    }
  }
  &__icon-container:hover > &__icon > .facebook,
  &__icon-container:hover > &__icon > .instagram {
    fill: #fff;
  }
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}

.facebook,
.instagram {
  fill: $primary-gold;
  transition: all 0.2s;
}
</style>
