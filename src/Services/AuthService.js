export var Login = async (values) => {

    return await fetch("http://localhost:4000/User/Login", {
        credentials: 'include',
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    })
        .then(response => response.json())
        .then(data => console.log(data))
}

export var Verify = async () => {
    return await fetch('http://localhost:4000/User/Verify', {credentials: "include"})
        .then(response => response.json())
        .then(token => {return token})
}