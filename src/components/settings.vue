<template>
  <div id="settings">
    <div class="backoverlay"  @click="hideme()"></div>
    <div class="window position-relative" v-on:click.stop>
      <button type="button" class="close text-large" aria-label="Close" @click="hideme()">
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="clearfix"></div>
      <dropDown :menuItems="menuitems" class="maindrop" style="display:block;position: relative !important;left:0" />
    </div>
  </div>
</template>

<script>
import dropDown from "./dropmenu";
export default {
  name: "settings",
  data() {
    return {
      showpassform: false,
      shownewpass: false,
      showoldpass: false,
      savingpassword: false,
      oldpass: null,
      newpass: null,
      menuitems: [
        {
          title: "Install",
          action:() => {window.propforinstall()},
          customClass: "bg-success btn btn-success font-weight-bold"
        },
        {
          title: "Update/Reset",
          action: this.updateapp,
          customClass: "bg-warning font-weight-bold"
        },        
      ]
    };
  },
  components: {
    dropDown
  },
  created() {},
  methods: {
    hideme: function() {
      this.$emit("hide");
    },
    logout() {
      window.localStorage.setItem("api_token", null);
      this.$root.user = null;
      this.socketreconnect();
      this.hideme();
    },
    updateapp() {
      window.location.reload(true);
    },
  },
  computed: {}
};
</script>

<style scoped lang="scss">
#settings {
  width: 100vw;
    height: 100%;
    top: 0;
    position: fixed;
    z-index: 9999;
  .backoverlay{
  width: 100vw;

    height: 100%;
    position: fixed;
    background-color: #80808073;
    top: 0;
    right: 0;
  }
  .window {
    float: left;
    height: 100%;
    padding-top: 5px;
    overflow: visible;
    width: 220px;
    background-color: #fff;
    box-shadow: 5px 2px 16px #424242;
  }
}
/deep/ .maindrop{
  > .list-group{
    box-shadow: none !important;
  }
}
/deep/ .dropdown-parent {
  user-select: none;
  cursor: pointer;
  min-width: 200px;
  left: 100%;
  top: 0;
  display: none;
  background: white;
  .list-group{
    box-shadow: 5px 5px 5px #424242;
  }
  .list-group-item:hover {
    // background:#e6e4e4;
    &:after {
      z-index: 1;
      content: "";
      background: inherit;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      filter: brightness(90%);
    }
    > .title {
      transform: translateY(-2px);
      text-shadow: 4px 9px 7px #585858;
    }
    > .dropdown-parent {
      display: block;
    }
  }
}
</style>
