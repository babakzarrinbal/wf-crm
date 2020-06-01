<template>
  <div class="dropdown-parent">
    <ul class="list overflow-hidden">
      <div
        class="listItem"
        v-for="(itm,k) in menuItems"
        :key="k"
        :class="itm.customClass +' '+ customClass"
      >
        <div
          v-if="itm.children"
          @click.stop="itm.visible = !itm.visible;$forceUpdate()"
          style="overflow:hidden;padding-right:5px;"
        >
          <span class="float-left pl-2">&#x2039;</span>
          <span class="title pr-1">{{itm.title || item.name || item.path.split("/").filter(i=>t).join("-")}}</span>
          <transition name="slideDown">
            <DropMenu
              v-if="itm.visible"
              style="overflow:hidden"
              class="pr-2"
              :menuItems="itm.children"
              :customClass="customClass.replace(
            /\[([0-9]+)\]+$/,
            (fm, n) => '[' + (parseInt(n) + 1) + ']'
          )"
            />
          </transition>
        </div>
        <router-link
        @click.stop
          v-if="!itm.children"
          :to="itm.path"
          tag="li"
          class="title pr-1"
        >{{itm.title || item.name || item.path.split("/").filter(i=>t).join("-")}}</router-link>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DropMenu",
  props: {
    menuItems: [Object, Array],
    customClass: {
      type: String,
      default: "Level-0"
    }
  },
  data() {
    return {
      window,
      visible: []
    };
  },
  created() {
    this.visible = this.menuItems.map(() => false);
    this.$forceUpdate();
  },
  watch: {
    visible(prev, next) {
      console.log(prev, next);
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>

</style>
