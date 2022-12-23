<template>
<div class="utakmice">
<div class="row d-flex justify-content-center">


    <div id="blok">
     <h1 align="center" > Nedodeljene sale </h1>

    <br/><br/>
    <b-container class="bv-example-row">
    <b-row v-for="match in matches" v-bind:key="match.id">
    <div class="w-100"></div>
    <b-col cols="7"><div>
    <b-card>    

    
    <b-card-text class="text-left">
      {{match.rivals}} <br/>
      {{match.date}} <br/>
      {{match.time}}
    </b-card-text>

  <b-card-text class="text-right">
  <b-dropdown v-if="match.hall=='da'" id="dropdown-right" right text="Hale" variant="primary" class="m-4">
    <b-dropdown-item href="#">Hala 1</b-dropdown-item>
    <b-dropdown-item href="#">Hala 2</b-dropdown-item>
    <b-dropdown-item href="#">Hala 3</b-dropdown-item>
  </b-dropdown>
       
  <button v-if="match.hall=='ne'" type="button"  class="btn btn-link">Zahtev za dodelu nove sale</button> 
    </b-card-text>

    </b-card>
</div></b-col>
  </b-row> 
</b-container>


    </div>
 </div>
  </div>
</template>

<script>
import matches from '../data/matchesData.js';

export default {
name:'utakmice',
data() {
    return{
        matches:matches
    }
}
  
}

</script>

<style  scoped>
#blok {
    padding-top: 20px;
    text-align: left;
    padding-left: 20px; 
    padding-bottom: 10px;
    width: 40%;
    height: 100%;
    background-color: azure;
}

p{
  font-size: 18px;
  text-align: left;
  padding-left: 50px; 
}
</style>