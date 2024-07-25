/*
 * Helper functions shared between components
 */

// Enum for HTTP methods
export enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export const request = async (url: string, method: Method, body?: any) => {
    try {
        console.log('request', url, method, body)
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        return response.json();
    } catch (error) {
        console.error(error);
    }
}
