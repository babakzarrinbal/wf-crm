<template>
  <div class="px-2 h-100 overflow-scroll">
    <h2
      class="text-center mt-2"
    >{{state =="view" ? "مشاهده اطلاعات مشتری": (state=="new"? "مشاهده مشتری جدید":"ویرایش اطلاعات مشتری")}}</h2>
    <sectionEdit :fields="fields" :showId="true" lable="اطلاعات مشتری" :data="data" :type="state" />
    <div class="container pt-2 pb-4 text-left">
      <div v-if="state=='view'" class="btn btn-warning" @click="state = 'edit'">ویرایش</div>
      <div v-if="state!='view'" class="btn btn-success mx-3" @click="save">ثبت</div>
      <div v-if="state!='view'" class="btn btn-secondary" @click="cancel">انصراف</div>
      <div v-if="state != 'new'" class="btn btn-danger float-right"  @click="delItem">حذف</div>
    </div>
    <entityList
      class="pt-4 border-top border-primary"
      v-if="state !='new'"
      :newBtn="{text:'ایجاد سرویس جدید',to:'/entity/services/new/'+$route.params.id}"
      itemUrlPrefix="/entity/services/"
      :fields="serviceFields"
      :data="data.services"
    />
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
    let schemas = this.$root.schemas;
    
    return {
      state: "view",
      fields: Object.keys(schemas.customers)
        .filter(r => schemas.customers[r].type != "relation")
        .reduce((cu, c) => ((cu[c] = schemas.customers[c]), cu), {}),
      serviceFields: Object.keys(schemas.services)
        .filter(r => schemas.services[r].type != "relation")
        .reduce((cu, c) => ((cu[c] = schemas.services[c]), cu), {}),
      data: {
        services: [],
        active:true
      },
      requiredFields:['name','nextServiceDate']
    };
  },
  created() {
    this.state = this.$route.params.id == "new" ? "new" : "view";
    if (this.state != "new")
      this.dataCenter
        .getById("customers", this.$route.params.id, { populate: "services" })
        .then(d => (this.data = d)).catch(()=>this.$router.back());
  },
  methods: {
    cancel() {
      this.state = "view";
      this.$router.back();
    },
    async save() {
      if(!this.requiredFields.every(f=>this.data[f])){
        window.toastr.error("فیلدهای نام و تاریخ سرویس بعدی ضروری میباشد" );
        return;
      }
      let savingDate = JSON.parse(JSON.stringify(this.data));
      savingDate.services = (savingDate.services || []).map(s => s.id);
      let info = await this.dataCenter.post("customers", {
        id: this.$route.params.id,
        ...savingDate
      });
      this.$router.replace("/entity/customers/" + info.id);
      this.state = "view";
    },
    async delItem(){
      if(!window.confirm('از پاک کردن اطلاعات مشتری و همه سرویسهای آن مطمئنید')) return;
      await this.dataCenter.deleteByIds('services',this.data.services.map(s=>s.id));
      await this.dataCenter.deleteByIds('customers',this.data.id);
      window.toastr.success('اطلاعات مشتری با موفقیت پاک شد!!!');
      this.$router.back();
    }
  },
  computed: {}
};
</script>
