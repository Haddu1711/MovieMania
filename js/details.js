let x = window.location.href.split('?more=');
// document.write(x[1])

// myUrl = `js/json/moredetails.json`;
myUrl = `https://imdb-api.com/en/API/Title/k_r6b31212/${x[1]}/Posters,Trailer,Ratings,`

fetch(myUrl).then((response)=>{
    return response.json();
}).then((data)=>{
    // console.log(data);
    document.querySelector('title').innerHTML = "MovieMania : " + data['title'];
    showAllDetails(data);
})

function showAllDetails(data){
    var rawTemplate = document.getElementById('handleDetails').innerHTML;
    var compiledData = Handlebars.compile(rawTemplate);
    var processeddata = compiledData(data);
    // console.log(data);
    var showArea = document.getElementById('presentDetails');
    showArea.innerHTML = processeddata;
}

// -------------get release year----------

Handlebars.registerHelper('getY', (rdate) => {
    var rdate = rdate.split('-');
    return rdate[0];
});

// --------------get movie time-----------

Handlebars.registerHelper('getH', (rtime) => {
    var rhour = parseInt(rtime) / 60;
    var rmin = parseInt(rtime) % 60;
    return parseInt(rhour) + "h " + parseInt(rmin) + "min";
});

// --------------get movie rating-----------

Handlebars.registerHelper('contRate', (rrate) => {
    var rrate = rrate.split('-');
    return  "U/A " + rrate[1]+'+';
});

// --------------get video--------------

Handlebars.registerHelper('getVideo', (rrate) => {
    console.log(rrate);
    let vUrl = `https://imdb-api.com/en/API/YouTubeTrailer/k_r6b31212/${rrate}`;
    // let vUrl = `js/json/moviedets.json`;
    // getMyVideo(vUrl);
    fetch(vUrl).then((response)=>{
        return response.json()
    }).then((data)=>{
        // getUrl(data);
        console.log(data['videoId']);
        let videoId = data['videoId'];
        document.querySelector('iframe').setAttribute('src',`https://www.youtube.com/embed/${videoId}`);
    });
});

//----------------show Video--------------
// Handlebars.registerHelper('showVideo', () => {
//     let trailerBtn = document.getElementById('trailerBtn');
//     let trailer = document.getElementById('trailer');
//     let trailerBox = document.getElementsByClassName('trailerBox');
//     let closeBtn = document.getElementById('closeBtn');
    
    
//     trailerBtn.onclick = () => {
//         trailerBox.classList.add('showTrailer');
//         trailer.play();
//     }
// })
