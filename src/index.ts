import { app, BrowserWindow } from 'electron'
import server from './server.js'
import { newPrint } from './print.js'

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })

    win.loadFile('../index.html')

    //newPrint(message)
    const ipAddress = '192.168.1.109'

    const port = 5555

    server.listen(port, ipAddress, () => {
        console.log(`Express server running on http://localhost:${port}`)
    })
    //printer()
}

app.whenReady().then(() => {
    createWindow()
})
