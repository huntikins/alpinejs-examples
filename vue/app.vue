<template>
  <div id="app">
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input
        type="text"
        id="name"
        v-model="name"
        @input="validateName"
        :class="{ invalid: nameError }"
      />
      <span v-if="nameError" class="error-message">{{ nameError }}</span>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      nameError: ''
    };
  },
  methods: {
    validateName() {
      if (this.name.length < 3) {
        this.nameError = 'Name must be at least 3 characters long';
      } else {
        this.nameError = '';
      }
    },
    submitForm() {
      this.validateName();
      if (!this.nameError) {
        alert('Form submitted successfully!');
      }
    }
  }
};
</script>

<style>
.invalid {
  border-color: red;
}
.error-message {
  color: red;
  font-size: 0.9em;
}
</style>
