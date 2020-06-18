<template>
  <div class="background" @click="$emit('hide')">
    <div class="m-2 d-flex flex-column modal-content" @click.stop>
      <div class="header">
        <button type="button" class="close p-2" @click="$emit('hide')">
          &times;
        </button>
        <h5 class="modal-title" id="exampleModalLabel">popuptitle</h5>
      </div>
      <div class="modal-body">
        
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.background {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  direction: rtl;
  background-color: #80808091;
  overflow: auto;
  justify-content: center;
  align-items: center;
}
</style>
<script>
export default {
  props: {
    entityName: String,
    entityId: String
  },
  methods: {
    close() {
      this.$emit("hideme");
    }
  }
};
</script>

