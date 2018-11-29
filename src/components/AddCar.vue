<template>
<form @submit.prevent='addCar'>
    <div>   
        <br>     
    <label>Brand </label>
        <input v-model='newCar.brand'  placeholder="Enter brand" minlength="2" required  ><br>
    <label>Model </label>
        <input v-model='newCar.model'  placeholder="Enter model" minlength="2" required  ><br>
    <label >Select year </label>
        <select v-model = 'newCar.year' class="form-control" required >
            <option :value='year' v-for='(year,index) in years' :key='index'>{{year}}</option>     
        </select><br>
    <label>Max speed  </label>
        <input input type="number" v-model='newCar.maxSpeed'  placeholder="Enter max speed"><br>
    <label>Number of doors </label>
        <input input type="number" max='5' min='3' v-model='newCar.numberOfDoors' required ><br>
    <label>Is automatic </label>   
      <input type="checkbox" v-model='newCar.isAutomatic' ><br>   
    <!-- <div class='form-group row'> -->
    <label><h3>Engine</h3></label><br>
        <label>Electric </label>     
            <input name = 'engine' type="radio" value='electric' v-model='newCar.engine' required>  <br>
        <label>Diesel </label>     
            <input name = 'engine' type="radio" value='diesel' v-model='newCar.engine' required> <br>   
        <label>Petrol </label>     
            <input name = 'engine' type="radio" value='petrol' v-model='newCar.engine' required> <br>
        <label>Hybrid </label>     
            <input name = 'engine' type="radio" value='hybrid' v-model='newCar.engine' required> <br>       
    </div>
    <input class="btn btn-primary" type="submit" value="Submit">
    <input  type='button' @click.stop.prevent="resetForm" value='Reset'>
    <div>
    <input type = "button" @click='previewForm' value='Preview'>
    </div>
</form>
</template>

<script>
import { carsService } from '../utils/CarsService.js'
export default {
    data(){
        return{
            newCar: {
                isAutomatic: false
            },
            years: Array(29).fill(1990).map((n,i) => n + i )
        }
    },
    methods: {
        addCar(){
            carsService.add(this.newCar);
            this.newCar ={};
            this.$router.push('cars');
        },
        resetForm(){
            this.newCar ={};
        },
        previewForm(){
            var car = (JSON.stringify(this.newCar));
            var array = JSON.parse(car);
            alert(`Brand:${ array.brand }\nModel:${ array.model }\nMax Speed:${ array.maxSpeed }\nNumber Of Doors"${ array.numberOfDoors }\nYear:${ array.year }\n${ array.isAutomatic ? 'Automatic' : 'Manual' }\nEngine:${ array.engine }`);
        }
    }
}
</script>
