//import fs from'fs'
import {databaseStructure,maskDB} from './dbSchema';
//import path from 'path'
const { ipcRenderer } = require("electron");
const path = require('path')
//const {app} = require("electron")
//const fs = require('fs');

let funONE2=function (array){
    console.log(array[1][0])
    console.log(path.dirname)
    // var dict = {"one" : [15, 4.5],
    // "two" : [34, 3.3],
    // "three" : [67, 5.0],
    // "four" : [32, 4.1]};
    // var dictstring = JSON.stringify(dict);

    // writeFile("thingTREE.json", dictstring, function(err) {
    //     if(err) console.log('error', err);
    //});
    //console.log(fs);

        

}
let funONE=function (dict){
    //const data = JSON.stringify(array)
    // let dict = {"one" : [15, 4.5],
    // "two" : [34, 3.3],
    // "three" : [67, 5.0],
    // "four" : [32, 4.1]};
    let data = JSON.stringify(dict);
    

    const fs = require('fs');
    console.log(fs);
    try { fs.writeFile('prova.txt', data, 'utf-8'); }
    catch(e) { alert('Failed to save the file !'); }
    
}

let funONEa=function(ro) {
    let DATASET={};
    let numberExams=0;
    let cont=0;
    for (let i=1;i<ro.length;++i){      
        let formValue={};
        let examsValue={};
        let listExams=[];        
        if (ro[i][0]){
            cont=0;
          
            for (let j=1;j<128;++j){
                
                formValue[ro[0][j]]=ro[i][j];
            }
            for(let j=128;j<271;++j){
                examsValue[ro[0][j]]=ro[i+numberExams][j];

            }
            listExams.push(examsValue);
           
            DATASET[ro[i][0].toString()]={               
                form:formValue,
                exams:listExams
            }
        }
        else if (!ro[i][0] && (ro[i][180]||ro[i][201])) {
            ++cont;
            for(let j=128;j<271;++j){
                examsValue[ro[0][j]]=ro[i+numberExams][j];
            }
            DATASET[ro[i-cont][0].toString()]["exams"].push(examsValue)
            
        }
    }
    const data = JSON.stringify(DATASET,null,'\t');
    console.log(data);
    const blob = new Blob([data], {type: 'text/plain'})
    const e = document.createEvent('MouseEvents'),
    a = document.createElement('a');
    a.download = "TEST.json";
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
}

async function funONEmultiFiles(ro) {
    let DATASET={};
    let numberExams=0;
    let cont=0;
    let listPatients=[];
    for (let i=1;i<ro.length;++i){       
        let formValue={};
        let examsValue={};
        let listExams=[];        
        if (ro[i][0]){
            cont=0;
            listPatients.push(ro[i][0])           
            for (let j=1;j<128;++j){             
                formValue[ro[0][j]]=ro[i][j];
            }
            for(let j=128;j<271;++j){
                examsValue[ro[0][j]]=ro[i+numberExams][j];
            }
            listExams.push(examsValue);        
            DATASET[ro[i][0].toString()]={              
                form:formValue,
                exams:listExams
            }
        }
        else if (!ro[i][0] && (ro[i][180]||ro[i][201])) {
            ++cont;
            for(let j=128;j<271;++j){
                examsValue[ro[0][j]]=ro[i+numberExams][j];
            }
            DATASET[ro[i-cont][0].toString()]["exams"].push(examsValue)
            
            
        }
        
    }
    let sendTEST=DATASET;
    ipcRenderer.send("hello", sendTEST,listPatients,false); 
}

