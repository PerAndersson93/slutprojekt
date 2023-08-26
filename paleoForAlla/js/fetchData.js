export async function fetchData() {
    return fetch('https://pixabay.com/api/?key=39003829-1f9f7f3a32ba0229e81311979&q=paleo+meal&image_type=photo')
        .then(function (response) {
            return response.json();
        })
}

export async function extraktRandomImageFromData(tmp){
    var min = 0;
    var max = Math.floor(tmp.total);
    var randomValue = Math.floor(Math.random() * (max - min) + min);
    return JSON.parse(JSON.stringify(tmp.hits[randomValue].webformatURL));
}

export function insertImageInPage(imageUrl){
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.alt = 'Dagens exempel på en paleorätt';
    imageElement.width = 500;
    document.body.appendChild(imageElement);
}