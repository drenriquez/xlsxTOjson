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
         <b-button  id="sendFromFile" :disabled="disableBtn" v-show="show" v-on:click="processFile()">send From File</b-button>
        <br><br>
        <div id='btn-container'>
          <div id="checkbox-1" >
            <b-form-checkbox v-model="forBric" :disabled="disableBtn"  name="checkbox-1" value="true" unchecked-value="false" v-show="show" >
              save for Bric
            </b-form-checkbox>
          </div>
        <div id="btnONE">
        <b-button class="btn btn-primary"   v-show="show" :disabled="disableBtn" v-on:click="processFiles()">split in many files</b-button>
       </div> 
          <div id="btnTWO"> 
        <b-button class="btn btn-primary"  :disabled="disableBtn" v-show="show" v-on:click="processFilesForAmplify()">records from file</b-button>
        </div>
          <b-spinner id='spin' type="grow" v-show="okLoad"></b-spinner>
        </div>

    <!-- <div class="prova">      
        <button type="button" v-on:click="saveFile()">saveFile</button>
    </div> -->

  </div>

</template>

<script>

import readXlsxFile from 'read-excel-file'
import {funONEa,funONEmultiFiles,funONEmultiFilesBric, funONEmultiFilesAmplify} from '../xlxsTOjson'
export default {
  name: 'First',
  props: {
    msg: String
  },
  data() {
    return {
      disableBtn:true,
      okLoad:false,
      showSpinner:false,
      idPatient: '',
      BoD: '',
      todos: [] ,
      file1: null, 
      show: true,
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
     async processFilesForAmplify(){
      this.okLoad=true;
      funONEmultiFilesAmplify(this.ro);
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
        this.disableBtn=false;
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
#btn-container{
  border-style:outset;
  display: grid;
   grid-template-rows:80px ;
    grid-template-columns: 25vw 25vw 25vw 15vw;
    grid-template-areas:
    "check btn1 btn2 spin";
    grid-gap:5px;
    align-content: center;
    align-items: center;
}
#checkbox-1{
 
  
  padding: auto;
  grid-area: check;
  margin-top:5px;
  margin-left: 60px;
}
#btnONE{
   margin:auto;
  padding: auto;
  grid-area: btn1;
  margin-top:20px;
  margin-left: 15px;
}
#btnTWO{
   margin:auto;
  padding: auto;
  grid-area: btn2;
  margin-top:20px;
  margin-left: 20px;  
}
#spin{
  margin:auto;
  padding: auto;
  grid-area: spin;
  margin-top:20px;
  margin-left: 0px;  
}
.btn{
width: 150px;
}

</style>
