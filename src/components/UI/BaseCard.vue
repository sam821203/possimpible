<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 40px 8% 50px;
  list-style-type: none;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2),
    0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  background-color: #1f1f1f;
}
</style>
