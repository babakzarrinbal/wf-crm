<template>
  <div class="container">
    <h3 class="header m-3">{{meta.title}}</h3>
    <div class="form container p-0">
      <section
        class="group border border-secondary rounded p-2 pt-4 mt-4 position-relative"
        v-for="(g,n) in sections"
        :key="n"
        
      >
        <h5 class="sectiontitle clickable mb-3" @click="g.expanded = !g.expanded; $forceUpdate();">
          {{g.label}}
          <span
            class="arrow"
            :class="{'open':g.expanded}"
            style="font-size: 18px;padding: 3px 5px 0;"
          >&#9664;</span>
        </h5>
        <transition name="max-height">
          <div
            class="fields px-2"
            v-if="g.expanded"
            :ref="n"
            :style="'overflow:hidden;max-height:'+(g.maxHeight||'auto')"
          >
            <div
              class="field input-group mb-1"
              style="direction:rtl"
              v-for="(f,i) in g.fields"
              :key="i"
            >
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">{{f.label}}</span>
              </div>
              <input
                v-if="['text','number','date'].includes(f.type)"
                :disabled="f.readonly"
                :type="f.type"
                class="form-control rounded-left"
                :placeholder="f.label"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <textarea v-if="'textarea' == f.type" class="form-control"></textarea>
            </div>
          </div>
        </transition>
      </section>
    </div>
    <div class="foote border-primary rounded p-2 m-2 text-right" style="direction:rtl">
      <div class="btn btn-success ml-2">ذخیره اطلاعات</div>
      <div class="btn btn-danger">کنسل</div>
    </div>
  </div>
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
  data() {
    return {
      // window,
      entity: null,
      meta: {},
      data: {},
      sections: {}
    };
  },
  created() {
    let entity = this.$root.entities[this.$route.params.entity];
    this.meta.title =
      this.$route.params.id == "new"
        ? entity.meta.title.new
        : entity.meta.title.edit;
        
    this.copyObject(entity.sections, this.sections);
  },
  mounted(){
    Object.keys(this.sections).forEach(s=>{
      this.sections[s].maxHeight = this.$refs[s][0].offsetHeight + "px";
      this.$forceUpdate();
    })
  },
  methods: {
    copyObject(source, destination) {
      Object.keys(source).forEach(s => {
        if (typeof source[s] == "object") {
          destination[s] = {};
          this.copyObject(source[s], destination[s]);
        } else {
          destination[s] = source[s];
        }
      });
    },
  },
  deactivated() {
    this.$destroy();
  },
  watch: {
    data: { deep: true },
    meta: { deep: true },
    sections: { deep: true }
  }
};
</script>

