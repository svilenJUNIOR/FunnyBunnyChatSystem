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

export var ReturnBunny = async () => {
    return await fetch("http://localhost:4000/Bunny/ReturnBunny", { credentials: "include" })
    .then(response => response.json())
    .then(data => { return data; })
}

export var SaveMessage = async (values) => {
    return await fetch("http://localhost:4000/Bunny/SaveMessage", {
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

export var ReturnMessages = async (values) => {
    return await fetch("http://localhost:4000/Bunny/ReturnMessages", {
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

export var AddFriend = async (value) => {
    return await fetch("http://localhost:4000/Bunny/AddFriend", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(value)
    })
        .then(response => response.json())
        .then(data => { return data })
}