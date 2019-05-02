<template>
    <div>
    <div class="form-group">
    <label>Name</label>
    <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Firstname" v-model="employee.name">
  </div>
  <div class="form-group">
    <label>Surname</label>
    <input type="text" class="form-control" placeholder="Lastname" v-model="employee.surname">
  </div>
   <div class="form-group">
    <label>Age</label>
    <input type="text" class="form-control"  placeholder="Lastname" v-model="employee.age">
  </div>
  <div class="form-group">
    <label>Degree</label>
    <select class="form-control" v-model="employee.degree_id">
      <option v-for="(degree,i) in degrees" 
      :value="degree.id" 
      :key="'degree'+i">{{degree.description}}</option>
    </select>
  </div>
   <div class="form-group">
    <div v-for="(genre,i) in genres" :key="'genre'+i" class="form-check">
      <input class="form-check-input" type="radio" :value="genre.id" v-model="employee.genre_id">
      <label class="form-check-label" for="exampleRadios1">
       {{genre.description}}
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary" @click="update">Submit</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
          employee:{},
          degrees:[],
          genres:[]
        }
    },
    mounted(){
   this.$axios.$get('/api/employee/'+this.$route.params.id)
    .then(response=>{
      this.employee = response[0]
    })
     this.$axios.$get('/api/degree').then(
        response => {
          this.degrees = response
        })
    this.$axios.$get('/api/genre').then(
        response => {
          this.genres = response
        })
    },
    methods:{
      update(){
          this.$axios.$patch('/api/employee/'+this.$route.params.id,{
            name : this.employee.name,
            surname : this.employee.surname,
            degree_id: this.employee.degree_id,
            genre_id: this.employee.genre_id,
            age: this.employee.age
          }).then(()=>{
            this.$toaster.success('Employee updated')
          }).catch(e =>{
            this.$toaster.error('Error')
            console.log(e)
          })
      }
    }

}
</script>

