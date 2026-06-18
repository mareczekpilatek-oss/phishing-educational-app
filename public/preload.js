const { contextBridge, ipcRenderer } = require('electron');

// Bezpieczne API dla renderer process
contextBridge.exposeInMainWorld('electron', {
  version: process.versions.electron,
  platform: process.platform,
  arch: process.arch,
  
  // Dodatowe API jeśli potrzebne
  send: (channel, data) => {
    ipcRenderer.send(channel, data);
  },
  
  on: (channel, func) => {
    ipcRenderer.on(channel, (event, ...args) => func(...args));
  }
});
