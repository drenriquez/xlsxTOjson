function databaseStructure(){
    return {
        'GEN_INF':[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,150,151,152,153,154,156,127],
        'ANAMNESIS':[20,21,22,25,26,27,28,31,32,33,35,36,49,50,51,52,53,54,55,56,57,58,75,76,77,79,85,86,87,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,146],
        'COMORDIDITIES':[23,59,60,61,62,63,64,65,66,67,68,71,72,73,74,126],
        'DRUGS':[29,24,30,34,37,38,39,40,41,42,43,44,45,46,46,47,48,69,70],
        'ANAMNESI_FAMILY':[81,82,83,84,88,89],
        'CLINICAL_TEST':[128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,146,147,148,152,153,156,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270]                                                                                        
    };
}



function maskDB(){
    return {
        'COMORDIDITIES':{
            'FIELDS':['TYPE','VALUE','PID'],
            'ASMA':23,
            'DIABETE':59,
            'PATOLOGIE EPATICHE':62,
            'PATOLOGIE RENALI':63,
            'MALATTIE VASCOLARI PERIFERICHE':64,
            'ULCERA':65,
            'MALATTIE TESSUTO CONNETTIVO':66,
            'ALTRE MALATTIE':68,
            'SIBILI AL TORACE':71,
            'DIAG.COVID19':126,
            "1 yr probability diagnosis lung cancer during first CT":263
        },
        'ANAMNESIS':{
            'FIELDS':['TYPE','VALUE','PERIOD','PHARM-TREATMENT.','INFO','PID'],
            'TUMORE DIAGNOSTICATO':[20,21,null,22],
            'POLMONITE':[25,null,null,null],
            'ENFISEMA O BPCO':[26,null,null,null],
            'IPERTENSIONE':[27,28,null,null,null],
            'ALTI VALORI DI COLESTEROLO':[31,32,33,null],
            'INFARTO MIOCARDICO':[35,36,null,null],
            'INTERVENTO DI ANGIOPLASTICA O STENT DELLE ARTERIE CORONARICHE':[49,50,null,null],
            'INTERVENTO DI BYPASS DELLE ARTERIE CORONARICHE':[51,52,null,null],
            'ANGINA':[53,54,null,null],
            'ICTUS':[55,56,null,null],
            'INSUFFICIENZA CARDIACA':[57,58,null,null],
            'MALATTIE POLMONARI RILEVANTI ULTIMI 3 ANNI':[75,null,null,null],
            'MOLTEPLICI MALATTIE POLMONARI RILEVANTI NEGLI ULTIMI 3 ANNI':[77,null,null,null],
            'TEST DI FUNZIONALITÀ POLMONARE NEGLI ULTIMI 5 ANNI':[79,null,null,null],
            "ESPOSIZIONE ALL'AMIANTO":[85,86,null,null],
            'CONVIVANZA CON FUMATORE':[90,null,null,null],
            'FUMATORE':[null,91,null,null],
            'CONSUMA 3 PPOSZIONI DI FRUTTA O VERDURA AL GIORNO':[92,null,null,null],
            'CONSUMO GIORNALIERO DI ALCOL':[93,null,null,null],
            'AUTOVALUTAZIONE STATO DI SALUTE':[94,null,null,null],
            'STATO DI SALUTE GENERALE CHE LIMITA LO SVOLGIMENTO DI ATTIVITÀ MODERATE':[95,null,null,null],
            'STATO DI SALUTE GENERALE CHE LIMITA LO SVOLGIMENTO DI ATTIVITÀ IMPEGNATIVE':[96,null,null,null]
        },

        'FAMILY_ANAMNESIS':{
            'FIELDS':['TYPE','VALUE','DEAD OF CANCER','DEAD OF A HEART ATTACK','SMOKER FOR HOW MANY YEARS','PID'],
            'PARENTE GENERICO':[81,82,null,null,],
            'DONNA IN FAMIGLIA <65 ANNI':[null,null,83,null],
            'UOMO IN FAMIGLIA <65 ANNI':[null,null,84,null],
            'QUALCUNO IN CASA':[null,null,null,89],
        },



        'DRUGS':{
            'FIELDS':['TYPE','VALUE','PERIODO','TRAT-FARM','INFO','PID'],
            'TRATTAMENTO FARMACOLOGICO GENERICO':[29,30,null,null,null],
            'TRATTAMENTO FARMACOLOGICO PER ASMA':[23,24,null,null,null],
            'TRATTAMENTO FARMACOLOGICO PER COLESTEROLO':[33,34,null,null,null],
            'ASPIRINA':[37,null,38,39,40],
            'TICLOPIDINA':[41,null,42,43,44],
            'CLOPIDROGEL (PLAVIX)':[45,null,46,47,48],
            'ALTRI FARMACI':[69,70,null,null,null]
        },

        'CLINICAL_TEST':{
            'FIELDS':['TYPE','VALUE','DATE','INFO','PID'],
            "PA (SYS)":[129,128,null,null],//CONROLLARE SE LA DATA CORRISPONDE A QUELLA DELLA TAC BASALE
            "PA (DIA)":[130,128,null,null],
            "FC (bpm)":[131,128,null,null],
            "SATURIMETRIA":[132,128,null,null],
            "CO: (ppm)":[133,128,null,null],
            "Colesterolo TOT: (mg/dl)":[135,134,null,null],
            "HDL: (mg/dl)":[136,134,null,null],
            "LDL: (mg/dl)":[137,134,null,null],
            "Trigliceridi: (mg/dl)":[138,134,null,null],
            "FEV1(%)":[139,134,null,null],
            "FVC":[140,134,null,null],
            "FEV1(l)":[141,134,null,null],
            "FVC(l)":[142,134,null,null],
            "PEF(l/min)":[143,134,null,null],
            "Ratio (FEV1/FVC):144":[144,134,null,null],
            "BMI":[156,128,null,null],
            "%PLCO":[166,128,null,null],
            "Pack-Years":[167,128,null,null],
            //"Nodule Count":[168,128],//
            "Total Nodules":[169,128,null,null]
            // "New Nodule":[170,128],//QUESTO FA PARTE DEI CLINICAL_TEST_FINDING
            // "posizioneprobabile":[171,128],//QUESTO FA PARTE DEI CLINICAL_TEST_FINDING




            

        }
    }








}

export {databaseStructure,maskDB}