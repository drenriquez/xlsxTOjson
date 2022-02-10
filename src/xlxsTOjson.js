//import fs from'fs'
import path from 'path'
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
    console.log(ro.length);
    let numberExams=0;
    let cont=0;
    for (let i=1;i<ro.length;++i){
        console.log(ro[i][0]);
        // let nod=0;
        //let bioCode="TEST";
        
        let formValue={};
        let examsValue={};
        let listExams=[];        
        if (ro[i][0]){
            cont=0;
           // bioCode=ro[i][1];
            console.log("***");
            for (let j=1;j<128;++j){
                //console.log(j)
                formValue[ro[0][j]]=ro[i][j];
            }
            for(let j=128;j<271;++j){
                examsValue[ro[0][j]]=ro[i+numberExams][j];

            }
            listExams.push(examsValue);
            console.log(examsValue)
            //DATASET[ro[0][1].toString()]=ro[i][0]
            DATASET[ro[i][0].toString()]={
               
                form:formValue,
                exams:listExams
            }
        }
        else if (!ro[i][0] && (ro[i][180]||ro[i][201])) {
            ++cont;
            console.log(cont)
            console.log(i)
            console.log(DATASET[ro[i-cont][0].toString()]["exams"])
            for(let j=128;j<271;++j){
                examsValue[ro[0][j]]=ro[i+numberExams][j];
            }
            DATASET[ro[i-cont][0].toString()]["exams"].push(examsValue)
            
        }
        console.log(DATASET)
    }
   

    //alert('chiamata funONEa')
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



//module.exports.funONE=funONE
export default funONEa; funONE; funONE2
/*pretty printing
json
serializer json-
https://stackoverflow.com/questions/4810841/pretty-print-json-using-javascript

*/