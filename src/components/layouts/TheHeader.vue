<template>
  <header>
    <div>
      <h1>{{ title }}</h1>
      <p>Nothing and everything is possimpible! Sheer visionivity!</p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: #5757572c;
  backdrop-filter: blur(6px) opacity(1);
  border-bottom: 0.8px solid white;
}

header div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 50px;
  margin-right: 50px;
}

header h1,
header p {
  margin: 0;
  color: rgb(255, 255, 255);
}

header h1 {
  font-size: 24px;
}

header p {
  font-size: 14px;
}
</style>
