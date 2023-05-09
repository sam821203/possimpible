<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: rgb(255, 142, 127);
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover,
button:active {
  background-color: rgb(255, 172, 127);
}

.flat {
  background-color: rgb(250, 214, 193);
  border: none;
}

.flat:hover,
.flat:active {
  background-color: rgb(250, 214, 193);
}

.green-blue {
  background-color: rgb(26, 200, 182);
  border: none;
}

.green-blue:hover,
.green-blue:active {
  background-color: rgb(21, 170, 155);
}

.purple {
  background-color: rgb(81, 26, 200);
  border: none;
}

.purple:hover,
.purple:active {
  background-color: rgb(68, 22, 168);
}
</style>
