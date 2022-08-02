export var CreateBunny = async (values) => {
    return await fetch(`http://localhost:4000/Bunny/Create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    })
        .then(response => response.json())
        .then(data => console.log(data))
}

export var ProfileData = async () => {
    return await fetch("http://localhost:4000/Bunny/ProfileData", { credentials: "include" })
        .then(response => response.json())
        .then(data => { return data; })
}

export var EditPersonalInfo = async (values) => {
    return await fetch("http://localhost:4000/Bunny/Edit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(values)
    })
        .then(response => response.json())
        .then(data => { return data })
}

export var ReturnUser = async () => {
    return await fetch("http://localhost:4000/User/ReturnUser", { credentials: "include" })
    .then(response => response.json())
    .then(data => { return data; })
}