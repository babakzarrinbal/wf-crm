<template>
  <div>
    <div class="actions rounded p2 m-2 text-right">
      <router-link
        v-if="meta.newBtnLable"
        :to="meta.newBtnUrl"
        tag="div"
        class="btn btn-info"
        
      >{{meta.newBtnLable}}</router-link>
    </div>
    <table class="table table-striped" style="direction:rtl;">
      <thead >
        <tr>
          <th
            class="clickable"
            scope="col"
            v-for="(f,n) in (fields||{})"
            :key="n"
          >{{f.lable}}</th>
        </tr>
      </thead>
      <tbody>
        <router-link
          :to="meta.itemUrlPrefix + d.id"
          tag="tr"
          v-for="(d,i) in data"
          :key="i"
          class="small clickable"
        >
          <td v-for="(f,n) in (fields||{})" :key="n">{{d[f.path]}}</td>
        </router-link>
      </tbody>
    </table>
  </div>
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
    meta:  Object,
    fields: Array
  },
 
};
</script>

