<template>
  <div style="height:100%;overflow:auto">
     <h2 class="pt-2" v-if="entity.listPage.meta.header">{{entity.listPage.meta.header}}</h2>
    <entityList :meta="entity.listPage.meta" :fields="entity.listPage.fields" :data="data" />
  </div>
</template>
<style>
</style>
<script>
import entityList from "@/components/entityList.vue";
export default {
  data() {
    return {
      entity:this.$root.entities.services,
      data: [
          {
            date: "1399/1/1",
            "customers.name":"تست",
            type: "نوع سرویس تستی",
            description: "توضیحات تستی",
            amount: 1000000,
            personel: "نام سرویسکار تستی"
          },
          {
            date: "1399/1/1",
            type: "نوع سرویس تستی",
            description: "توضیحات تستی",
            amount: 1000000,
            personel: "نام سرویسکار تستی"
          },
          {
            date: "1399/1/1",
            type: "نوع سرویس تستی",
            description: "توضیحات تستی",
            amount: 1000000,
            personel: "نام سرویسکار تستی"
          },
          {
            date: "1399/1/1",
            type: "نوع سرویس تستی",
            description: "توضیحات تستی",
            amount: 1000000,
            personel: "نام سرویسکار تستی"
          },
          {
            date: "1399/1/1",
            type: "نوع سرویس تستی",
            description: "توضیحات تستی",
            amount: 1000000,
            personel: "نام سرویسکار تستی"
          },
          {
            date: "1399/1/1",
            type: "نوع سرویس تستی",
            description: "توضیحات تستی",
            amount: 1000000,
            personel: "نام سرویسکار تستی"
          },
          {
            date: "1399/1/1",
            type: "نوع سرویس تستی",
            description: "توضیحات تستی",
            amount: 1000000,
            personel: "نام سرویسکار تستی"
          },
          {
            date: "1399/1/1",
            type: "نوع سرویس تستی",
            description: "توضیحات تستی",
            amount: 1000000,
            personel: "نام سرویسکار تستی"
          },
          {
            date: "1399/1/1",
            type: "نوع سرویس تستی",
            description: "توضیحات تستی",
            amount: 1000000,
            personel: "نام سرویسکار تستی"
          },
          {
            date: "1399/1/1",
            type: "نوع سرویس تستی",
            description: "توضیحات تستی",
            amount: 1000000,
            personel: "نام سرویسکار تستی"
          },
          {
            date: "1399/1/1",
            type: "نوع سرویس تستی",
            description: "توضیحات تستی",
            amount: 1000000,
            personel: "نام سرویسکار تستی"
          }
        ]
    };
  },
  components: {
    entityList
  },
};
</script>

