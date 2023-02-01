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
        // 'TEST':{
        //     'FIELDS':['TYPE','FIRST','SECOND','patientID'],
        //     'DATA_FILE':[7,8],
        // },
        'Patient':{
            'FIELDS':['centerID','biobankCode','pid','code'],
            'dd74ba73-8a99-41dd-8974-0a6912d3591a':[1,5],
        },
        'Anagraphic':{
            'FIELDS':['type','value','patientID'],
            'SESSO':[149],
            'PESO':[158],
            'ALTEZZA':[157],
            'ANNI COMPIUTI':[154],
            'ETNIA':[18],
            'GRADO DI ISTRUZIONE':[19],
            'OCCUPAZIONE':[17],
            'FUMATORE?':[162],
            'SIGARETTE AL GIORNO':[163],
            'ANNI DA FUMATORE':[164],
            'DA QUANTI ANNI HA SMESSO DI FUMARE':[165],
        },
        'Comorbidities':{
            'FIELDS':['type','value','patientID'],
            'ASMA':[23],
            'DIABETE':[59],
            'PATOLOGIE EPATICHE':[62],
            'PATOLOGIE RENALI':[63],
            'MALATTIE VASCOLARI PERIFERICHE':[64],
            'ULCERA':[65,null],
            'MALATTIE TESSUTO CONNETTIVO':[66],
            'ALTRE MALATTIE':[68],
            'SIBILI AL TORACE':[71],
            'DIAG.COVID19':[126],
            "1 yr probability diagnosis lung cancer during first CT":[263],
        },
        'Anamnesis':{
            'FIELDS':['type','value','period','pharmTreatment','info','patientID'],
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
            'STATO DI SALUTE GENERALE CHE LIMITA LO SVOLGIMENTO DI ATTIVITÀ IMPEGNATIVE':[96,null,null,null],
            'SGRY':[[250,251],248,null,[249,252]],
            'HISTOLOGICAL':[252,248,null,[253,254,255,256]],
            "Stadio_sec_T_8th":[253,248,null,null],
            "Stadio_sec_N_8th":[254,248,null,null],
            "Stadio_sec_M_8th":[255,248,null,null],
            "Stadio_sec_Masaoka_Koga":[256,248,null,null],
        },

        'AnamnesiFamily':{
            'FIELDS':['type','value','deadOfCancer','deadOFHeartAttack','smokerForHwManyYears','patientID'],
            'PARENTE GENERICO':[81,82,null,null,],
            'DONNA IN FAMIGLIA <65 ANNI':[null,null,83,null],
            'UOMO IN FAMIGLIA <65 ANNI':[null,null,84,null],
            'QUALCUNO IN CASA':[null,null,null,89],
        },



        'Drugs':{
            'FIELDS':['type','value','drugsAndDosage','sinceWhen','dosage','dailyDosage','patientID'],
            'TRATTAMENTO FARMACOLOGICO GENERICO':[29,30,null,null,null],
            'TRATTAMENTO FARMACOLOGICO PER ASMA':[23,24,null,null,null],
            'TRATTAMENTO FARMACOLOGICO PER COLESTEROLO':[33,34,null,null,null],
            'ASPIRINA':[37,null,38,39,40],
            'TICLOPIDINA':[41,null,42,43,44],
            'CLOPIDROGEL (PLAVIX)':[45,null,46,47,48],
            'ALTRI FARMACI':[69,70,null,null,null]
        },

        'ClinicalTest':{
            'FIELDS':['type','value','date','info','patientID'],
            "TAC BASALE":[null,128,null],
            "PA (SYS)":[129,128,null],
            "PA (DIA)":[130,128,null],
            "FC (bpm)":[131,128,null],
            "SATURIMETRIA":[132,128,null],
            "CO: (ppm)":[133,128,null],
            "Colesterolo TOT: (mg/dl)":[135,134,null],
            "HDL: (mg/dl)":[136,134,null],
            "LDL: (mg/dl)":[137,134,null],
            "Trigliceridi: (mg/dl)":[138,134,null],
            "FEV1(%)":[139,128,null],
            "FVC":[140,128,null],
            "FEV1(l)":[141,128,null],
            "FVC(l)":[142,128,null],
            "PEF(l/min)":[143,128,null],
            "Ratio (FEV1/FVC):144":[144,128,null],
            "TEST MOTIVAZIONALE":[146,128,null],
            "TEST DIPENDENZA":[147,128,null],
           // "Apollo/eNCIRCLeD":[148,128,null],
            "BMI":[156,128,null],
            "%PLCO":[166,128,null],
            "Pack-Years":[167,128,null],
            "LUNG: Lymph nodes":[186,128,null],
            "LUNG: COPD":[187,128,null],
            "LUNG: Fibrosis":[188,128,null],
            "LUNG: Pleural Effusion":[189,128,null],
            "LUNG: Other":[190,128,null],
            "HEART: Coronary Calcification":[191,128,null],
            "Enfisema":[192,128,193],
            "CTDI vol(mGy)":[194,128,null],
            "PLCO/6%/ 1yrs":[195,128,null],
            "VISCHT":[null,196,null],
            "Rischio alla BASALE":[197,128,null],
            "Rischio alle SUCCESSIVE":[198,128,null],
            "PET_RESULT":[245,244,null],
            "BIO_RESULT":[247,246,null],
           // "SGRY_DATE":[null,248,null],
        },
        'ImagingTest':{
            'FIELDS':['Description','date','anoncode','patientID'],
            'TAC_Basale':[128,257],
            '1 FUP':[200,258],
            '2 FUP':[215,259],
            '3 FUP':[230,260],
        },
        'ImagingTestFinding':{
            'FIELDS':['info','date','noduleCount','posProb','LongAxis','ShortAxis','MaxDiam','VolTot','consistenzaNodulo','bordiReg','CalcificazioneBenign','FormaSpiculata','noduloVistoInSerie','noduloVistoInImmagine','VDT','status','change','imagingTestID'],
            'TAC_Basale':[128,168,171,172,173,174,175,180,181,182,183,184,185,null,null,null],
            '1_FUP':[200,168,202,203,204,205,206,207,null,null,208,209,210,211,212,213],
            '2_FUP':[215,168,217,218,219,220,221,222,null,null,223,224,225,226,227,228],
            '3_FUP':[230,168,232,233,234,235,236,237,null,null,238,239,240,241,242,243],
        }
    }
}


