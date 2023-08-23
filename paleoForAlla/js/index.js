export async function fetchData() {
    return fetch('https://pixabay.com/api/?key=39003829-1f9f7f3a32ba0229e81311979&q=paleo+meal&image_type=photo')
        .then(function (response) {
            return response.json();
        })
}

async function randomize(){
    var tmp = await fetchData();

    var min = 0;
    var max = Math.floor(tmp.total);
    var randomValue = Math.floor(Math.random() * (max - min) + min);

    return JSON.stringify(tmp.hits[randomValue].webformatURL)
}


fetchAndDisplayImage();
  


async function fetchAndDisplayImage() {

    var tmp = await randomize();
    const imageUrl = JSON.parse(tmp);
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.alt = 'Daily example of a paleo meal';
    document.body.appendChild(imageElement);
}