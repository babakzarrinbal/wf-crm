<template>
  <div style="widht:100vw;height:100%;" @drop="createNewJson($event.dataTransfer.files)">
    <div
      class="locpage w-100 h-100 d-flex justify-content-center flex-column align-items-center p-5"
      v-if="locked"
    >
    <div class="">{{machineId}}</div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">کد فعالسازی</span>
        </div>
        <input type="text" v-model="activationCode" class="form-control" placeholder="کد فعالسازی" />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" @click="activation">اعمال کد</button>
        </div>
      </div>
    </div>
    <div v-else id="app" style="widht:100vw;height:100%;">
      <Header id="header" @openMenu="expandSettings = !expandSettings" />
      <div class="body">
        <transition name="width">
          <div class="sidebar" v-if="expandSettings">
            <ul class="list">
              <router-link
                v-for="(path,title) in {
                'داشبرد':'/',
                'مشتریان':'/entity/customers',
                'سرویسها':'/entity/services',
                'مشتریان غیرفعال':'/entity/inactivecustomers',
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
            <transition name="fade-fast" mode="out-in">
              <router-view id="pagecontainer" class="mainrouteview" />
            </transition>
          </keep-alive>
        </div>
      </div>
      <transition name="fade">
        <popup v-if="popup.visible" @hide="popup.visible = false" :args="popup.args" />
      </transition>
    </div>
  </div>
</template>
<script>
import Header from "./components/header";
import popup from "./components/popup";
export default {
  data() {
  let activationcode = window.localStorage.getItem("activationPassId");
    return {
      machineId:window.machineId,
      locked: (window.machineId||"").hashCode() != activationcode,
      activationCode:window.localStorage.getItem("activationPassId"),
      popup: {
        visible: false,
        args: {}
      },
      expandSettings: true
    };
  },
  components: {
    Header,
    popup
  },
  async created() {
    this.on("popup", args => {
      this.popup.visible = true;
      this.popup.args = JSON.parse(JSON.stringify(args));
    });
  },
  methods: {
    activation(){
      // window.localStorage.getItem("password") != window.machineId

      if(this.activationCode != window.machineId.hashCode()) return window.toastr.error('کد فعالسازی غلط است');
       window.localStorage.setItem("activationPassId",this.activationCode);
       this.locked = false

    }
  },
  watch: {
    popup: { deep: true, handler() {} }
  },
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
    flex-shrink: 0;
    width: 200px;
    background-color: #7676fc;
    .listItem{
      white-space: nowrap;
    }
  }
  .maincontent {
    flex-grow: 1;
    overflow: scroll;
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
