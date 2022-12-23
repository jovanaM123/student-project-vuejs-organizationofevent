<template>
<div class="row d-flex justify-content-center">
  <div class="forma">
   <div class="boks">
          <p style="color:#5cb85c" align="left"> REGISTRACIJA </p>
</div> 
      <hr/>
     <br/>  <br/>
         <b-form>
      <b-form-group
        id="input-group-1"
        label="Ime:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="name"
          type="text"></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Prezime:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="lastname"
          type="text"></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Fakultet:"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="fax"
          type="text"></b-form-input>
      </b-form-group>

    
      <b-form-group
        id="input-group-4"
        label="Broj indeksa:"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="number"
          type="text"></b-form-input>
      </b-form-group>


      <b-form-group
        id="input-group-5"
        label="Adresa:"
        label-for="input-5"
      >
        <b-form-input
          id="input-5"
          v-model="address"
          type="text"></b-form-input>
      </b-form-group>


      <b-form-group
        id="input-group-6"
        label="Telefon:"
        label-for="input-6"
      >
        <b-form-input
          id="input-6"
          v-model="phone"
          type="text"></b-form-input>
      </b-form-group>


      <b-form-group
        id="input-group-7"
        label="Korisničko ime:"
        label-for="input-7"
      >
        <b-form-input
          id="input-7"
          v-model="username"
          type="text"></b-form-input>
      </b-form-group>


      <b-form-group
        id="input-group-8"
        label="Email adresa:"
        label-for="input-8"
      >
        <b-form-input
          id="input-8"
          v-model="email"
          type="email"></b-form-input>
      </b-form-group>
      
      <b-form-group
        id="input-group-9"
        label="Šifra:"
        label-for="input-9"
      >
        <b-form-input
          id="input-9"
          v-model="password"
          type="password"></b-form-input>
      </b-form-group>


<br/>
<div class="text-center">
      <b-button type="submit" variant="success"  style="width:300px; height:60px" @click="add()" >Potvrda</b-button>
</div>
    </b-form>
  </div>
  </div>
</template>

<script>
import router from '../router/index.js';
import users from '../data/usersData.js'

export default {
    name:'registracija',
    data() {
      return {
        
          email: '',
          name:'',
          lastname:'',
          username:'',
          password:'',
          fax:'',
          phone:'',
          number:'',
          address:'',
          users:users
}
    },
    methods: {
        add() {
        this.users.push({"username":this.username,
                          "password":this.password,
                          "name":this.name,
                          "lastname":this.lastname,
                          "fax":this.fax,
                          "number":this.number,
                          "address":this.address,
                          "phone":this.phone,
                          "email":this.email
                          });

        localStorage.setItem('users', JSON.stringify(this.users));
        localStorage.setItem('usernamenew',this.username);

        router.push({ name: 'prva'});       
        }
    },
    created(){
      if(localStorage.getItem('users')!=null){
        this.users = JSON.parse(localStorage.getItem('users'));
      }
    }
  }
</script>

<style scoped>
.boks{
    margin-left: -10px;
    margin-right: 0px;
    margin-top: -15px;
    margin-bottom: -15px;
    padding-top: 20px;
    text-align: left;
    padding-left: 10px; 
    padding-right: 10px; 
    padding-bottom: 10px;
    width:103%;
    height:7%;
    background-color: #ceedd7;
}
.forma{
    padding-top: 15px;
    text-align: left;
    padding-left: 10px; 
    padding-right: 10px;
    padding-bottom: 10px;
    width: 40%;
    height: 1000px;
    border: 0.5px solid grey;
}
</style>