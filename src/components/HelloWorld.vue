<template>
  <div>
    <div class="center">
      <b-container fluid>
        <b-row>
          <b-table  :fields="fields" :items="items" :per-page="perPage" :current-page="currentPage"></b-table>
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            align="fill"
            size="sm"
            class="my-0"
          ></b-pagination>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "App",
  data: function() {
    return {
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      items: [],
      fields: [
          { key: 'address', label: 'Address', sortable: true, sortDirection: 'desc' },
          {key: 'name', label: 'Name Place', sortable: false},
        ],
    };
  },
  mounted() {
    this.findPlace()
  },
  methods:{
    findPlace(){
      axios.get('http://localhost:3000/SCG/findRestaurantsInBangsue').then((response)=>{
        if((typeof response.data) != 'string'){
          for(var i = 0;i < response.data.length;i++){
            this.items.push({address:response.data[i].formatted_address,name:response.data[i].name})
          }
          this.totalRows = response.data.length;
        }else{
          console.log(response.data)
          alert("waite some minute google api have exceeded your daily request quota for this API.!!")
        }
      })
    }
  }
};
</script>