<template>
    <footer id="contact" class="footer">
        <mainLogo class="footer__main-logo"></mainLogo>
        <div class="footer__address">
            <p>401 CONGRESS AVE, SUITE 1540 AUSTIN – TEXAS 78701</p>
            <p>A DIVISION OF GOODWATER BEVERAGES, LLC</p>
        </div>
        <div class="footer__title">
        <topLines></topLines>
        <titleSvg class="footer__title-svg"></titleSvg>
        <bottomLines></bottomLines>
        </div>
        <ul class="social">
            <li class="social__icon-container" :class="$mq">

                <a href="#" class="social__icon" >
                    <facebook-logo class="facebook"></facebook-logo>
                </a>
            </li>
            <li class="social__icon-container" :class="$mq">
                <a href="#" class="social__icon">
                    <instagram-logo class="instagram"></instagram-logo>
                </a>
            </li>
        </ul>
        <p class="footer__notify">notify electronically at <a href="#" class="footer__link">info@pennyback.com</a></p>
    </footer>
</template>

<script>
import mainLogo from "../assets/pb-footer-monogram.svg?inline";
import titleSvg from "../assets/tonics-sodas.svg?inline";
import topLines from "../assets/top-lines.svg?inline";
import bottomLines from "../assets/bottom-lines.svg?inline";
import FacebookLogo from "../assets/facebook.svg?inline";
import InstagramLogo from "../assets/instagram.svg?inline";

export default {
  components: {
    mainLogo,
    titleSvg,
    topLines,
    bottomLines,
    FacebookLogo,
    InstagramLogo
  }
};
</script>

<style scoped lang="scss">
.footer {
  font-family: Roboto, sans-serif;
  padding: 6rem 0 12rem 0;
  &__address {
    color: $primary-gold;
    font-size: 1.8rem;
    letter-spacing: 4px;
    font-family: Roboto, sans-serif;
    line-height: 1.8;
    text-transform: uppercase;
    padding: 0 2rem;

    & p:last-child {
      margin-top: 2rem;
    }
  }
  &__main-logo {
    display: block;
    width: 100%;
    margin: 0 auto;
    max-width: 20rem;
    padding: 2rem 0;
  }
  &__title {
    max-width: 80%;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;
  }

  &__title-svg {
    margin: 2rem 0;
    max-width: 80rem;
  }
  &__notify {
    font-size: 2rem;
    color: $primary-white;
    text-transform: uppercase;
    letter-spacing: 4px;
    padding: 0 2rem;
    a {
      text-decoration: none;
      color: $primary-white;

      &:hover {
        color: $primary-gold;
        text-decoration: underline;
      }
    }
  }
}
.social {
  justify-self: end;
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-column-gap: 2rem;
  justify-content: center;
  padding: 1rem 0 8rem 0;
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
      width: 7rem;
      height: 7rem;
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
    display: grid;
    align-content: center;
    justify-content: center;
    fill: $primary-gold;
    height: 100%;
  }
}
</style>
