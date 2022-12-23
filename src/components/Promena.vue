<template>
<div class="row d-flex justify-content-center">
  <div class="forma">
      
          <h3 style="color:gray" align="center"> Promena podataka </h3>
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
        label="Username:"
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
        label="Sifra:"
        label-for="input-9"
      >
        <b-form-input
          id="input-9"
          v-model="password"
          type="password"></b-form-input>
      </b-form-group>


<br/>
<div class="text-center">
      <b-button type="submit" variant="success" @click="potvrda()" >Potvrda</b-button>
</div>
    </b-form>
  </div>
  </div>
</template>

<script>
import router from '../router/index.js';
import users from '../data/usersData.js';

export default {

    name:'promena',
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
        potvrda() {
         router.push('home');       
        }
    }
  }
</script>

<style scoped>
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