<template>
  <div class="hello">
    <div class="row">
      <div class="col s6 left">
        <div class="card z-depth-5 darken-1">
          <div class="card-content white-text">
            <p class="flow-text">Maybe you've struggled to find clothing that fits you how you want it to.</p>
            <p class="flow-text">Maybe you're tired of society telling you how you should look.</p>
            <p class="flow-text">Maybe you've struggled with online shopping <br/> -will it be too short, too long, to tight, too loose?.</p>
            <p class="flow-text">Maybe you love to shop.</p>
            <p class="flow-text">Maybe you just want to share your bomb style with others.</p>
          </div>
        </div>
      </div>
      <div class="col s6 z-depth-5" style="padding:5rem;">
         <div class="card z-depth-5 darken-1">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input id="first_name" type="text" class="validate">
                <label for="first_name">Name</label>
              </div>
              <div class="input-field col s6">
                <input id="last_name" type="text" class="validate">
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input id="height_name" type="text" class="validate">
                <label for="height_name">Height</label>
              </div>
           
            
              <div class="input-field col s6">
                <input id="weight_name" type="text" class="validate">
                <label for="weight_name">Weight</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s2">
                <input id="age" type="email" class="validate">
                <label for="age">Age</label>
              </div>
              <div class="col s10">
                <div class="input-field">
                  <input id="instagram" type="text" class="validate">
                  <label for="instagram">Instagram Name</label>
                  <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                </div>
              </div>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action" @click="addUser">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import { usersRef } from '../database.js';
    
export default {
  name: "hello",
  data() {
    return {
      msg: "Driving the Inclusive Fashion Movement",
      brand: "Our Cool Name"  
    };
  },
    
    firebase: {
            users: usersRef
    },
    
    methods: {
        addUser(){
            var firstN = document.getElementById("first_name").value;
            usersRef.push({firstName: firstN});
        }
    }
    
};
    
    
    
    
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.col.s6.left {
  padding: 5rem;
}
.card .card-content {
  padding: 5rem ;
}
.card-content p {
  font-size: 28px;
  color:#666;
  line-height: 58px;
}

</style>
