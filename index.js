const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Crea la ventana del navegador.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    // minHeight: 400,
    // minWidth: 700,
    // maxHeight: 400,
    // maxWidth:700,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // y carga el  index.html de la aplicación.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)