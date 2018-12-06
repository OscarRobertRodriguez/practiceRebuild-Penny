<template>
    <div class="card" :class="$mq">
        <div class="card__main-image" :class="$mq">
            <img :src="require(`../../assets/switcher/${image}`)" alt="tonic">
        </div>
        <div class="card__summary" :class="$mq">
            <h2>club soda</h2>
            <p>
               {{summary}}
            </p>
        </div>
        <div class="card__ingredients" :class="$mq">
            <h2>ingredients:</h2>
            <p>{{ingredients}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "card",
  props: {
    image: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    ingredients: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.card {
  display: grid;
  background: #b5b5b5;
  grid-template-rows: 2rem repeat(3, auto) 5rem;
  align-items: center;
  justify-items: center;
  width: 100%;
  margin: 0 auto;
  grid-row-gap: 2rem;
  &__main-image {
    max-width: 13rem;
    grid-row: 2/ 3;
    & img {
      display: block;
      width: 100%;
    }
  }

  &__summary {
    grid-row: 3/ 4;
  }

  &__ingredients {
    grid-row: 4 / 5;
  }

  &__summary,
  &__ingredients {
    color: #1d201f;
    text-align: left;
    padding: 0 2rem;

    &.mobile {
      p {
        font-size: 1.9rem;
      }
    }

    h2 {
      font-size: 3rem;
      text-transform: uppercase;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.6;
    }
  }
}
</style>
