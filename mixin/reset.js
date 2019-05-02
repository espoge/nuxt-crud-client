export const reset = {
    data(){
      return {
        employee:{
          name:'',
          surname:'',
          age:'',
          degree:'',
          genre:''
      },
      }
    },
    methods:{
        resetField(){
        this.employee.name='',
        this.employee.surname='',
        this.employee.age='',
        this.employee.genre='',
        this.employee.degree=''
        }
    }
}
