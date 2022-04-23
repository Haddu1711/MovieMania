// let popularMoreTvURL = 'js/json/popularMoreTv.json';
// let popularMovieMoreURL = 'js/json/popularMovieMore.json';
// let hindiMoviesMoreURL = 'js/json/hindiMovieMore.json';
// let hindiSeriesMoreURL = 'js/json/hindiSeriesMore.json';
// let hollywoodMoviesMoreURL = 'js/json/hollywoodMovieMore.json';
// let hollywoodSeriesMoreURL = 'js/json/hollywoodSeriesMore.json';
// let actionURL = 'js/json/upcoming.json';
// let actionURL = 'js/json/action.json';
let actionURL = 'https://imdb-api.com/API/AdvancedSearch/k_r6b31212?genres=action&count=100';
let comedyURL = 'https://imdb-api.com/API/AdvancedSearch/k_r6b31212?genres=comedy&count=100';
let romanceURL = 'https://imdb-api.com/API/AdvancedSearch/k_r6b31212?genres=romance&count=100';
let horrorURL = 'https://imdb-api.com/API/AdvancedSearch/k_r6b31212?genres=horror&count=100';
let biographyURL = 'https://imdb-api.com/API/AdvancedSearch/k_r6b31212?genres=biography&count=100';

let popularMoreTvURL = 'https://imdb-api.com/API/AdvancedSearch/k_r6b31212?title_type=tv_series,tv_miniseries&user_rating=8.0,10&count=250';
let popularMovieMoreURL = 'https://imdb-api.com/API/AdvancedSearch/k_r6b31212?title_type=feature,tv_movie&user_rating=8.0,10&count=250';
let hindiMoviesMoreURL = 'https://imdb-api.com/API/AdvancedSearch/k_r6b31212?title_type=feature&countries=in&languages=hi&moviemeter=75,&count=250';
let hollywoodMoviesMoreURL = 'https://imdb-api.com/API/AdvancedSearch/k_r6b31212?title_type=feature&countries=us&languages=en&count=250';
let hindiSeriesMoreURL = 'https://imdb-api.com/API/AdvancedSearch/k_r6b31212?title_type=tv_series,tv_miniseries&countries=in&languages=hi&count=250';
let hollywoodSeriesMoreURL = 'https://imdb-api.com/API/AdvancedSearch/k_r6b31212?title_type=tv_series,tv_miniseries&countries=us&languages=en&count=250';

// document.querySelector('title').innerHTML = "HHINID";


//---------define the pages--------
let x = window.location.href.split('?more=');
console.log(x)

if(x[1] == 'popularmovies'){
    document.querySelector('title').innerHTML = "Popular Movies";
    document.querySelector('.headingName').innerHTML = "Popular Movies";
    fetchData(popularMovieMoreURL)
}

if(x[1] == 'popularwebshows'){
    document.querySelector('title').innerHTML = "Popular Webshows";
    document.querySelector('.headingName').innerHTML = "Popular Webshows";
    fetchData(popularMoreTvURL)
}

if(x[1] == 'hollywoodmovies'){
    document.querySelector('title').innerHTML = "Hollywood Movies";
    console.log(document.querySelector('.headingName').innerHTML)
    document.querySelector('.headingName').innerHTML = "Hollywood Movies";
    fetchData(hollywoodMoviesMoreURL)
}

if(x[1] == 'bollywoodmovies'){
    document.querySelector('title').innerHTML = "Indian Movies";
    document.querySelector('.headingName').innerHTML = "Indian Movies";
    fetchData(hindiMoviesMoreURL)
}

if(x[1] == 'hollywoodwebshows'){
    document.querySelector('title').innerHTML = "Hollywood Webshows";
    document.querySelector('.headingName').innerHTML = "Hollywood Webshows";
    fetchData(hollywoodSeriesMoreURL)
}

if(x[1] == 'hindiwebshows'){
    document.querySelector('title').innerHTML = "Indian Webshows";
    document.querySelector('.headingName').innerHTML = "Indian Webshows";
    fetchData(hindiSeriesMoreURL)
}

if(x[1] == 'action'){
    document.querySelector('title').innerHTML = "MovieMania : Action";
    document.querySelector('.headingName').innerHTML = "Action shows";
    fetchData(actionURL)
}

if(x[1] == 'comedy'){
    document.querySelector('title').innerHTML = "MovieMania : Comedy";
    document.querySelector('.headingName').innerHTML = "Comedy shows";
    fetchData(comedyURL)
}

if(x[1] == 'romance'){
    document.querySelector('title').innerHTML = "MovieMania : Romance";
    document.querySelector('.headingName').innerHTML = "Romance shows";
    fetchData(romanceURL)
}

if(x[1] == 'horror'){
    document.querySelector('title').innerHTML = "MovieMania : Horror";
    document.querySelector('.headingName').innerHTML = "Horror shows";
    fetchData(horrorURL)
}

if(x[1] == 'biography'){
    document.querySelector('title').innerHTML = "MovieMania : Biography";
    document.querySelector('.headingName').innerHTML = "Biography shows";
    fetchData(biographyURL)
}


function fetchData(myUrl){
    fetch(myUrl).then((response)=>{
        return response.json();
    }).then((data)=>{
        showContent(data);
    })    
}

function showContent(data){
    var rawTemplate = document.getElementById('handleMore').innerHTML;
    var compiledData = Handlebars.compile(rawTemplate);
    var processeddata = compiledData(data);
    // console.log(data);
    var showArea = document.getElementById('presentContent');
    showArea.innerHTML = processeddata;
}