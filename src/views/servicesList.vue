<template>
  <div style="height:100%;overflow:auto">
    <h2 class="pt-2">لیست سرویس‌ها</h2>
    <entityList :fields="fields" :data="data" :moreBtn="moreBtn" @more="getData()"/>
  </div>
</template>
<style>
</style>
<script>
import entityList from "@/components/entityList.vue";
export default {
  data() {
    let servcieSchema = this.$root.schemas.services;
    let pageQty = 50;
    return {
      data: [],
      fields: {
        "customers.name": { lable: "نام مشتری" },
        ...Object.keys(servcieSchema)
          .filter(r => servcieSchema[r].type != "relation")
          .reduce((cu, c) => ((cu[c] = servcieSchema[c]), cu), {})
      },
      query: {
        start: 0,
        end: pageQty,
        populate: "customers"
      },
      moreBtn: false,
      pageQty
    };
  },
  components: {
    entityList
  },
  created() {
    this.getData(true);
  },
  methods: {
    getData(fresh) {
      this.query.start = fresh ? 0 : this.query.start + this.pageQty;
      this.query.end = fresh ? this.pageQty : this.query.end + this.pageQty;
      this.data = fresh ? [] : this.data;
      this.dataCenter.getList("services", this.query).then(d => {
        this.data.push(...d);
        this.moreBtn = d.length == this.pageQty;
        this.$forceUpdate();
      });
    }
  }
};
</script>

