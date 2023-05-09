<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resource')"
      :mode="storedResButtonMode"
      >Stored Resource</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResource,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resource',
      storedResource: [
        {
          id: 'prompt-20230502',
          aiGenerator: 'lexica',
          title: 'A small beautiful robot',
          prompt:
            'A small beautiful robot of yellow color, smiling on the background of the sea beach, a clear render',
          image:
            'https://image.lexica.art/sm2/e87db3e6-2155-4c11-804f-e7fe06feb02e',
          link: 'https://lexica.art/prompt/92cc893f-2777-451d-b01c-5371125c8b26',
        },
        {
          id: 'prompt-20230503',
          aiGenerator: 'lexica',
          title: 'The beatles 3d character',
          prompt: 'The beatles 3d character cartoon disney pixar render',
          image:
            'https://image.lexica.art/full_jpg/421508b9-b715-4d02-ae85-87ce2143718a',
          link: 'https://lexica.art/prompt/ecd3f1f4-3dbf-437e-9024-f4fcac03fc93',
        },
        {
          id: 'prompt-20230504',
          aiGenerator: 'Stable Diffusion',
          title: '1 girl ocean',
          prompt:
            '(best quality, masterpiece), 1girl, paw pose, smile, laughing, ocean, crop top, shorts, blonde, freckles, blush, looking at viewer, wavy hair, cloud, splashing, waves, sun, mountain, wet',
          image:
            'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/d2b03164-2496-4158-e511-9e11f25eb200/width=768/00489-2863479537-(best%20quality,%20masterpiece),%201girl,%20paw%20pose,%20smile,%20laughing,%20ocean,%20crop%20top,%20shorts,%20blonde,%20freckles,%20blush,%20looking%20at%20view.jpeg',
          link: 'https://civitai.com/images/639415?period=AllTime&periodMode=published&sort=Newest&view=categories&modelVersionId=58693&modelId=30240&postId=178073',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResource,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, aiGenerator, prompt, image, link) {
      const newResource = {
        id: new Date().toISOString(),
        aiGenerator: aiGenerator,
        title: title,
        prompt: prompt,
        image: image,
        link: link,
      };
      this.storedResource.unshift(newResource);
      this.selectedTab = 'stored-resource';
    },
    removeResource(id) {
      // 這樣會得到新的陣列，所以無法更改資料
      // this.storedResource = this.storedResource.filter(
      //   (resource) => resource.id !== id
      // );
      const resourceIndex = this.storedResource.findIndex(
        (resource) => resource.id === id
      );
      this.storedResource.splice(resourceIndex, 1);
    },
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resource' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
};
</script>
