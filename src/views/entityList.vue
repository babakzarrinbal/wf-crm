<template>
  <div style="height:100%;overflow:auto">
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
      testdata: {
        services: [
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
          },
          {
            date: "1399/1/1",
            type: "نوع سرویس تستی",
            description: "توضیحات تستی",
            amount: 1000000,
            personel: "نام سرویسکار تستی"
          }
        ],
        customers: [
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
        ],
        devices: [
          {
            name: "دستگاه تستی",
            type: "نوع تستی",
            description: "توضیحات تستی"
          },
          {
            name: "دستگاه تستی",
            type: "نوع تستی",
            description: "توضیحات تستی"
          },
          {
            name: "دستگاه تستی",
            type: "نوع تستی",
            description: "توضیحات تستی"
          },
          {
            name: "دستگاه تستی",
            type: "نوع تستی",
            description: "توضیحات تستی"
          },
          {
            name: "دستگاه تستی",
            type: "نوع تستی",
            description: "توضیحات تستی"
          },
          {
            name: "دستگاه تستی",
            type: "نوع تستی",
            description: "توضیحات تستی"
          },
          {
            name: "دستگاه تستی",
            type: "نوع تستی",
            description: "توضیحات تستی"
          },
          {
            name: "دستگاه تستی",
            type: "نوع تستی",
            description: "توضیحات تستی"
          },
          {
            name: "دستگاه تستی",
            type: "نوع تستی",
            description: "توضیحات تستی"
          }
        ]
      }
    };
  },
  components: {
    entityList
  },
  created() {
  },
  methods: {
    
  },
  computed: {
    data() {
      return this.testdata[this.$route.params.entity];
    },
    entity(){
      return this.$root.entities[this.$route.params.entity]
    }
  },
  watch: {

  },
  deactivated() {
    this.$destroy();
  }
};
</script>

