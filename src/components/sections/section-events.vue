<template>
    <section id="our-events" class="events">
        <sectionTitle>events</sectionTitle>
        <subTitle>latest happenings</subTitle>
        <accordion></accordion>
    </section>
</template>

<script>
import sectionTitle from "@/components/sectionTitle.vue";
import subTitle from "@/components/subTitle.vue";
import accordion from "@/components/accordion/accordion.vue";
export default {
  components: {
    sectionTitle,
    subTitle,
    accordion
  }
};
</script>

<style scoped>
</style>
