<template>
<li class="ac-item"  >
    <div class="category" @click="categoryClicked" >
     <div class="category__content">
    <!--<h3 class="category__date">november 9th, 6-9pm</h3>-->
    <!--<h1 class="category__event">east austin studio tour by projecto</h1>-->
         <slot></slot>
     </div>
        <div class="category__icon" :class="{ 'flip-icon' : flip}"></div>

    </div>

    <div class="category__details" :class="{open : openDrawer}">
        <!--<p class="category__info">Looking forward to the upcoming event with Projecto.  Also partnering is Hendricks Gin… should be some awesome gin and tonics!!!  #theprojectoatx #pennyback #tonic #gin</p>-->
        <!--<p>-->
            <!--<img src="../../assets/Pennyback-Projecto-768x994.jpg" alt="">-->
        <!--</p>-->
        <!--<h1 class="category__event">east austin studio tour by projecto</h1>-->
        <slot name="details"></slot>
    </div>

</li>
</template>

<script>
export default {
  data() {
    return {
      flip: false,
      openDrawer: false
    };
  },
  methods: {
    categoryClicked() {
      this.flip = !this.flip;
      this.openDrawer = !this.openDrawer;
    }
  }
};
</script>

<style scoped lang="scss">
.flip-icon {
  transform: rotateX(-180deg);
}
.category {
  text-align: left;
  padding: 4rem 0 1.5rem;
  display: grid;
  grid-template-columns: minmax(auto, 1fr) min-content;
  justify-items: start;
  align-items: center;
  grid-column-gap: 2rem;
  cursor: pointer;

  &__date {
    color: $primary-gold;
    text-transform: uppercase;
    font-size: 1.8rem;
    letter-spacing: 4px;
  }
  &__event {
    color: #fff;
    text-transform: uppercase;
    font-size: 3rem;
    padding: 1rem 0;
    letter-spacing: 4px;
    font-family: Roboto;
  }
  &__icon {
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 18px solid #a26343;
    width: 0;
    height: 0;
    justify-self: end;
    transition: all 0.2s ease;
  }

  &__details {
    font-family: Roboto, sans-serif;
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s ease;
    .category__address {
      text-align: center;
    }
    .category__location {
      text-transform: uppercase;
      text-align: center;
      padding-top: 2rem;
    }
    p {
      color: #d8d8d8;
      font-size: 1.8rem;
      line-height: 1.6;
      text-align: left;
      padding: 0 0 1rem 0;
    }
    img {
      width: 100%;
      max-width: 250px;
    }

    a {
      color: $primary-gold;
      text-decoration: none;
      font-size: 2rem;
      display: block;
      padding: 1rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.open {
  max-height: 500px;
  padding: 2rem 0;
}
</style>
