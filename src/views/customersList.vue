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
      entity:this.$root.entities.customers,
      data: [
        {
          nextservicedate: "1399/10/10",
          
          name: "نام تستی",
          phone: "923334234",
          address: "، خیابان پاسداران ،ساری",
          referer: "یزدانی",
          installationDate: "1398/1/1",
          installer: "علی"
        },
        {
          nextservicedate: "1399/10/10",
          name: "نام تستی",
          phone: "923334234",
          address: "، خیابان پاسداران ،ساری",
          referer: "یزدانی",
          installationDate: "1398/1/1",
          installer: "علی"
        },
        {
          nextservicedate: "1399/10/10",
          name: "نام تستی",
          phone: "923334234",
          address: "، خیابان پاسداران ،ساری",
          referer: "یزدانی",
          installationDate: "1398/1/1",
          installer: "علی"
        },
        {
          nextservicedate: "1399/10/10",
          name: "نام تستی",
          phone: "923334234",
          address: "، خیابان پاسداران ،ساری",
          referer: "یزدانی",
          installationDate: "1398/1/1",
          installer: "علی"
        },
        {
          nextservicedate: "1399/10/10",
          name: "نام تستی",
          phone: "923334234",
          address: "، خیابان پاسداران ،ساری",
          referer: "یزدانی",
          installationDate: "1398/1/1",
          installer: "علی"
        },
        {
          nextservicedate: "1399/10/10",
          name: "نام تستی",
          phone: "923334234",
          address: "، خیابان پاسداران ،ساری",
          referer: "یزدانی",
          installationDate: "1398/1/1",
          installer: "علی"
        },
        {
          nextservicedate: "1399/10/10",
          name: "نام تستی",
          phone: "923334234",
          address: "، خیابان پاسداران ،ساری",
          referer: "یزدانی",
          installationDate: "1398/1/1",
          installer: "علی"
        }
      ]
    };
  },
  components: {
    entityList
  },
};
</script>

