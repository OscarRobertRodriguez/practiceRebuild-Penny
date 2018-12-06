<template>
 <div class="gallery__container" :class="$mq">
     <mq-layout mq="tablet+" class="gallery__control" :class="$mq">
     <img src="../../assets/circle-arrow.svg" alt="arrow-back" :class="$mq" @click="backward">
     </mq-layout>
     <mq-layout mq="mobile" class="gallery__control " :class="$mq">
     <img class="gallery__control--arrow"  src="../../assets/arrow-down-sm.svg" alt="arrow-back" :class="$mq" @click="backward">
     </mq-layout>
     <div class="gallery__gallery">

         <div class="gallery__images" :class="$mq">
             <transition name="component-fade" mode="out-in">
                 <keep-alive>
             <component :is="imageChange"></component>
                 </keep-alive>
             </transition>
         </div>

     </div>

     <mq-layout mq="tablet+" class="gallery__control" :class="$mq">
     <img  src="../../assets/circle-arrow.svg" alt="arrow-forward" :class="$mq" @click="forward">
     </mq-layout>

     <mq-layout class="gallery__control" mq="mobile" :class="$mq">
         <img class="gallery__control--arrow"  src="../../assets/arrow-down-sm.svg" alt="arrow-forward" :class="$mq" @click="forward">
     </mq-layout>

 </div>
</template>

<script>
import slide0 from "@/components/gallery/slide-1.vue";
import slide1 from "@/components/gallery/slide-2.vue";
import slide2 from "@/components/gallery/slide-3.vue";
import slide3 from "@/components/gallery/slide-4.vue";
import slide4 from "@/components/gallery/slide-5.vue";
import slide5 from "@/components/gallery/slide-6.vue";
import { eventBus } from "../../main";

export default {
  name: "gallery",
  data() {
    return {
      currentComponent: 0
    };
  },
  components: {
    slide0,
    slide1,
    slide2,
    slide3,
    slide4,
    slide5
  },
  methods: {
    forward() {
      if (this.currentComponent === 5) {
        eventBus.$emit("chicken", 0);
        return (this.currentComponent = 0);
      }
      eventBus.$emit("chicken", this.currentComponent + 1);
      return (this.currentComponent = this.currentComponent + 1);
    },
    backward() {
      if (this.currentComponent === 0) {
        eventBus.$emit("chicken", 5);
        return (this.currentComponent = 5);
      }
      eventBus.$emit("chicken", this.currentComponent - 1);
      return (this.currentComponent = this.currentComponent - 1);
    }
  },
  computed: {
    imageChange() {
      return "slide" + this.currentComponent.toString();
    }
  },
  created() {
    eventBus.$on("updateGallery", data => {
      this.currentComponent = data;
    });
  }
};
</script>

<style scoped lang="scss">
.gallery {
  &__container {
    display: grid;
    grid-template-columns: 1fr minmax(20rem, 5fr) 1fr;
    justify-items: center;
    align-items: center;
    width: 100%;
    max-width: 100rem;
    margin: 0 auto;

    &.mobile {
      grid-template-columns: 1fr minmax(20rem, 6fr) 1fr;
      width: 95%;
    }
  }

  &__gallery {
    position: relative;
    width: 100%;
    height: 100%;
    &:after,
    &:before {
      content: "";
      position: absolute;
      border: 3px solid #b17151;
      z-index: 200;
      border-image: linear-gradient(
        90deg,
        #d2996c,
        #a26343,
        #d2996c,
        #a26343,
        #d2996c
      );
      border-image-slice: 1;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
    }

    &:after {
      top: 8px;
      left: 8px;
      right: 8px;
      bottom: 8px;
    }
  }

  &__images {
    height: 45rem;
    width: 100%;
    border: 15px solid black;

    /*&.laptop,*/
    /*&.tablet {*/
    /*width: 60rem;*/
    /*}*/

    &.mobile {
      height: 30rem;
    }
  }

  &__control {
    justify-items: center;
    cursor: pointer;
    width: 5rem;

    &.mobile {
      max-width: 1rem;

      & img {
        width: 2rem;
      }
    }

    &:first-of-type {
      transform: rotateY(180deg);
    }
    & img {
      width: 100%;
      display: block;
    }
  }

  &__control--arrow {
    transform: rotate(-90deg);
    width: 100%;
    display: block;
    max-width: 3rem;
    cursor: pointer;
  }
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.2s ease;
}
.component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
