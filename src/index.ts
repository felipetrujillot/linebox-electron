import { app, BrowserWindow } from 'electron'
import server from './server.js'

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })

    win.loadFile('../index.html')
    const ipAddress = '192.168.1.109' // Replace 'YOUR_IP_ADDRESS' with your actual IP address

    const port = 5555

    server.listen(port, ipAddress, () => {
        console.log(`Express server running on http://localhost:${port}`)
    })
    //printer()
}

app.whenReady().then(() => {
    createWindow()
})
