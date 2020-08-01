<template>
  <div>
    <Modal v-if="isVisibility" title="This is new title" @toggle-modal="toggleModal">
      This is a
      <strong>strong</strong> slot
    </Modal>

    <button
      @click.prevent="toggleModal"
      class="bg-blue-500 text-white p-2 text-sm rounded"
    >Open Modal</button>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      isVisibility: false,
    };
  },
  methods: {
    toggleModal() {
      this.isVisibility = !this.isVisibility;
    },
  },
};
</script>
