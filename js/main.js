// let upComingURL = 'js/json/upComing.json';
// let popularTvURL = 'js/json/popularTv.json';
// let popularMovieURL = 'js/json/popularMovie.json';
// let hindiMoviesURL = 'js/json/hindiMovie.json';
// let hindiSeriesURL = 'js/json/hindiSeries.json';
// let hollywoodMoviesURL = 'js/json/hollywoodMovie.json';
// let hollywoodSeriesURL = 'js/json/hollywoodSeries.json';

let upComingURL = 'https://imdb-api.com/en/API/ComingSoon/k_r6b31212';
let popularTvURL = 'https://imdb-api.com/API/AdvancedSearch/k_r6b31212?title_type=tv_series,tv_miniseries&user_rating=8.0,10';
let hindiSeriesURL = 'https://imdb-api.com/API/AdvancedSearch/k_r6b31212?title_type=tv_series,tv_miniseries&countries=in&languages=hi';
let popularMovieURL = 'https://imdb-api.com/API/AdvancedSearch/k_r6b31212?title_type=feature,tv_movie&user_rating=8.0,10';
let hollywoodMoviesURL = 'https://imdb-api.com/API/AdvancedSearch/k_r6b31212?title_type=feature,tv_movie&countries=us&languages=en';
let hindiMoviesURL = 'https://imdb-api.com/API/AdvancedSearch/k_r6b31212?title_type=feature&countries=in&languages=hi&moviemeter=75,';
let hollywoodSeriesURL = 'https://imdb-api.com/API/AdvancedSearch/k_r6b31212?title_type=tv_series,tv_miniseries&countries=us&languages=en';

// --------Ajax PArt----------------
// var xhr = new XMLHttpRequest();
// xhr.open('get',myURL, true);
// xhr.onload = function(){
//     if(xhr.status == 200){
//         var data = JSON.parse(xhr.responseText);
//         ShowData(data);
//     }
//     else{
//         document.write("WE connect to the server but get error in response");
//     }
// }

// xhr.onerror = () =>{
//     document.write("Connection Error");
// }

// xhr.send()


// ----------------fetch Api-------------------

// -----------------start upcoming----------------
fetch(upComingURL).then((response)=>{
    return response.json();
}).then((data)=>{
    upComingShow(data);
})

function upComingShow(data){
    var rawTemplate = document.getElementById('handleCarousel').innerHTML;
    var compiledData = Handlebars.compile(rawTemplate);
    var processeddata = compiledData(data);
    // console.log(data);
    var showArea = document.getElementById('presentCarousel');
    showArea.innerHTML = processeddata;
}
// -----------------End start upcoming----------------

// -----------------Start PopularTV Shows-----------------

fetch(popularTvURL).then((response)=>{
    return response.json();
}).then((data)=>{
    popularTvShow(data);
})

function popularTvShow(data){
    var rawTemplate = document.getElementById('handlePopularTv').innerHTML;
    var compiledData = Handlebars.compile(rawTemplate);
    var processeddata = compiledData(data);
    // console.log(data);
    var showArea = document.getElementById('handlePopularTv');
    showArea.innerHTML = processeddata;
}

// -----------------End Start PopularTV Shows-----------------

// -----------------Start PopularMovie Shows-----------------

fetch(popularMovieURL).then((response)=>{
    return response.json();
}).then((data)=>{
    popularMovieShow(data);
})

function popularMovieShow(data){
    var rawTemplate = document.getElementById('handlePopularMovie').innerHTML;
    var compiledData = Handlebars.compile(rawTemplate);
    var processeddata = compiledData(data);
    // console.log(data);
    var showArea = document.getElementById('presentPopularMovie');
    showArea.innerHTML = processeddata;
}

// -----------------End Start PopularMovie Shows-----------------

// -----------------Start Hollywood Movie Shows-----------------

fetch(hollywoodMoviesURL).then((response)=>{
    return response.json();
}).then((data)=>{
    hollywoodMovieShow(data);
})

function hollywoodMovieShow(data){
    var rawTemplate = document.getElementById('handleHollywoodMovie').innerHTML;
    var compiledData = Handlebars.compile(rawTemplate);
    var processeddata = compiledData(data);
    // console.log(data);
    var showArea = document.getElementById('presentHollywoodMovie');
    showArea.innerHTML = processeddata;
}

// -----------------End Hollywood Movie Shows-----------------

// -----------------Start HindiMovie Shows-----------------

fetch(hindiMoviesURL).then((response)=>{
    return response.json();
}).then((data)=>{
    hindiMovieShow(data);
})

function hindiMovieShow(data){
    var rawTemplate = document.getElementById('handleHindiMovie').innerHTML;
    var compiledData = Handlebars.compile(rawTemplate);
    var processeddata = compiledData(data);
    // console.log(data);
    var showArea = document.getElementById('presentHindiMovie');
    showArea.innerHTML = processeddata;
}

// -----------------End hindiMovie Shows-----------------

// -----------------Start hollywood web Shows-----------------

fetch(hollywoodSeriesURL).then((response)=>{
    return response.json();
}).then((data)=>{
    hollywoodSeriesShow(data);
})

function hollywoodSeriesShow(data){
    var rawTemplate = document.getElementById('handleHollywoodSeries').innerHTML;
    var compiledData = Handlebars.compile(rawTemplate);
    var processeddata = compiledData(data);
    // console.log(data);
    var showArea = document.getElementById('presentHollywoodSeries');
    showArea.innerHTML = processeddata;
}

// -----------------End hollywood webShows-----------------

// -----------------Start hindi web Shows-----------------

fetch(hindiSeriesURL).then((response)=>{
    return response.json();
}).then((data)=>{
    hindiSeriesShow(data);
})

function hindiSeriesShow(data){
    var rawTemplate = document.getElementById('handleHindiSeries').innerHTML;
    var compiledData = Handlebars.compile(rawTemplate);
    var processeddata = compiledData(data);
    // console.log(data);
    var showArea = document.getElementById('presentHindiSeries');
    showArea.innerHTML = processeddata;
}

// -----------------End hindi webShows-----------------



// ------------for carousel sliding------------------
let nextClick = () =>{
    let nextBtn = document.getElementById('next');
    nextBtn.click();
}
setInterval(nextClick,3000);
// ----------------End carousel part-----------------


// ----------------more content page------------------


// ----------------End more content page------------------