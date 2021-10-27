const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', createBrowserWindow)

function createBrowserWindow() {
  mainWindow = new BrowserWindow({
    window: 800,
    height: 600,
  });

  mainWindow.loadFile('index.html');
}