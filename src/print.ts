import pkg from 'electron-pos-printer'

const { PosPrinter } = pkg

export const newPrint = (data: any) => {
    const options = {
        preview: false,
        margin: '0 30px 0 0',
        copies: 1,
        printerName: '',
        silent: true,
        boolean: true,
        timeOutPerLine: 400,
        pageSize: '58mm' as const, // page size
    }

    PosPrinter.print(data, options)
        .then(console.log)
        .catch((error) => {
            console.error(error)
        })
}
