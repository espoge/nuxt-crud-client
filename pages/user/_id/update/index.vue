<template>
    <div>
    <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Firstname" v-model="user.name">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Surname</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Lastname" v-model="user.surname">
  </div>
   <div class="form-group">
    <label for="exampleInputPassword1">Age</label>
    <input type="text" class="form-control"  placeholder="Lastname" v-model="user.age">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Degree</label>
    <select class="form-control" id="exampleFormControlSelect1" v-model="user.degree_id">
      <option v-for="(degree,i) in degrees" 
      :value="degree.id" 
      :key="'degree'+i">{{degree.description}}</option>
    </select>
  </div>
   <div class="form-group">
    <div v-for="(genre,i) in genres" :key="'genre'+i" class="form-check">
      <input class="form-check-input" type="radio" name="exampleRadios" :value="genre.id" v-model="user.genre_id">
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
          user:{},
          degrees:[],
          genres:[]
        }
    },
    mounted(){
   this.$axios.$get('/api/user/'+this.$route.params.id)
    .then(response=>{
      this.user = response[0]
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
          this.$axios.$patch('/api/user/'+this.$route.params.id,{
            name : this.user.name,
            surname : this.user.surname,
            degree_id: this.user.degree_id,
            genre_id: this.user.genre_id,
            age: this.user.age
          })
      }
    }

}
</script>

