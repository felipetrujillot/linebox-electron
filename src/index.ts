import { app, BrowserWindow } from 'electron'
import pkg from 'electron-pos-printer'
const { PosPrinter } = pkg
const printer = () => {
    const options = {
        preview: false,
        margin: '0 0 0 0',
        copies: 1,
        printerName: 'XP-58',
        boolean: true,
        timeOutPerLine: 400,
        pageSize: '58mm' as const, // page size
    }

    const data = [
        {
            type: 'text' as const, // 'text' | 'barCode' | 'qrCode' | 'image' | 'table'
            value: 'Secondary text',
            style: {
                textDecoration: 'underline',
                fontSize: '10px',
                textAlign: 'center',
                color: 'red',
            },
        },
    ]

    PosPrinter.print(data, options)
        .then(console.log)
        .catch((error) => {
            console.error(error)
        })
}

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })

    win.loadFile('../index.html')

    printer()
}

app.whenReady().then(() => {
    createWindow()
})
