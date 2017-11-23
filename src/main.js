const electron = require('electron')
const path = require('path')
const url = require('url')

const { app, BrowserWindow } = electron

let window

app.on('ready', () => {
    window = new BrowserWindow({
        width: 400,
        height: 799
    })

    window.loadURL(url.format({
        pathname: path.join(__dirname, 'html/index.html'),
        protocol: 'file',
        slashes: true
    }))

    window.on('close', () => {
        window = null
    })
})