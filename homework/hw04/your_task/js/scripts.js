const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/879c7106422b0b53852209da6a63210be7e09b01?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    document.querySelector('#tracks').innerHTML = "";
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);
    console.log('about to fetch!');
    fetch('https://www.apitutor.org/spotify/simple/v1/search?type=track&limit=5q=' + term)
        .then(response => response.json())
        .then(tracks => {
            console.log(tracks);
            if (tracks.length === 0) {
                document.querySelector('#tracks').innerHTML +=`
                    <p>No tracks found for "${track.name}"</p>
                `;
            }
            for (const track of tracks) {
                document.querySelector('#tracks').innerHTML +=`
                <button class="track-item preview" data-preview-track="${track.preview_url}">
                <img src="${track.artist.image_url}">
                <i class="fas fa-play play-track" aria-hidden="true"></i>
                <div class="label">
                    <h2>${track.name}</h2>
                    <p>
                        ${track.artist.name}
                    </p>
                </div>
            </button>
                `;
            }
        });
};

const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
};

const getArtist = (term) => {
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);
    const elem = document.querySelector('#artist');
    elem.innerHTML = ""; 
    fetch(baseURL + "?type=artist&q=" + term)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
            const firstArtist = data[0];
            elem.innerHTML += getArtistHTML(firstArtist);
            }
        })
};

const getArtistHTML = (data) => {
    // if (!data.image_url){

    // }
    return `
    <section class="artist-card" id="${data.id}">
    <div>
        <img src="${data.image_url}">
        <h2>${data.name}</h2>
        <div class="footer">
            <a href="${data.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
    `
}
document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};
