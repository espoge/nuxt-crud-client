<template>
    <div>
      <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Fistname: {{user.name}}</li>
          <li class="list-group-item">Lastname: {{user.surname}}</li>
          <li class="list-group-item">Age: {{user.age}}</li>
          <li class="list-group-item" v-if="user.genre && user.genre.description">Genre: {{user.genre.description}}</li>
          <li class="list-group-item" v-if="user.degree && user.degree.description">Degree: {{user.degree.description}}</li>

        </ul>
      </div>
      <button type="button" class="btn btn-danger" @click="del(user)">Delete</button>
      <button @click="edit(user.id)"  class="btn btn-primary">Update</button>

    </div>
</template>
<script>
export default {
  data(){
    return{
      user:{},
    }
  },
  mounted(){
    this.$axios.$get('/api/user/'+this.$route.params.id)
    .then(response=>{
        this.user = response[0]
      })
     
    },
    methods:{
      update(){
          this.$axios.$patch('/api/user/'+this.$route.params.id,{
            firstname : this.user.firstname,
            lastname : this.user.lastname,
            job_id: this.user.job.id
          })
      },
       edit(val){
          this.$router.push('/user/'+val+'/update')
      },
      del(val){
        this.$axios.delete('/api/user/'+val.id)
      }
    }
}
</script>

