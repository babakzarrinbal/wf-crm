<template>
  <div style="height:100%;overflow:auto">
    <div class="actions rounded p2 m-2 text-right">
      <router-link
        :to="'/'+ $route.params.entity+'/new'"
        tag="div"
        class="btn btn-info"
      >{{entity.meta.newbtn.label}}</router-link>
    </div>
    <table class="table table-striped" style="direction:rtl;">
      <thead>
        <tr>
          <th
            class="clickable"
            scope="col"
            v-for="(f,n) in entity.sections.__main.fields"
            :key="n"
          >{{f.label}}</th>
        </tr>
      </thead>
      <tbody>
        <router-link :to="'/'+$route.params.entity+'/1'" tag="tr" v-for="(d,i) in data" :key="i" class="small clickable">
          <td v-for="(f,n) in entity.sections.__main.fields" :key="n">{{d[n]}}</td>
        </router-link>
      </tbody>
    </table>
  </div>
</template>
<style>
</style>
<script>
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
  created() {
  },
  computed: {
    entity() {
      return JSON.parse(
        JSON.stringify(this.$root.entities[this.$route.params.entity])
      );
    },
    data() {
      return this.testdata[this.$route.params.entity];
    }
  },
  deactivated() {
    this.$destroy();
  }
};
</script>

