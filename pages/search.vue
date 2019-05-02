<template>
    <div>
        <div class="form-group">
        <label for="exampleFormControlInput1">Search</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="search" v-model="input">
        <button type="button" class="btn btn-success" @click="search">Search</button>
      </div>

      <employees :employees="employees" @delete="deleted" v-if="employees.length>=1"></employees>
      <div class="alert alert-primary text-center" role="alert" v-if="!searchon">
        Type name or surname to search emplyees  
       </div>
      <template v-if="searchon">
        <empty v-if="employees.length==0"></empty>
      </template>  

    </div>
</template>
<script>
import Employees from "~/components/Employees.vue";
import Empty from "~/components/Empty.vue";
export default {
    data(){
        return{
            input:'',
            employees:[],
            searchon:false
        }
    },
components: {
    Employees,
    Empty
  },

    methods:{
        search(){
            this.employees=[]
            this.$axios.post('/api/search',{
                input: this.input
            }).then(
                response =>{
                    this.employees.push(...response.data)
                    this.searchon=true
                }
            ).catch(e=>{
                console.log(e)
            })
        },
        async deleted(val){
        let res = await this.$axios.delete('/api/employee/'+val)
        if(res){
            this.$axios.$get('/api/employee')
              .then(response=>{
                this.$toaster.success('Employee deleted')
                setTimeout(()=>{ 
                    this.$router.push('/')
                }, 2000);
          }).catch(e=>{
            console.log(e)
            this.$toaster.error('Error')
          })
        }
      },
    
    }
}
</script>
