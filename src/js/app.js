import axios from './axios'

axios.create({
        baseURL: "https://jsonplaceholder.typicode.com",
        // headers: {
        //     content: 'Content-Type',
        //     type:"application/x-www-form-urlencoded"
        // }
    })

// axios.interceptors( function () {

//     console.log('interceptors data')

// } )




axios.get('/todos/1').then((res) => { console.log("get:", res) }).catch(err => { console.log(err) })


let post = {
    userId: 1,
    id: 1,
    title: "New Post",
    body: "new Posts text"
}

axios.post('/posts', post ).then((res) => { console.log("post:", res) }).catch(err => { console.log(err) })

axios.put('/posts/1', post ).then((res) => { console.log("put:", res) }).catch(err => { console.log(err) })

axios.delete('/posts/1', post ).then((res) => {  console.log("delete:", res) }).catch(err => { console.log(err) })
