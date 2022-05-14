console.log('So here is the starting point...');
const axios = require('axios');

const link = 'http://localhost:3000/';

getAll = async (route) => {
    try {
        const res = await axios.get(link + route);
        console.log(`${res.status} ${res.statusText}`);
        console.log(res.data);
    } catch (err) {
        console.log(err.message);
    }
}

newPost = async (route, dataP) => {
    try {
        const res = await axios.post(link + route, dataP);
        console.log(`${res.status} ${res.statusText}\n${res.data}`);
    } catch (err) {
        console.log(err.message);
    }
}

updatePost = async (route, id, dataP) => {
    try {
        const res = await axios.patch(link + route + '/' + id, dataP);
        console.log(`${res.status} ${res.statusText}\n${res.data}`);
    } catch (err) {
        console.log(err.message);
    }
}

changePost = async (route, id, dataP) => {
    try {
        const res = await axios.put(link + route + '/' + id, dataP)
        console.log(`${res.status} ${res.statusText}`);
    } catch (err) {
        console.error(err.message);
    }
}

deletePost = async (route, id) => {
    try {
        // const resDelData = await axios.get(link + )
        const res = await axios.delete(link + route + '/' + id)
        console.log(`${res.status} ${res.statusText}`);
    } catch (err) {
        console.error(err.message);
    }
}

