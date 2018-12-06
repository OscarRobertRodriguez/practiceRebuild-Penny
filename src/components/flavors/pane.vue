<template>
    <div class="pane" :class="$mq">
        <div class="pane__main-image" :class="$mq">
            <slot name="image">
                <img src="../../assets/switcher/PB-ClubSoda.png" alt="tonic">
            </slot>
        </div>
        <div class="pane__summary" :class="$mq">
            <slot>
                <h2>club soda</h2>
                <p>
                    Elegant carbonation married with subtle hints of citrus and sea salt.
                    What every Club Soda should be and nothing it shouldn't.
                </p>
            </slot>
        </div>
        <div class="pane__ingredients" :class="$mq">
            <h2>ingredients:</h2>
            <slot name="ingredients">
                <p>Pure Carbonated Artesian Water, Sea Salt, Potassium Bicarbonate and Tripotassium Citrate.</p>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
  name: "pane"
};
</script>

<style scoped lang="scss">
.pane {
  display: grid;
  grid-template-columns: 2rem 2fr repeat(4, minmax(10rem, 1fr));
  grid-template-rows: 18rem 7rem repeat(2, minmax(100px, 1fr)) 7rem;
  color: black;
  font-family: Roboto, sans-serif;
  width: 100%;
  background: #b5b5b5;
  filter: brightness(1.2);

  &.desktop,
  &.laptop,
  &.tablet {
    grid-template-rows: 18rem 7rem repeat(2, minmax(100px, 1fr)) 10rem;
  }

  &.mobile {
    grid-template-columns: 2fr repeat(4, 8rem);
    grid-template-rows: 18rem 7rem repeat(2, minmax(100px, 1fr)) 10rem;
  }

  &__main-image {
    max-width: 18rem;
    margin-top: -5rem;
    width: 100%;
    grid-column: 2 /3;
    justify-self: center;

    &.tablet {
      grid-column: 1 /3;
      margin-top: 0;
      justify-self: start;
    }

    &.mobile {
      margin-top: 0;
      grid-column: 1/ 2;
    }
    & img {
      display: block;
      width: 100%;
    }
  }

  &__summary {
    grid-column: 3/ -1;
    grid-row: 1 / 2;
    align-self: center;
    text-align: left;
    padding: 1rem 4rem 1rem 1rem;
    font-weight: bold;

    &.tablet,
    &.mobile {
      p {
        font-size: 1.7rem;
      }
    }

    &.mobile {
      grid-column: 2/ -1;
      grid-row: 1 /3;
      margin-top: 6rem;
    }

    & h2 {
      font-size: 4rem;
      text-transform: uppercase;
      text-align: left;
      letter-spacing: 3px;
    }

    p {
      font-size: 1.5rem;
      line-height: 1.6;
    }
  }

  &__ingredients {
    grid-column: 3 / -1;
    grid-row: 2 /3;
    align-self: start;
    text-align: left;
    padding: 1rem;
    padding-right: 4rem;
    line-height: 1.6;
    font-weight: bold;

    &.tablet,
    &.mobile {
      & h2 {
        font-size: 1.8rem;
      }
      p {
        font-size: 1.7rem;
        line-height: 1.7;
      }
    }

    &.mobile {
      grid-column: 2/ -1;
      grid-row: 3 /6;
      align-self: center;
    }

    & h2 {
      text-transform: uppercase;
      letter-spacing: 3px;
    }

    p {
      font-size: 1.3rem;
    }
  }
}
</style>
