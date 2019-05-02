<template>
<div>
    <employees :employees="employees" @delete="deleted" v-if="employees.length>=1"></employees>
    <empty v-else></empty>
</div>
</template>

<script>
import Employees from "~/components/Employees.vue";
import Empty from "~/components/Empty.vue";
export default {
  components: {
    Employees,
    Empty
  },
  data(){
    return{
       employees:[]
    }
  },
  mounted(){
    this.$axios.$get('/api/employee')
    .then(response=>{
      this.employees = response
    })
    
  },methods:{
     async deleted(val){
        let res = await this.$axios.delete('/api/employee/'+val)
        if(res){
            this.$axios.$get('/api/employee')
              .then(response=>{
              this.employees = response
               this.$toaster.success('Employee deleted')
          }).catch(e=>{
            console.log(e)
            this.$toaster.error('Error')
          })
        }
      },

  }
 
}
</script>

<style>
</style>
