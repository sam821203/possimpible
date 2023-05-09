<template>
  <ul>
    <prompt-resource
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :ai-generator="res.aiGenerator"
      :title="res.title"
      :prompt="res.prompt"
      :image="res.image"
      :link="res.link"
    ></prompt-resource>
  </ul>
</template>

<script>
import PromptResource from './PromptResource.vue';
export default {
  inject: ['resources'],
  components: {
    PromptResource,
  },
};
</script>

<style scoped>
ul {
  padding: 0;
  list-style: none;
}
</style>
