<template>
    <div>
      <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Fistname: {{employee.name}}</li>
          <li class="list-group-item">Lastname: {{employee.surname}}</li>
          <li class="list-group-item">Age: {{employee.age}}</li>
          <li class="list-group-item" v-if="employee.genre && employee.genre.description">Genre: {{employee.genre.description}}</li>
          <li class="list-group-item" v-if="employee.degree && employee.degree.description">Degree: {{employee.degree.description}}</li>

        </ul>
      </div>
      <button type="button" class="btn btn-danger" @click="del(employee)">Delete</button>
      <button @click="edit(employee.id)"  class="btn btn-primary">Update</button>

    </div>
</template>
<script>
export default {
  data(){
    return{
      employee:{},
    }
  },
  mounted(){
    this.$axios.$get('/api/employee/'+this.$route.params.id)
    .then(response=>{
        this.employee = response[0]
      })
     
    },
    methods:{
       edit(val){
          this.$router.push('/employee/'+val+'/update')
      },
      del(val){
        this.$axios.delete('/api/employee/'+val.id)
        .then(()=>{
           this.$toaster.success('Employee updated')
          this.$router.push('/')
        })
        .catch(e=>{
          console.log(e)
        })
      }
    }
}
</script>

