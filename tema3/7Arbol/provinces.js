async function getData(url) {
    return fetch(url).then(res => res.json());
}

const data = await getData('arbol.json');
console.log(data);