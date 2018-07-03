// let test = () => console.log("Hello Vijay");

// test();

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
}

getPosts().then(d => console.log(d));