const start = async () => {
    const message = [
        {
            type: 'text' as const, // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
            value: 'Linebox SPA',
            style: { fontWeight: '700', textAlign: 'start', fontSize: '14px' },
        },

        {
            type: 'text' as const, // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
            value: 'RUT: 77.324.192-3',
            style: { fontWeight: '700', textAlign: 'start', fontSize: '14px' },
        },

        {
            type: 'text' as const, // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
            value: 'Dirección: Av. Diagonal Vicuña Mackenna 2004 1703 Torre D',
            style: { fontWeight: '700', textAlign: 'start', fontSize: '14px' },
        },

        {
            type: 'text' as const, // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
            value: 'Fecha: 03-05-2024 13:26',
            style: { fontWeight: '700', textAlign: 'start', fontSize: '14px' },
        },
        /* {
            type: 'text' as const, // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
            value: 'Linebox',
            style: { fontWeight: '700', textAlign: 'start', fontSize: '20px' },
        }, */

        {
            type: 'table',
            // style the table
            style: { fontSize: '12px' },
            // list of the columns to be rendered in the table header
            tableHeader: ['PROD', 'QTY', '$'],
            // multi dimensional array depicting the rows and columns of the table body
            tableBody: [
                ['PAN', 1, '$1.000'],
                [
                    'Chocolate Chocolate Chocolate Chocolate Chocolate',
                    1,
                    '$2.000',
                ],
            ],
            // list of columns to be rendered in the table footer
            tableFooter: ['Total', '-', '$1.000'],
            // custom style for the table header
            tableHeaderStyle: { color: 'black' },
            // custom style for the table body
            tableBodyStyle: { color: 'black', fontWeight: '700' },
            // custom style for the table footer
            tableFooterStyle: { color: 'black' },
        },

        {
            type: 'text' as const, // 'text' | 'barCode' | 'qrCode' | 'image' | 'table'
            value: 'https://linebox.cl',
            style: {
                fontSize: '10px',
                textAlign: 'start',
                fontWeight: '700',
                color: 'black',
            },
        },
    ]

    const response = await fetch('http://192.168.1.109:5555/api/message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    })

    if (!response.ok) {
        throw new Error('Failed to send message')
    }

    const data = await response.json()
    console.log(data)
}

start()
