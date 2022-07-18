export var CreateBunny = async (values, userId) => {
    return await fetch("http://localhost:4000/Bunny/Create/" + userId, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    })
    .then(response => response.json())
    .then(data => console.log(data))
}