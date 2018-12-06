<template>
    <section id="our-story" class="story" :class="$mq">
        <sectionTitle>Our Story</sectionTitle>
            <subTitle>forged in austin, texas</subTitle>
        <gallery></gallery>
        <pagination></pagination>
        <div class="story__shoutout" :class="$mq">
            <p>Send us pictures of your favorite Pennyback beverage or cocktail... we love hearing from our customers and sharing the moments you capture</p>
            <emblem class="story__svg"></emblem>
        </div>
        <div class="story__promotion" :class="$mq">
            <article class="story__article" :class="$mq">
                <h3>doing it right</h3>
                <p>
                We all have choices. In any endeavor, there's usually an easy way, and then there is a right way.
                When we set out on this mission, we decided at the onset that 'good enough' wasn't going to get it done.
                The vision of something distinct and different was going to require persistence, dedication and an unwavering commitment to excellence.
                These guiding principles have put quality and elegance at the forefront of all things Pennyback.
                From our ultra pure water source, to our ingredient selection, processing and packaging, we set out to deliver the finest experience available. We hope Pennyback is your choice.
                </p>
            </article>
            <article class="story__article" :class="$mq">
                <h3>why pennyback</h3>
                <p>
                The Pennyback line of tonics and sodas was developed with the customer in mind. A specific customer.
                Having grown tired of the sweet, syrupy products traditionally available in the mixer marketplace, we set out to offer our customers a way to truly enhance their cocktails.
                Pennyback is bold, it's profound. We don't seek to cover up or distract from fine spirits.
                Rather, we aim to open them up, to feature their strengths, and to enrich and build upon the flavor profiles the discerning customer expects. Give us a try... good chance you're the customer we're seeking to please!!
                </p>
            </article>
        </div>

    </section>
</template>

<script>
import sectionTitle from "@/components/sectionTitle.vue";
import subTitle from "@/components/subTitle.vue";
import gallery from "@/components/gallery/gallery.vue";
import pagination from "@/components/gallery/pagination.vue";
import emblem from "@/assets/p-emblem.svg?inline";
export default {
  components: {
    sectionTitle,
    subTitle,
    gallery,
    pagination,
    emblem
  }
};
</script>

<style scoped lang="scss">
.story {
  margin-top: 13rem;
  background: url("../../assets/p-emblem-bg.svg");
  background-size: 800px 800px;
  background-repeat: no-repeat;
  background-position: center bottom;
  padding: 4rem 0;
  font-family: Roboto, sans-serif;

  &.mobile {
    margin-top: 10rem;
  }
  &__svg {
    max-width: 25rem;
    margin-top: 8rem;
  }

  &__shoutout {
    margin-top: 3rem;

    &.tablet,
    &.mobile {
      & p {
        font-size: 2rem;
      }
    }
    & p {
      max-width: 60rem;
      margin: 0 auto;
      font-size: 1.6rem;
      line-height: 1.6;
      padding: 0 5rem;
    }
  }

  &__promotion {
    display: grid;
    grid-template-columns: repeat(2, 40rem);
    grid-column-gap: 8rem;
    justify-items: center;
    justify-content: center;
    margin-top: 5rem;

    &.tablet,
    &.mobile {
      grid-template-rows: auto auto;
      grid-template-columns: auto;
    }
  }

  &__article {
    font-size: 1.6rem;
    line-height: 1.6;
    text-align: center;
    justify-content: center;
    width: 40rem;
    &.tablet,
    &.mobile {
      font-size: 2rem;
      width: 90%;
      &:last-of-type {
        margin-top: 5rem;
      }
    }

    &.mobile {
      width: 80%;
    }

    & h3 {
      color: $primary-gold;
      text-transform: uppercase;
      padding-bottom: 1rem;
      letter-spacing: 2px;
    }

    & p {
    }
  }
}
</style>
