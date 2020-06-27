<template>
  <div style="height:100%;overflow:auto">
    <h2 class="pt-2">لیست مشتریان</h2>
    <entityList
      :searchEnabled="true"
      @search="searching"
      :newBtn="{text:'ایجاد مشتری جدید'}"
      itemUrlPrefix="/entity/customers/"
      :fields="fields"
      :data="data"
      :moreBtn="moreBtn"
      @more="getData()"
    />
  </div>
</template>
<style>
</style>
<script>
import entityList from "@/components/entityList.vue";
export default {
  
  data() {
    let pageQty= 50;
    return {
      entity: this.$root.entities.customers,
      data: [],
      fields: Object.keys(this.$root.entities.customers.schema)
        .filter(r => this.$root.entities.customers.schema[r].type != "relation")
        .reduce(
          (cu, c) => ((cu[c] = this.$root.entities.customers.schema[c]), cu),
          {}
        ),
      query: {
        active:false,
        searchFields: ["name", "phone", "id"],
        start: 0,
        end: pageQty
      },
      moreBtn:false,
      pageQty
    };
  },
  created() {
    this.getData(true);
  },
  components: {
    entityList
  },
  methods: {
    searching(s) {
      this.query.search = s;
      this.getData(true);
    },
    async getData(fresh) {
      this.query.start = fresh ? 0 : this.query.start + this.pageQty;
      this.query.end = fresh ? this.pageQty : this.query.end + this.pageQty;
      this.data = fresh ? [] : this.data;
      this.dataCenter
        .getList("customers", this.query)
        .then(d => {
          this.data.push(...d);
          this.moreBtn = d.length == this.pageQty;
          this.$forceUpdate()
          });
    }
  }
};
</script>

