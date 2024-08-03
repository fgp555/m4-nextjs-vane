

export const RegisterFetch = async (url: string, register: {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(register)
    });

    if (!response.ok) {
        throw new Error('Error en la solicitud: prueba otro mail');
    }

    return response.json();
};