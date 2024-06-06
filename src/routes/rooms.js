export async function getRooms() {
    
    let response = await fetch('http://192.168.1.3:3000/rooms.json', {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    try {
        console.log(response);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        response = response.json();
    }
    catch (error) { console.log(error); };

    return response;
}