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