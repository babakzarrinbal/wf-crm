<template>
  <div id="app" style="widht:100vw;height:100%;" @drop="createNewJson($event.dataTransfer.files)">
    <Header id="header" @openMenu="expandSettings = !expandSettings" />
    <div class="body">
      <transition name="width">
        <div class="sidebar" v-if="expandSettings">
          <ul class="list">
            <router-link
              v-for="(path,title) in {
                'داشبرد':'/',
                'مشتریان':'/customers',
                'سرویسها':'/services',
                'دستگاه‌ها':'/devices'
                }"
              :key="path"
              @click.stop
              :to="path"
              tag="li"
              class="pr-1 listItem"
            >{{title}}</router-link>
          </ul>
        </div>
      </transition>
      <div class="maincontent">
        <keep-alive>
          <router-view id="pagecontainer" class="mainrouteview" />
        </keep-alive>
      </div>
      
    </div>
  </div>
</template>
<script>
import Header from "./components/header";
export default {
  data() {
    return {
      expandSettings: true
    };
  },
  components: {
    Header,
  },
  async created() {
  },
  methods: {},
  watch: {},
  computed: {}
};
</script>
<style lang="scss" scoped>
#app {
  font-family: "iranSans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#header {
  height: 30px;
}
.body {
  position: relative;
  display: flex;
  background-color: white;
  display: flex;
  overflow: hidden;
  justify-content: stretch;
  height: calc(100% - 30px);
  .sidebar {
    width: 200px;
    background-color: #7676fc;
  }
  .maincontent {
    flex-grow: 1;
  }
}
#nav {
  // padding: 10px;
  height: 35px;
  z-index: 99;
  position: absolute;
  width: 100%;
  bottom: 0;
  background: white;
  box-shadow: -1px -2px 13px 0px grey;
  a {
    cursor: pointer;
    font-weight: bold;
    color: #2c3e50;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    &:not(:last-of-type) {
      border-right: 1px solid gray;
    }
    &.router-link-exact-active {
      color: #42b983;
      background: #6f6f6f1c;
    }
  }
}
.list {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  .listItem {
    position: relative;
    font-size: 18px;
    color: white;
    border-bottom: 1px solid #ffffff75;
    padding: 7px 0;
    user-select: none;
    cursor: pointer;
    &:hover {
      font-weight: 900;
      background-color: #63636323;
      border-bottom: 1px solid #ffffffb9;
    }
  }
}
</style>
