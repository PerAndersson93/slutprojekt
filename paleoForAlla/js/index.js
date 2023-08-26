import * as helpFunctions from './fetchData.js';


async function fetchAndDisplayImage() {
    var rawData = await helpFunctions.fetchData();
    const imageUrl = await helpFunctions.extraktRandomImageFromData(rawData);
    helpFunctions.insertImageInPage(imageUrl);
}


if (window.location.pathname == '/index.html' || window.location.pathname == '/' )
    fetchAndDisplayImage();

