const { app, BrowserWindow, Menu } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1024,
    minHeight: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      sandbox: true
    },
    icon: path.join(__dirname, '../assets/icon.png')
  });

  // Załaduj aplikację
  const startUrl = isDev
    ? 'http://localhost:3000' // Development
    : `file://${path.join(__dirname, '../build/index.html')}`; // Production

  mainWindow.loadURL(startUrl);

  // DevTools w development
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Obsługa błędów ładowania
  mainWindow.webContents.on('did-fail-load', () => {
    mainWindow.loadURL(startUrl);
  });
}

// Utwórz okno gdy aplikacja jest gotowa
app.on('ready', createWindow);

// Wyjdź gdy wszystkie okna są zamknięte (Windows & Linux)
app.on('window-all-closed', () => {
  // macOS utrzymuje aplikację aktywną aż do Cmd+Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // macOS - odtwórz okno gdy aplikacja zostanie aktywowana
  if (mainWindow === null) {
    createWindow();
  }
});

// Menu aplikacji
const template = [
  {
    label: 'Plik',
    submenu: [
      {
        label: 'Wyjście',
        accelerator: 'CmdOrCtrl+Q',
        click: () => {
          app.quit();
        }
      }
    ]
  },
  {
    label: 'Edycja',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' }
    ]
  },
  {
    label: 'Widok',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  {
    label: 'Pomoc',
    submenu: [
      {
        label: 'O Aplikacji',
        click: () => {
          const { dialog } = require('electron');
          dialog.showMessageBox(mainWindow, {
            type: 'info',
            title: 'CzasPhishingEdu v1.0.0',
            message: 'Edukacyjna aplikacja o phishingu',
            detail: 'Autor: Marek Piłat\n\nAplikacja edukacyjna do nauki o bezpieczeństwie online.\n\nWszystkie scenariusze są symulowane i bezpieczne.',
            buttons: ['OK']
          });
        }
      }
    ]
  }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

// Obsługa błędów uncaught
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

app.on('will-quit', () => {
  // Posprzątaj
});
