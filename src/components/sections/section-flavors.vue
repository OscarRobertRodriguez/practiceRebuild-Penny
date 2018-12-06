<template>
    <section id="our-flavors" class="flavors">
        <sectionTitle>The Flavors</sectionTitle>
        <subTitle>Heavy-duty tonics and sodas</subTitle>
<mq-layout mq="tablet+">
        <switcher></switcher>
</mq-layout>

        <mq-layout mq="mobile">
            <card v-for="(card,index) in cards"
                  :key="index"
                  :image="card.image"
                  :summary="card.summary"
                  :ingredients="card.ingredients"
                  class="card"
            />
        </mq-layout>
    <mq-layout mq="tablet+" >
        <img class="flavors__number-bar"  src="../../assets/number-bar.svg" alt="">
    </mq-layout>
    </section>
</template>

<script>
import sectionTitle from "@/components/sectionTitle.vue";
import subTitle from "@/components/subTitle.vue";
import switcher from "@/components/flavors/switcher.vue";
import card from "@/components/card/card.vue";
import data from "@/data/cards.json";

export default {
  components: {
    sectionTitle,
    subTitle,
    switcher,
    card
  },
  data() {
    return {
      cards: data
    };
  }
};
</script>

<style scoped lang="scss">
.flavors {
  padding: 0 2rem;
  margin-top: 15rem;
}
.card:not(:last-child) {
  margin-bottom: 3rem;
}

.flavors__number-bar {
  max-width: 100rem;
  margin-top: 5rem;
  width: 100%;
}
</style>
