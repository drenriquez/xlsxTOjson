<template>
  <div class="hello">
    
    <h1>{{ msg }}</h1>
    <p>
      <strong> Create a JSON file from XLSX</strong>     
    </p>
    <br><br><br>
    <b-form-group   label="  " label-cols-sm="2" label-size="lg">
     <b-form-file  class="fileForm"
        v-model="file1" @change="fileCaricato"
        :state="Boolean(file1)"
       plain
        ></b-form-file>
        
      </b-form-group>  
        <br><br><br>
        <div>
           <b-spinner style="width: 3rem; height: 3rem;"  v-show="showSpinner"></b-spinner>
        </div>
         <b-button  id="sendFromFile" v-show="show" v-on:click="processFile()">send From File</b-button>
        <br><br>
        <b-form-checkbox id="checkbox-1" v-model="forBric" name="checkbox-1" value="true" unchecked-value="false" v-show="show" >
           save for Bric
        </b-form-checkbox>
        <br>
        <b-button class="btn btn-primary"  id="sendFromFiles" v-show="show" v-on:click="processFiles()">split in many files</b-button>
        <div>
          <b-spinner type="grow" v-show="okLoad"></b-spinner>
        </div>

    <!-- <div class="prova">      
        <button type="button" v-on:click="saveFile()">saveFile</button>
    </div> -->

  </div>

</template>

<script>

import readXlsxFile from 'read-excel-file'
import {funONEa,funONEmultiFiles,funONEmultiFilesBric} from '../xlxsTOjson'
export default {
  name: 'First',
  props: {
    msg: String
  },
  data() {
    return {
      okLoad:false,
      showSpinner:false,
      idPatient: '',
      BoD: '',
      todos: [] ,
      file1: null, 
      show: false,
      ro:{},
      bu:'',
      forBric:false,

      name: '',
      last: '',
      index: 0,
      grade: 0,
      arr: [5,5,7]
    };
  },
  methods: {

    saveFile: function() {
      const data = JSON.stringify(this.arr)
      const blob = new Blob([data], {type: 'text/plain'})
      const e = document.createEvent('MouseEvents'),
      a = document.createElement('a');
      a.download = "test.json";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
    },




    async processFile(){
      funONEa(this.ro);
      // var dict = {"one" : [15, 4.5],
      //   "two" : [34, 3.3],
      //   "three" : [67, 5.0],
      //   "four" : [32, 4.1]
      // };
      // var dictstring = JSON.stringify(dict);
      // //var fs = require('fs');
      // writeFile("thing.json", dictstring, function(err, result) {
      //     if(err) console.log('error', err, result);
      // });
    },
    async processFiles(){
      this.okLoad=true;
      if(this.forBric){
        funONEmultiFilesBric(this.ro)
      }
      else{
        funONEmultiFiles(this.ro)
      }
      setTimeout(()=>{ 
                    this.okLoad=false;
                }, 800);
    },
    fileCaricato(event) {
      this.showSpinner=true;
      
      this.file = event.target.files ? event.target.files[0] : null;
      readXlsxFile(this.file).then((rows) => {
        console.log(rows[0][1]);
        //console.log(rows[0])
                   
        //console.table(rows);
        console.log(rows);
        console.log(rows.length)
        this.showSpinner=false;
        this.show=true;
        this.ro=rows;
        })         
      },
  }
}; 
/*          
var dict = {"one" : [15, 4.5],
    "two" : [34, 3.3],
    "three" : [67, 5.0],
    "four" : [32, 4.1]};

var fs = require('fs');
fs.writeFile("thing.json", dictstring, function(err, result) {
    if(err) console.log('error', err);
});
*/ 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.file-upload {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.75rem;
  color: #007bff;
  border: 1px solid currentColor;
  border-radius:200px;
  display: inline-block;
  padding: 6px 12px;
  
}
input[type="file"]{
    cursor: pointer;
    
}
.prova{
  border: 3px;
  background-color: aqua;
}
.hello{
  background-color: rgb(187, 189, 184);
}
/* .fileForm{
  background-color:#ffffff ;
  border-style:unset;
} */

</style>