async function funONEmultiFilesBric(ro) {
    let datStr=databaseStructure();
    let DATASET={};
    let numberExams=0;
    let cont=0;
    let listPatients=[];
    let numberTab= Object.entries(datStr).length;
    console.log(numberTab);

    for (let i=1;i<ro.length;++i){       
        let examsValue={};
        let listExams=[];        
        if (ro[i][0]){
            cont=0;
            listPatients.push(ro[i][0])
            DATASET[ro[i][0].toString()]={};
            //this processes all fields except the last one
            for(let y=0;y<numberTab-1;++y){                
                let list ={}
                for(let x of Object.entries(datStr)[y][1]){
                    list[ro[0][x]+x]=ro[i][x];
                }              
                DATASET[ro[i][0].toString()][Object.entries(datStr)[y][0]]=list                
            }
            //this processes the last field of the dataset, because it is on multiple lines
            for(let j of Object.entries(datStr)[numberTab-1][1]){
                examsValue[ro[0][j]]=ro[i+numberExams][j];
            }
            listExams.push(examsValue);        
            DATASET[ro[i][0].toString()][Object.entries(datStr)[numberTab-1][0]]=listExams

        }
        //line skip but by the same patient
        else if (!ro[i][0]) {
            ++cont;
            for(let j of Object.entries(datStr)[numberTab-1][1]){
                examsValue[ro[0][j]]=ro[i+numberExams][j];
            }
            DATASET[ro[i-cont][0].toString()][Object.entries(datStr)[numberTab-1][0]].push(examsValue)            
            
        }
        
    }
    let sendTEST=DATASET;
    ipcRenderer.send("hello", sendTEST,listPatients,true); 
}

async function funONEmultiFilesAmplify (ro){
    let dbMask=maskDB();
    let allRecordsObject={}; //conterrà oggetti js per ogni tavola in dbMask,ed ogni lista ogetti records
    //let code_patient=null;
    // let numberTables=Object.entries(dbMask).length;
    // console.log(numberTables);

    //to generate lists of objects for every Tables maskDB
    for(let tab in dbMask){
        allRecordsObject[tab]=[]
        console.log( allRecordsObject);
    }

    for (let i=1;i<ro.length;++i){
       
        if (ro[i][0]){
            //code_patient=ro[i][0];
            let ListValueFieldsInExls=[];
            for (let j=0;j<170;++j){
                ListValueFieldsInExls.push(ro[i][j])

            }
            console.log(ListValueFieldsInExls)
            for(let tab in dbMask){ //questo scorre tra : COMORBIDITIES, ANAMNESIS, ECC
                //let newRecord={};

                // console.log(tab)
                // allRecordsObject[tab].push(i)

                //console.log(dbMask[tab]['FIELDS'])
                //let numberOfTypePerTable=Object.entries(dbMask[tab]).length;
                let numberOfFieldPerRecord=dbMask[tab]['FIELDS'].length //AD ESEMPIO 3 per COMORDIDITIES
                console.log(numberOfFieldPerRecord)


                for(let y in dbMask[tab]){//RESTITUISCE le INTESTAZIONI DEI CAMPI per ogni tab-ESEMPIO FIELDS,ASMA,DIABETE ecc
                    if (y==='FIELDS'){continue}
                    
                    console.log(y)
                    let newRecord={};
                    for(let w=0;w <numberOfFieldPerRecord-1;++w ){
                        if (w===0){newRecord[dbMask[tab]['FIELDS'][w]]=y}
                        else{
                            console.log(dbMask[tab]['FIELDS'][w])
                            if(dbMask[tab][y][w-1]===null){
                                newRecord[dbMask[tab]['FIELDS'][w]]=null
                            }
                            else{
                                newRecord[dbMask[tab]['FIELDS'][w]]=ListValueFieldsInExls[dbMask[tab][y][w-1]]
                            }
                        }
                    }
                    newRecord['PID']=ro[i][0]
                    console.log(newRecord);
                    allRecordsObject[tab].push(newRecord)
                }
                
            }
          




        }
    }
    console.log(allRecordsObject)
    ipcRenderer.send("singleRecords", allRecordsObject,true); 

    // for (let i=1;i<ro.length;++i){      //ro.length are the number of rows
    //     code_patient=ro[i][0];
    //     if (ro[i][0]){    //NEW ROW => NEW PATIENT
                         
    //     }
        






    // }





}


//module.exports.funONE=funONE
export  {funONEmultiFiles,funONEmultiFilesBric, funONEmultiFilesAmplify,funONE, funONE2, funONEa}
/*pretty printing
json
serializer json-
https://stackoverflow.com/questions/4810841/pretty-print-json-using-javascript

*/