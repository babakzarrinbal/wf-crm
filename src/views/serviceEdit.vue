<template>
  <div class="px-2 h-100 overflow-scroll">
    <h2
      class="text-center mt-2"
    >{{state =="view" ? "مشاهده اطلاعات سرویس": (state=="new"? "مشاهده سرویس جدید":"ویرایش اطلاعات سرویس")}}</h2>
    <sectionEdit :fields="fields" lable="اطلاعات سرویس" :data="data" :type="state" />
    <div class="container pt-2 pb-4 text-left">
      <div  class="btn btn-secondary mx-3" @click="cancel">بازگشت</div>
      <div v-if="state =='view'" class="btn btn-warning" @click="state = 'edit'">ویرایش</div>
      <div v-if="state !='view'" class="btn btn-success " @click="save">ثبت</div>
      <div v-if="state != 'new'" class="btn btn-danger float-right"  @click="delItem">حذف</div>
      <!-- <div
        v-if="state =='view'"
        class="btn btn-secondary float-right"
        @click="$router.back()"
      >بازگشت</div> -->
    </div>
  </div>
</template>
<style>
</style>
<script>
import sectionEdit from "@/components/sectionEdit.vue";
export default {
  components: {
    sectionEdit
  },
  data() {
    let services = this.$root.schemas.services;
    return {
      state: "view",
      fields: Object.keys(services)
        .filter(r => services[r].type != "relation")
        .reduce((cu, c) => ((cu[c] = services[c]), cu), {}),
      data: {
        customers:[]
      },
      requiredFields:[
        'serviceDate','personel','type'
      ]
    };
  },
  created() {
    let p = this.$route.params;
    this.state = p.id == "new" ? "new" : "view";
    if (this.state != "new")
      this.dataCenter
        .getById("services", p.id, { populate: "customers" })
        .then(d => (this.data = d)).catch(()=>this.$router.back());
    else {
      if (!p.cid) return this.$router.push("/");
      this.dataCenter.getById("customers", p.cid).then(c => {
        this.data.customers = [c];
      });
    }
  },
  methods: {
    cancel() {
      this.$router.back();
      this.state = "view";
    },
    async save() {
      if(!this.requiredFields.every(f=>this.data[f])){
        window.toastr.error("فیلدهای تاریخ وسرویسکار و نوع سرویس ضروری میباشد" );
        return;
      }
      let savingData = JSON.parse(JSON.stringify(this.data));
      savingData.customers = savingData.customers.map(c => c.id);
      this.dataCenter
        .post("services", {
          id: this.$route.params.id,
          ...savingData
        })
        .then(i => {
          if (this.$route.params.id == "new") {
            this.data.customers[0].services.push(i.id);
            this.dataCenter
              .post("customers", this.data.customers[0])
              .then(() => {
                this.$router.replace("/entity/services/" + i.id);
                this.state = "view";
              });
          } else {
            this.$router.replace("/entity/services/" + i.id);
            this.state = "view";
          }
        });
    },
    async delItem(){
      if(!window.confirm('از پاک کردن اطلاعات سرویس مطمئنید؟')) return;
      await this.dataCenter.deleteByIds('services',this.data.id);
      window.toastr.success('اطلاعات سرویس با موفقیت پاک شد!!!');
      this.$router.back();
    }
  },
  computed: {}
};
</script>
