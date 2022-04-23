let getUrlKey = window.location.href.split('?search=')[1];
let resultKey = getUrlKey.replace('%20', " ")
// console.log(getUrlKey)
document.querySelector('title').innerHTML = "Search : " + resultKey;
document.querySelector('.headingName').innerHTML = "Searching for : " + resultKey;

let useUrl = `https://imdb-api.com/en/API/SearchAll/k_28wuvp3x/${getUrlKey}`;

fetch(useUrl).then((response)=>{
    return response.json();
}).then((data)=>{
    showContent(data);
    console.log(data);
    if(data.results == null){
        console.log(document.querySelector('.noresult'));
        document.querySelector('.noresult').classList.remove('d-none');
    }
})

function showContent(data){
    var rawTemplate = document.getElementById('handleMore').innerHTML;
    var compiledData = Handlebars.compile(rawTemplate);
    var processeddata = compiledData(data);
    // console.log(data);
    var showArea = document.getElementById('presentContent');
    showArea.innerHTML = processeddata;
}

// ---------for title-----------
Handlebars.registerHelper('isTitle', (val)=>{
    return val == 'Title';
})