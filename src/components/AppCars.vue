<template>
    <div>
        <table class="table">
        <thead class="thead-light">
            <br>
    <tr>
      <th scope="col">Brand</th>
      <th scope="col">Model</th>
      <th scope="col">Year</th>
      <th scope="col">Max speed</th>
      <th scope="col">Is automatic</th>
      <th scope="col">Engine</th>
      <th scope="col">Number of doors</th>     
    </tr>
  </thead>
  <tbody>
    <tr  v-for="(car,index) in cars" :key="index">     
      <td>{{car.brand}}</td>
      <td>{{car.model}}</td>
      <td>{{car.year}}</td>
      <td>{{car.maxSpeed}}</td>
      <td>{{car.isAutomatic}}</td>
      <td>{{car.engine}}</td>
      <td>{{car.numberOfDoors}}</td>
      <td><router-link class='nav-link' :to="{name:'edit-car', params: {id:car.id}}">Edit</router-link></td>
      <button @click="deleteButton(id)">Delete</button>
    </tr>
    
  </tbody>
</table>
       
    </div>
</template>

<script>
import { carsService } from '../utils/CarsService.js'

export default {   
    data(){
        return{
            cars: []
         }
        },
    
    created(){
        // console.log(carsService.getAll());
        carsService.getAll().then(response => {
            this.cars = response.data;
        })
        .catch(error => {
            console.log(error.response);
        })
    },
    method: {
        deleteButton(id){
               
            carsService.delete(id);
            
        }
    }
}
</script>
