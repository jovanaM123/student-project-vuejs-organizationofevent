<template>
  <div class="about">
 <div class="row d-flex justify-content-center">

    <div id="blok">
    
    <img src="../assets/logo.png" width="120px" height="120x" >
    <table class="table" v-for="user in users" :key="user.id">

  <tbody v-if="user.username==getusername()">
    <tr>
      
      <td>Ime</td>
      <td>{{user.name}}</td>
      
    </tr>
    <tr>
      
      <td>Prezime</td>
      <td>{{user.lastname}}</td>
 
    </tr>
    <tr>
      
      <td>Fakultet</td>
      <td>{{user.fax}}</td>
    
    </tr>

     <tr>
      
      <td>Broj indexa</td>
      <td>{{user.number}}</td>
    
    </tr>

     <tr>
      
      <td>Adresa</td>
      <td>{{user.address}}</td>
    
    </tr>

     <tr>
      
      <td>Telefon</td>
      <td>{{user.phone}}</td>
    
    </tr>
     <tr>
      
      <td>Korisnicko ime</td>
      <td>{{user.username}}</td>
    
    </tr>
     <tr>
      
      <td>Sifra</td>
      <td>{{user.password}}</td>
    
    </tr>

    <tr>
      
      <td>Email</td>
      <td>{{user.email}}</td>
    
    </tr>
  
      </tbody>
</table>
<br/>
      <small align="left">Ukoliko želite da promenite podatke kliknite na link</small>
      <button type="button" @click="promena()" class="btn btn-link">Promena podataka</button> 

     

    </div>
 </div>

  </div>
</template>

<script>
import users from '../data/usersData.js';
import router from '../router/index.js';


export default  {
name: 'nalog',
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
        user:{},
        users:this.getusers()
      }
  },
  methods: {
           getusers(){
          if(localStorage.getItem('users')!=null){
          return JSON.parse(localStorage.getItem('users'));
          } else {return users;}
    },
        promena() {
         router.push('promena')      
        },
        getusername(){
          return localStorage.getItem('username');
        }
    }
}
</script>

<style  scoped>
#blok {
    padding-top: 30px;
    text-align: left;
    padding-left: 50px; 
    width: 50%;
    height: 100%;
    background-color: azure;
}
p{
  font-size: 18px;
  text-align: left;
  padding-left: 50px; 
}
</style>