//this function is used to delete the keys of a specific table
function deleteKeyInMaskDB(){
    return {
        'ImagingTestFinding':['info','date']
    }
}
function nodulesMaskDB(){
    return {
        
            'COUNT':[168],
            'DATE':[128,200,215,230],
            'PROB.POS':[171,202,217,232],
            'LONG_AXIS':[172,203,218,233],
            'SHORT_AXIS':[173,204,219,234],
            'MAX_DIAM':[174,205,220,235],
            'CONSISTENZA_NODULO':[180,207,222,237],
            'FORMA_SPICULATA':[183,208,223,238],
            'NODULO_VISTO_IN_SERIE':[184,209,224,239],
            'NODULO_VISTO_IN_IMMAGINE':[185,210,225,240],
            'PLCO_6yrs':[166],
            'PLCO_1yrs':[195],
            'VSCHT':[196],
            'Rischio_alla_BASALE':[197],
            'Rischio_alle_SUCCESSIVE':[198],
            'VDT':[null,211,226,241],
            'STATUS':[null,212,227,242],
            'CHANGE_VOLtot_percent':[null,213,228,243],
            'PET_DATE':[244],
            'PET_RESULT':[245],
            'BIO_DATE':[244],
            'BIO_RESULT':[245],
            "MALIGNO_MALIGNO_COLLATERALE_MALIGNO_SECONDARY":[249],
            "SGRY_DATE":[248],
            "SRGY_APPROACH":[250],
            "TYPE_RESECTION":[251],
            "NOTE":[252],
            "Stadio_sec_T_8th":[253],
            "Stadio_sec_N_8th":[254],
            "Stadio_sec_M_8th":[255],
            "Stadio_sec_Masaoka_Koga":[256],

    }
}
export {databaseStructure,maskDB,nodulesMaskDB,deleteKeyInMaskDB}