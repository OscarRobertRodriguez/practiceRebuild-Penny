<template>
    <section class="hero">

        <div class="hero__header" :class="$mq">
            <mq-layout mq="laptop+" class="hero__sub">
            <h2>uniquely bold</h2>
            </mq-layout>
        <div class="hero__logo" :class="$mq">
            <img src="../../assets/mainLogo.svg" alt="">
        </div>
            <mq-layout mq="laptop+" class="hero__sub">
            <h2>forged locally</h2>
            </mq-layout>
        </div>
        <div class="hero__headliner">

            <div class="hero__title" :class="$mq">
                <h2>Tonics</h2> <span>and</span> <h2>sodas</h2>
            </div>
            <div>
                <div class="hero__slogan" :class="$mq">
                  <mq-layout mq="laptop+" class="hero__leaf">
                <img src="../../assets/sm-leaf.svg" alt="leaf">
                  </mq-layout>
                    <p>a pure and profound taste</p>

                    <mq-layout mq="laptop+" class="hero__leaf">
                        <img src="../../assets/sm-leaf.svg" alt="leaf">
                    </mq-layout>
                </div>

                <p class="hero__info" :class="$mq">
                    made with no artificial sweeteners or preservatives and forged with locally source ingredients to give you a pure and formidable taste like no other
                </p>

                <img class="hero__pennyback" src="../../assets/pb-horizontal-logo.svg" alt="pennyback logo">
            </div>
        </div>
        <div class="hero__main-image" :class="$mq">
            <div class="hero__side-text" :class="$mq">
                <h2>your premium mixer</h2>
                <p>for the discerning customer that truly appreciates what a fine mixer can offer</p>
            </div>
            <img class="hero__bottles-img" src="../../assets/bottles.png" alt="" :class="$mq">
            <div class="hero__side-text" :class="$mq">
                <h2>uncompromising</h2>
                <p>tonics and sodas designed to compliment and enhance the finest spirts available</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.hero {
  &__header {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-items: center;
    align-items: center;
    margin-bottom: 4rem;

    &.tablet,
    &.mobile {
      grid-template-columns: auto;
    }
  }

  &__sub {
    letter-spacing: 4px;
    color: $primary-gold;
    text-transform: uppercase;
  }

  &__sub:first-of-type {
    justify-self: end;
  }
  &__sub:last-of-type {
    justify-self: start;
  }

  &__title {
    font-size: 4.5rem;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    display: grid;
    grid-template-columns: repeat(3, min-content);
    justify-content: center;

    &.tablet,
    &.mobile {
      font-size: 2.8rem;

      & span {
        font-size: 1.5rem;
      }
    }
    & span {
      display: block;
      transform: rotate(270deg);
      font-size: 2.5rem;
      justify-self: center;
      align-self: center;
    }
  }
  &__logo {
    width: 100%;
    max-width: 35rem;
    padding: 0 2rem;
    & img {
      width: 100%;
      display: block;
    }
  }
  // slogan
  &__slogan {
    display: grid;
    align-items: center;
    justify-items: center;
    align-content: center;
    grid-template-columns: 1fr auto 1fr;
    height: 10rem;
    &.tablet,
    &.mobile {
      grid-template-columns: auto;

      & p {
        font-size: 2rem;
        padding: 0 1rem;
      }
    }
    & p {
      color: $primary-gold;
      font-size: 1.8rem;
      letter-spacing: 6px;
      text-transform: uppercase;
      padding: 0 2rem;
      align-self: end;
    }
  }

  &__leaf {
    display: block;
    width: 100%;
    max-width: 8rem;
    justify-self: end;

    &:last-of-type {
      justify-self: start;
      transform: rotateY(180deg);
    }
  }

  &__info {
    color: $primary-white;
    line-height: 1.8;
    font-size: 1.8rem;
    max-width: 63rem;
    width: 100%;
    margin: 0 auto;
    text-transform: capitalize;
    font-family: Roboto, sans-serif;
    padding: 0;
    &.tablet,
    &.mobile {
      font-size: 2.3rem;
      padding: 0 4rem;
    }
  }

  &__pennyback {
    max-width: 30rem;
    width: 100%;
    display: block;
    margin: 0 auto;
    padding: 3rem;
  }

  &__main-image {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-items: center;
    margin-top: 8rem;
    grid-column-gap: 1rem;

    &.tablet {
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 3rem;
      grid-column-gap: 4rem;
    }

    &.mobile {
      grid-template-columns: auto;
      grid-row-gap: 3rem;
      grid-column-gap: 2rem;
    }
  }

  &__bottles-img {
    max-width: 66rem;
    width: 100%;
    display: block;

    &.tablet {
      grid-row: 1 /2;
      grid-column: 1 / -1;

      max-width: 40rem;
    }

    &.mobile {
      grid-row: 1 /2;
      grid-column: 1 / -1;

      max-width: 25rem;
    }
  }

  &__side-text {
    max-width: 28rem;
    padding: 0 1rem;

    &.tablet {
      max-width: 45rem;
    }
    &.mobile {
      max-width: 55rem;
    }

    h2 {
      color: $primary-gold;
      font-size: 2.5rem;
      text-transform: uppercase;
    }
    p {
      font-size: 1.8rem;
      line-height: 1.8;
    }
  }
}
</style>
