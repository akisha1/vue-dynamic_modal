<template>
  <div class="home">
    <button @click="callModal">
      Call Modal
    </button>
    <Modal 
    v-if="isShowModal"
    :title="'ModalTitle'"
    @close="close"
    >
    <template #body>
      Modal Body
    </template>
    <template #footer>
      <button>Cancel</button>
      <button>Send</button>
    </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  data() {
    return {
      isShowModal: false
    }
  },
  components: {
    Modal
  },
  methods: {
    close() {
      this.isShowModal = false
    },
    callModal() {
      this.isShowModal = true
    }
  }
}
</script>
