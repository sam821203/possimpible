<template>
  <base-dialog
    v-if="inputIsInvalid"
    title="Invalid Input"
    @close="confirmedError"
  >
    <template #default>
      <p>Unfortunately, at least one input value</p>
      <p>Please check all inputs and make sure you enter</p>
    </template>
    <template #action>
      <base-button @click="confirmedError" mode="green-blue">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData" action="">
      <div class="form-control">
        <label for="aiGenerator">AI Generator</label>
        <input
          id="aiGenerator"
          name="aiGenerator"
          type="text"
          ref="aiGeneratorInput"
        />
      </div>
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="prompt">Prompt</label>
        <textarea id="prompt" name="prompt" rows="3" ref="promptInput" />
      </div>
      <div class="form-control">
        <label for="image">Image</label>
        <input id="image" name="image" type="url" ref="imageInput" />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    // 確認使用者有沒填寫資料
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredAiGenerator = this.$refs.aiGeneratorInput.value;
      const enteredPrompt = this.$refs.promptInput.value;
      const enteredImage = this.$refs.imageInput.value;
      const enteredLink = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() === '' ||
        enteredAiGenerator.trim() === '' ||
        enteredPrompt.trim() === '' ||
        enteredImage.trim() === '' ||
        enteredLink.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(
        enteredTitle,
        enteredAiGenerator,
        enteredPrompt,
        enteredImage,
        enteredLink
      );
    },
    confirmedError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: black;
  background-color: #ffeeeb;
}

.form-control {
  margin: 1rem 0;
}
</style>
