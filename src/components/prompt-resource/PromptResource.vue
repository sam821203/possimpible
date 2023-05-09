<template>
  <li>
    <base-card>
      <header>
        <h5>{{ aiGenerator }}</h5>
        <h3>{{ title }}</h3>
        <div>
          <img :src="image" alt="" />
        </div>
        <base-button mode="" @click="removeResource(id)">Delete</base-button>
      </header>
      <p>{{ prompt }}</p>
      <nav>
        <a :href="link" target="_blank">Visit Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    aiGenerator: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  inject: ['removeResource'],
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
}

h3 {
  font-size: 1.25rem;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: rgb(255, 142, 127);
}

a:hover,
a:active {
  color: rgb(255, 172, 127);
}

img {
  width: 200px;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}
</style>
