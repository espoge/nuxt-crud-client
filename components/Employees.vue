<template>
  <section class="container">
    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Gender</th>
      <th scope="col">Age</th>
      <th scope="col">Degree</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(employee,i) in employees" :key="'employee_'+i">
      <td>{{employee.name}}</td>
      <td>{{employee.surname}}</td>
      <td>{{(employee.genre && employee.genre.description) ? employee.genre.description : ''}}</td>
      <td>{{employee.age}}</td>
      <td>{{(employee.degree && employee.degree.description) ? employee.degree.description : ''}}</td>
      <td><nuxt-link :to="'/employee/'+employee.id" class="btn btn-success">detail</nuxt-link></td>
      <td><button class="btn btn-primary" @click="edit(employee.id)">edit</button></td>
      <td><button type="button" class="btn btn-danger" @click="del(employee.id)">remove</button></td>
    </tr>
  </tbody>
</table>
  </section>  
</template>
<script>
export default {
  props:{
    employees:{
      type:Array
    }
  },
  methods:{
      del(val){
        this.$emit('delete',val)
      },
      edit(val){
          this.$router.push('employee/'+val+'/update/')
      }
  }
}
</script>
