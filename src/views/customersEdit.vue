<template>
  <div class="container h-100 overflow-auto">
    <sectionEdit :fields="fields" lable="تست" :data="data" type="edit" />
    <entityList :meta="entity.listPage.meta" :fields="entity.listPage.fields" :data="data1" />
  </div>
</template>
<style>
</style>
<script>
import sectionEdit from "@/components/sectionEdit.vue";
import entityList from "@/components/entityList.vue";
export default {
  components: {
    sectionEdit,
    entityList
  },
  data() {
    return {
      lable: "jsj",
      fields: {
        date: {
          type: "date",
          lable: "تاریخ"
        },
        name: {
          type: "text",
          lable: " نام "
        }
      },
      data:{},
      data1: [
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
        ],
   
      entity:this.$root.entities.services
    };
  },
  created() {
    // setInterval(() => console.log(this.data), 5000);
  }
};
</script>
