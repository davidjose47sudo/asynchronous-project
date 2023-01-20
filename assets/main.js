const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC3aj05GEEyzdOqYM5FLSFeg&part=snippet%2Cid&order=date&maxResults=10'
const API2 = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCmHv37aBniCJK0ihYmHDqAg&part=snippet%2Cid&order=date&maxResults=10'

const content = null || document.getElementById('content');
const content2 = null || document.getElementById('content2');
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0a9cd4eae9mshca8f0dede198c91p18b769jsn0123e9820952',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchdata(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json();
    return data
}

(async () => {
    try {
        const videos = await fetchdata(API);
        let view = `
        ${videos.items.map(video => `
          <div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
              </h3>
            </div>
          </div>
        `)}
        `;
    content.innerHTML = view;
    } catch (error) {
        console.log(error);
        alert(`upss hubo un error: ${error}`)
    }
})();

(async () => {
    try {
        const videos = await fetchdata(API2);
        let view =`
        ${videos.items.map(videos =>`
    <div class="group relative">
        <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${videos.snippet.thumbnails.high.url}" alt="${videos.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${videos.snippet.title}
            </h3>
        </div>
    </div>
    `)}`;
    content2.innerHTML = view;
    } catch (error) {
        console.log(error);
        alert(`upss hubo un error: ${error}`)
    }
})();