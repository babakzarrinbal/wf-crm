<template>
  <div>
    <div class="actions rounded p2 m-2 text-right"></div>
    <router-link
      v-if="newBtn"
      tag="div"
      class="btn btn-info float-right clearfix m-2"
      :to="newBtn.to || itemUrlPrefix+'new'"
    >{{newBtn.text}}</router-link>
    <div class="input-group m-2 col-6 float-left position-relative" v-if="searchEnabled" dir="ltr">
      <div class="input-group-prepend">
        <button
          class="btn btn-primary"
          type="button"
          ref="searchBtn"
          @click="$emit('search',search)"
        >جستجو</button>
      </div>
      <input
        v-model="search"
        @keyup="enterToClick($event)"
        type="text"
        class="form-control text-right"
        aria-describedby="basic-addon1"
      />
      <div v-if="search" class="clear clickable position-absolute bg-danger" @click="enterToClick({keyCode:27})">x</div>
    </div>
    <table class="table table-striped table-bordered border-primary" style="direction:rtl;">
      <thead>
        <tr>
          <th class="clickable" scope="col" v-for="(f,n) in (fields||{})" :key="n">{{f.lable}}</th>
        </tr>
      </thead>
      <tbody>
        <router-link
          :to="itemUrlPrefix  + d.id"
          tag="tr"
          v-for="(d,i) in data"
          :key="i"
          class="small clickable"
        >
          <td
            v-for="(f,n) in fields||{}"
            :key="n"
          >{{n.includes('.') ? d[n.split('.')[0]].map(c=>c[n.split('.')[1]]).join(","):d[n]}}</td>
        </router-link>
      </tbody>
    </table>
    <div class="col-11 btn btn-info m-2" v-if="moreBtn" @click="$emit('more')">موارد بیشتر</div>
  </div>
</template>
<style>
.clear {
  left: 92px;
  top: 5px;
  width: 24px;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  font-size: 17px;
}
</style>
<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    itemUrlPrefix: {
      type: String,
      default() {
        return this.$route.fullPath + "/";
      }
    },
    newBtn: Object,
    fields: Object,
    searchEnabled: Boolean,
    moreBtn:Boolean
  },
  data() {
    return {
      search: null
    };
  },
  methods: {
    enterToClick(e) {
      if (e.keyCode !== 13 && e.keyCode !== 27) return;
      this.$refs.searchBtn.focus();
      if (e.keyCode === 27) this.search = "";
      this.$emit("search", this.search);
    }
  }
};
</script>

