<template>
  <div>
    <div class="my-5 links d-flex justify-content-around">
      <router-link tag="div" to="/entity/customers" class="card bg-info clickable">مشتریان</router-link>
      <router-link tag="div" to="/entity/services" class="card bg-primary clickable">سرویسها</router-link>
    </div>
    <div class="alertlist">
      <h5 class="listheader text-danger pr-3" v-if="passed.length">لیست موارد گذشته</h5>
      <router-link
        tag="div"
        :to="'/entity/customers/'+p.id"
        class="clickable alert alert-danger m-2 d-flex justify-content-around"
        role="alert"
        v-for="(p,i) in passed"
        :key="'p-'+i"
      >
        <span>{{p.name}}</span>
        <span>{{p.nextServiceDate}}</span>

      </router-link>
      <h5 class="listheader text-warning pr-3" v-if="comming.length">لیست موارد پیش رو</h5>
      <router-link
        tag="div"
        :to="'/entity/customers/'+c.id"
        class="clickable alert alert-warning m-2 d-flex justify-content-around"
        role="alert"
        v-for="(c,i) in comming"
        :key="'c-'+i"
      >
        <span>{{c.name}}</span>
        <span>{{c.nextServiceDate}}</span>
      </router-link>
      <h5 class="listheader text-primary pr-3"  v-if="fine.length">لیست موارد فرصت دار</h5>
      <router-link
        tag="div"
        :to="'/entity/customers/'+f.id"
        class="clickable alert alert-primary m-2 d-flex justify-content-around"
        role="alert"
        v-for="(f,i) in fine"
        :key="'f-'+i"
      >
        <span>{{f.name}}</span>
        <span>{{f.nextServiceDate}}</span>

      </router-link>
    </div>
  </div>
</template>
<style lang='scss'>
.card {
  width: 150px;
  height: 150px;
  color: white;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
.listheader{
  text-align: right;
  margin-top:25px;
  display:flex;
  align-items: center;

  &:after{
    content:"";
    border-bottom: 1px solid;
    border-color:attr("style.color");
    flex-grow:1;
    margin-right:15px;
  }
}
</style>
<script>
export default {
  data() {
    let pageQty = 50;
    let today = new Date();
    let nextWeek = new Date();
    nextWeek = nextWeek.setDate(nextWeek.getDate() + 1);
    return {
      passed: [],
      comming: [],
      fine: [],
      query: {
        active: true,
        start: 0,
        end: pageQty
      },
      today,
      nextWeek
    };
  },
  created() {
    this.dataCenter.getList("customers", this.query).then(d => {
      for (let da of d){
        let date = window.jmoment(da.nextServiceDate, 'jYYYY/jM/jD').toDate();
        console.log(date,  date < this.today);
        if( date < this.today){
           this.passed.push(da);
           continue;
           }
        if( date < this.nextWeek){
          this.comming.push(da);
          continue;
        }
        this.fine.push(da)
      }

      this.$forceUpdate();
    });
  }
};
</script>
