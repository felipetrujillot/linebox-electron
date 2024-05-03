import pkg from 'electron-pos-printer'
const { PosPrinter } = pkg

export const newPrint = (data: any) => {
    const options = {
        preview: true,
        margin: '0 30px 0 0',
        copies: 1,
        printerName: 'XP-58',
        boolean: true,
        timeOutPerLine: 400,
        pageSize: '58mm' as const, // page size
    }

    /* const data = [
        {
            type: 'text' as const, // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
            value: 'SAMPLE HEADING',
            style: { fontWeight: '700', textAlign: 'center', fontSize: '24px' },
        },
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
    ] */

    PosPrinter.print(data, options)
        .then(console.log)
        .catch((error) => {
            console.error(error)
        })
}
