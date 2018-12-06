<template>
    <ul class="accordion">
        <accordionItem v-for="(item,index) in items" :key="index">
            <slot>
            <h3 class="category__date">{{item.date}}</h3>
            <h1 class="category__event">{{item.title}}</h1>
            </slot>

            <p class="category__info" slot="details">{{item.info}}</p>
            <p slot="details" v-if="item.img">
              <img :src="require(`../../assets/${item.img}`)" alt="event img">
            </p>
            <p class="category__info category__location" v-if="item.location" slot="details">{{item.location}}</p>
            <p class="category__info category__address" slot="details" v-if="item.address">
                {{item.address}}
            </p>
            <a :href="item.link" slot="details">{{item.link}}</a>
        </accordionItem>
    </ul>
</template>

<script>
import accordionItem from "./accordion-item";
import data from "@/data/pennyInfo.json";
export default {
  data() {
    return {
      items: data
    };
  },
  components: {
    accordionItem
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.accordion {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 1rem auto;
  list-style-type: none;
}
.accordion > *:not(:last-child) {
  border-bottom: 1px solid $primary-gold;
}
</style>
