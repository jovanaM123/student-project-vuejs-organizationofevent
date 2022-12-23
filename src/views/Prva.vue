<template>
<div class="row d-flex justify-content-center">
    
<div class="forma">
<div class="boks">
          <p style="color:#5cb85c" align="left"> DOBRO DOŠLI </p>
</div> 
      <hr/>
     <br/>  <br/>
     <b-form>

      <b-form-group
        id="input-group-1"
        label="Korisničko ime:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="username"
          type="text"></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Šifra:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          placeholder="************"
          v-model="password"
          type="password"></b-form-input>
      </b-form-group>


<br/>
<div class="text-center">
      <b-button type="submit" variant="success" style="width:300px; height:60px" @click="potvrda()" >Potvrda</b-button> <br/> <br/>
      Nemate nalog? 
      <button type="button" @click="promena()" style="color:#5cb85c" class="btn btn-link">Registrujte se</button> 

</div>
<br/>


    </b-form>
  </div>
  </div>
</template>

<script>
import router from '../router/index.js';
import users from '../data/usersData.js'

export default {
    name:'prva',
    data() {
      return {
          username:'',
          password:'',
          users:this.getusers()
}
    },
    methods: {
         getusers(){
          if(localStorage.getItem('users')!=null){
          return JSON.parse(localStorage.getItem('users'));
          } else {return users;}
    },
        potvrda() {
         var newusername=localStorage.getItem('usernamenew');

    if(newusername!==null && this.username==newusername){
        localStorage.setItem('username',newusername);
        router.push('home'); 
    } else {
        var user = this.users.find(user=> user.username
          ==this.username & user.password==this.password);
          if(user) {
          localStorage.setItem('username',user.username);
          router.push('home');       
          } else {
          alert('Unesite dobre podatke');
          }
    }
      
    },
    promena() {
         router.push('registracija');       
        }
    }}

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
    height:15%;
    background-color: #ceedd7;
}
.forma{
    padding-top: 15px;
    text-align: left;
    padding-left: 10px; 
    padding-right: 10px;
    padding-bottom: 10px;
    width: 40%;
    height: 450px;
    border: 0.5px solid grey;
}
</style>