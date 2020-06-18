<template>
  <section
    class="group border border-secondary rounded p-2 pt-4 mt-4 position-relative"
    ref="section"
  >
    <h5 class="sectiontitle clickable mb-3" @click="expanded = !expanded;">
      {{lable}}
      <span
        class="arrow"
        :class="{'open':expanded}"
        style="font-size: 18px;padding: 3px 5px 0;"
      >&#9664;</span>
    </h5>
    <transition name="max-height">
      <div
        class="fields px-2"
        v-if="expanded"
        :style="'overflow:hidden;max-height:'+(maxHeight||'auto')"
      >
        <div class="field input-group mb-1" style="direction:rtl" v-for="(f,i) in fields" :key="i">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">{{f.lable}}</span>
          </div>
          <input
            v-if="['text','number','date'].includes(f.type)"
            :disabled="type == 'view'"
            :type="f.type"
            class="form-control rounded-left"
            :placeholder="f.lable"
            v-model="data[i]"
          />
          <textarea v-if="'textarea' == f.type" class="form-control"></textarea>
        </div>
      </div>
    </transition>
  </section>
</template>
<style scoped lang="scss">
.sectiontitle {
  position: absolute;
  top: -12px;
  right: 10px;
  background-color: white;
  direction: rtl;
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrow {
  transition: 0.5s;
  transform-origin: center, center;
  &.open {
    transform: rotateZ(-90deg);
  }
}
</style>
<script>
export default {
  props: {
    lable: String,
    fields: Object,
    type: String,
    data: {}
  },
  data() {
    return { expanded: true, maxHeight: 0 };
  },
  mounted() {
    this.maxHeight = this.$refs.section.offsetHeight + "px";
  }
};
</script>

