'use strict'
//const fs =require('electron')
const fs = require('fs');
const path = require('path')
import { app, protocol, BrowserWindow, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
//const { ipcMain} = require('electron');
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 820,
    height: 700,
    webPreferences: {
      
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      //preload: path.join(__dirname, 'preload.js'),
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
ipcMain.on('hello', (_event, value,listPatients,bric=false) => {
  //console.log(value) // will print value to Node console



  for (let pat of listPatients){
    savePatient(value[pat],pat,bric);
  }
 
//  fs.writeFile(`${app.getPath("downloads")}/PROVA.json`, dataOne, function (err) {
//   if (err) throw err;               console.log('Results Received');
// }); 

})
function savePatient(objJSON,name,bric=false){
  const dataOne = JSON.stringify(objJSON,null,'\t');
  let dirPatients='';
  if(bric){
    dirPatients="PATIENTSinBRIC";
  }
  else{
    dirPatients="PATIENTSinHSR"
  }
  const pathDownload=path.join(app.getPath("downloads"), dirPatients)
  //make directory or check if it exist
  if(!fs.existsSync(pathDownload)){
    fs.mkdirSync(pathDownload) 
    };
  //console.log(dataOne);
  fs.writeFile(`${pathDownload}/${name.toString()}.json`, dataOne, function (err) {
  if (err) throw err;          
}); 
}


