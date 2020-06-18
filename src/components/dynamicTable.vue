<template>
  <table class="table table-striped" style="direction:rtl;">
    <thead>
      <tr>
        <th class="clickable" scope="col" v-for="(f,n) in (fields||{})" :key="n">{{f.lable}}</th>
      </tr>
    </thead>
    <tbody>
      <router-link
        :to="rowUrlPrefix + d.id"
        tag="tr"
        v-for="(d,i) in data"
        :key="i"
        class="small clickable"
      >
        <td v-for="(f,n) in (fields||{})" :key="n">{{d[f.path]}}</td>
      </router-link>
    </tbody>
  </table>
</template>
<style>
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
    rowUrlPrefix: String,
    fields: Array
  }
};
</script>

