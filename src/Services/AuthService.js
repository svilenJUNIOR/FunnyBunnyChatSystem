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
        .then(data => { return data })
}

export var ChangeToken = async () => {
    return await fetch('http://localhost:4000/User/ChangeToken', { credentials: "include" })
        .then(response => response.json())
        .then(token => { return token })
}

export var ReturnUser = async (values) => {
    return await fetch('http://localhost:4000/User/TakeById', {
        credentials: "include",
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(values)
    })
        .then(response => response.json())
        .then(user => { return user })
}