<template>
    <div>
     <ul class="list-group list-group-flush" v-if="errors.length > 0">
        <li class="list-group-item" v-for="(error,i) in errors" :key='i'>{{error.message}}</li>
      </ul>
    <div class="form-group">
    <label>Name</label>
    <input type="text" class="form-control"  placeholder="Firstname" v-model="employee.name">
  </div>
  <div class="form-group">
    <label>Surname</label>
    <input type="text" class="form-control"  placeholder="Lastname" v-model="employee.surname">
  </div>
  <div class="form-group">
    <label>Age</label>
    <input type="text" class="form-control"  placeholder="Age" v-model="employee.age">
  </div>
  <div class="form-group">
    <label>Degree</label>
    <select class="form-control" v-model="employee.degree" name="degree">
      <option v-for="(degree,i) in degrees" :value="degree.id" :key="'degree'+i">{{degree.description}}</option>
    </select>
  </div>
  <div class="form-group">
    <div v-for="(genre,i) in genres" :key="'genre'+i" class="form-check">
      <input class="form-check-input" type="radio" name="exampleRadios" :value="genre.id" v-model="employee.genre">
      <label class="form-check-label" for="exampleRadios1">
       {{genre.description}}
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary" @click="add">Submit</button>
    </div>    
</template>
<script>
import {reset} from '../mixin/reset'
export default {
   mixins: [reset],
    data(){
     return{
         employee:{
             name:'',
             surname:'',
             age:'',
             degree:'',
             genre:''
         },
         degrees:[],
         genres:[],
         errors:[]
     }
    },mounted(){
      this.$axios.$get('/api/degree').then(
        response => {
          this.degrees = response
        },
      )
       this.$axios.$get('/api/genre').then(
        response => {
          this.genres = response
        })
    },
    methods:{
    add(){
        this.errors=[]
        this.$axios.$post('/api/employee',{
        name : this.employee.name,
        surname : this.employee.surname,
        age : this.employee.age,
        genre_id : this.employee.genre,
        degree_id : this.employee.degree
      })
      .then(()=>{
        this.$toaster.success('Employee added')
        this.resetField()
      })
      .catch(e=>{
        console.log('Errore',e.response.data)
        this.errors.push(...e.response.data)
        this.$toaster.error('Error')
      })
     
    }

    }
}
</script>

