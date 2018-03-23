<template>
  <div id="app">
    <div class="row">
    <header>
      <h1 class="text-center main_title">VueJS firebase Crud Demo</h1>
    </header>
  </div>
    <div class="row">
      <div class="add_div">
        <div class="col-md-4 col-md-offset-4">
          
          <h3 class="page_title">Add Data </h3>
          <label class="form-label">Enter Name:</label>
          <input class="form-control" type="text" v-model="name"></input><br/>
          <button type="button" class="btn btn-success add_btn" @click="submitName(name)">Submit</button>
        </div>
      </div>
    </div>
    <hr class="divider_hr">
    <div class="second_div">
    <div class="row">
     <div class="col-md-4 col-md-offset-4">
      <ol>
        <li v-for="person of persons" v-bind:key="person['.key']">
          <div class="row">
            <div class="item-show" v-if="!person.edit">
              <div class="pull-left m-t-10">
                <p class="person_name">{{person.name}}</p>
              </div>
              <div class="pull-right m-t-10">
                <button class="btn btn-danger" @click="removeName(person['.key'])">remove</button>
                <button class="btn btn-warning" @click="setEditName(person['.key'])">Edit</button>
              </div>
            </div>

          <div class="item-edit" v-else>
            <div class="pull-left m-t-10">
              <input type="text" v-model="person.name">
            </div>
            <div class="pull-right m-t-10">
              <button class="btn btn-success" @click="saveEdit(person)">Save</button>
              <button class="btn btn-danger" @click="cancelEdit(person['.key'])">Cancel</button>
            </div>
          </div>
          </div>
        </li>
      </ol>
    </div>
  </div></div>
  </div>
</template>



<script>
import firebase from 'firebase';
import { namesRef } from '../main';

export default {
  data () {
    return {
      name: '',
      persons: ''
    }
  },
  firebase:{
    persons: namesRef
  },
  methods:{
    submitName(name) {
      namesRef.push({name: name, edit: false});
      this.name = '';
    },
    removeName(key) {
      namesRef.child(key).remove();
    },
    setEditName(key){
      namesRef.child(key).update({edit: true});
    },
    cancelEdit(key){
      namesRef.child(key).update({edit: false});
    },
    saveEdit(person){
      const key = person['.key'];
      // namesRef.child(key).update()
      namesRef.child(key).set({ name: person.name, edit:false});
    }
  }
}
</script>



<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}




a {
  color: #42b983;
}

.item-show{}
.item-show p{display: inline-block;}
.item-edit{}
.page_title{
  font-size: 20px;
  font-weight: 700;
  text-align: left;
}
.add_btn{
      padding: 8px 75px;
}
.main_title{
      font-weight: 900;
    color: #7254ca;
    text-transform: uppercase;
}
.divider_hr{
  margin: 30px 100px;
}
ol{
  padding-left: 0;
  list-style: none;
}
.person_name{
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
}
.m-t-10{
  margin-top : 10px;
}
</style>
