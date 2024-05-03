const start = async () => {
    const message = [
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
    ]

    const response = await fetch('http://localhost:5555/api/message', {
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
