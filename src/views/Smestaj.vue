<template>
  <div class="smestaj">
    <div class="row d-flex justify-content-center">

    <div id="blok">
    <b-tabs content-class="mt-3" justified>
    <b-tab title="Smeštaj" active>
     <h1 align="center"> Zahtevi </h1>
 
     <br/> <br/>
    <b-container class="bv-example-row" v-for="(r,index) in requests"  v-bind:key="r.id">
     <div> 
    <b-row v-if="r.type=='smestaj'">
    <b-col cols="8"><div>
    <b-card>    

    <b-card-text class="text-left">
    <b>  {{r.name}} {{r.lastname}} </b> <br/>
    <button type="button" @click="details(r.razlog)" class="btn btn-link">Detalji</button> 
    </b-card-text>
    <b-card-text class="text-right">
     <button @click="Show()" class="btn btn-success"> DA </button>  <button class="btn btn-danger" @click="brisi(index)"> NE </button>
    </b-card-text>
    <br/>
    
    </b-card>
</div></b-col>
  </b-row> </div>
  </b-container>
    </b-tab>

    <b-tab title="Restoran">  
        <h1 align="center"> Zahtevi </h1>
      <br/>  <br/>
 <b-container class="bv-example-row" v-for="r in requests" v-bind:key="r.id">
    <b-row v-if="r.type == 'restoran'">
    <b-col cols="8"><div>
    <b-card>    

    <b-card-text class="text-left">
    <b>  {{r.name}} {{r.lastname}} </b> <br/>
    <button type="button" @click="details(r.razlog)" class="btn btn-link">Detalji</button> 

    </b-card-text>
    <b-card-text class="text-right">
     <button @click="Show()" class="btn btn-success"> DA </button>  <button class="btn btn-danger"> NE </button>
    </b-card-text>
    <br/> 
    <router-link> Detalji </router-link>
    
    </b-card>
</div></b-col>
  </b-row>
  </b-container>
    </b-tab>
  </b-tabs>



</div>
</div>




    <modal name='acceptModal'>
      <table width='100%' style='background-color: gray'>
        <tr>
          <td align='right'>
            <button @click="$modal.hide('acceptModal')">
              X
            </button>
          </td>
        </tr>
      </table>
      <br/><br/>
      <form>
      <table align='center'>
        <tr>
          <td>Tip:</td>
          <td>
          <input type="checkbox" id="smestaj" value="smestaj">
          <label> Smeštaj </label> <label>    </label>
          <input type="checkbox" id="restoran" value="Restoran">
          <label >Restoran</label>
          </td>
        </tr>
        <tr>
          <td>Novi smeštaj/restoran:</td>
          <td>
            <input type='text'>
          </td>
        </tr>
        <br/> <br/>
       <tr>
      
          <td colspan='2' align='center'>
            <button class='btn btn-success'>
              Potvrda</button>
          </td>  
        </tr>
      </table>
      </form>
    </modal>

 </div>
</template>

<script>
import requests from '../data/requestsData.js';

export default {
    name: 'smestaj',
    data() {
      return {
      show:1,
      requests:requests
      }
    },
    methods:{
    Show(){
      this.$modal.show('acceptModal');
        },
    details(t) {
        alert(t);
    },
    brisi(index) {
      this.requests.splice(index, 1);  }
    }
}

</script>

<style  scoped>
#blok {
    padding-top: 0px;
    text-align: left;
    padding-left: 0px; 
    padding-bottom: 10px;
    width: 50%;
    height: 800px;
    background-color: azure;
}

p{
  font-size: 18px;
  text-align: left;
  padding-left: 50px; 
}
</style>
