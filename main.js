// This is a New York Times API and its free. Get one yourself.
const apiKey = 'gIgtdMxqL0Wu9nMr01b3Gv1HU7FhgtGr';

// Breaking News Section
async function getBreakingNews(){
    await fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`)
    .then(data => data.json())
    .then(res => {
        console.log(res.results);
        const output = document.getElementById('breaking-news-output');
        
        try{
            output.innerHTML += 
                `
                <a href="${res.results[0].url}">
                    <article id="breaking-news-card">
                    <div class="save-button"><img src="./icons/bookmark-white.svg" alt="bookmark"></div>
                    <img src="${res.results[0]['multimedia'][0].url}" alt="placeholder">
                    <div class="card-text">
                        <h2>${res.results[0].title}</h2>
                        <p>${res.results[0].abstract}</p>
                    </div>
                    </article>
                </a>
                `
            console.log(res.results[0]['media'][0].caption);
        }
        catch(err){
            console.log(err);
        }
    })
}

// Trending News Section
async function getTrendingNews() {
    await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`)
        .then(data => data.json())
        .then(res => {
            console.log(res.results);
            const output = document.getElementById('trending-news-output');
            try {
                output.innerHTML += 
                `
                <a href="${res.results[0].url}">
                    <article id="trending-news-card">
                        <div class="save-button"><img src="./icons/bookmark-white.svg" alt=""></div>
                        <div class="card-text">
                            <h2>${res.results[0].title}</h2>
                            <p>${res.results[0].abstract}</p>
                        </div>
                    </article>
                </a>
                `
            }
            catch(err) {
                console.log(err);
            }
        })
}

async function getAmericaNews() {
    await fetch(`https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${apiKey}`)
    .then(data => data.json())
    .then(res => {
        console.log(res.results)
        const output = document.getElementById("america-news-output");
        try {
            output.innerHTML += 
            `
            <a href="${res.results[0].url}">
                <article class="america-news-card">
                    <div class="save-button"><img src="./icons/bookmark-white.svg" alt="save"></div>
                    <img class="article-img" src="${res.results[0]['multimedia'][0].url}" alt="placeholder">
                    <h4 class="article-title">${res.results[0].title}</h4>
                    <div class="abstract">
                        <h4 class="abstract-title">${res.results[0].title}</h4>
                        <p>${res.results[0].abstract}</p>
                    </div>
                </article>
            </a>
            `
        }
        catch(err){
            console.log(err);
        }
    })
}

async function getEuropeNews() {
    await fetch(`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${apiKey}`)
    .then(data => data.json())
    .then(res => {
        console.log(res.results)
        const output = document.getElementById("europe-news-output");
        try {
            output.innerHTML += 
            `
            <a href="${res.results[0].url}">
                <article class="europe-news-card">
                    <div class="save-button"><img src="./icons/bookmark-white.svg" alt="save"></div>
                    <img class="article-img" src="${res.results[0]['multimedia'][0].url}" alt="placeholder">
                    <h4 class="article-title">${res.results[0].title}</h4>
                    <div class="abstract">
                        <h4 class="abstract-title">${res.results[0].title}</h4>
                        <p>${res.results[0].abstract}</p>
                    </div>
                </article>
            </a>
            `
        }
        catch(err){
            console.log(err);
        }
    })
}

async function getMiddleEastNews() {
    await fetch(`https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=${apiKey}`)
    .then(data => data.json())
    .then(res => {
        console.log(res.results)
        const output = document.getElementById("middle-east-news-output");
        try {
            output.innerHTML += 
            `
            <a href="${res.results[0].url}">
                <article class="middle-east-news-card">
                    <div class="save-button"><img src="./icons/bookmark-white.svg" alt="save"></div>
                    <img class="article-img" src="${res.results[0]['multimedia'][0].url}" alt="placeholder">
                    <h4 class="article-title">${res.results[0].title}</h4>
                    <div class="abstract">
                        <h4 class="abstract-title">${res.results[0].title}</h4>
                        <p>${res.results[0].abstract}</p>
                    </div>
                </article>
            </a>
            `
        }
        catch(err){
            console.log(err);
        }
    })
}

async function getAsiaNews() {
    await fetch(`https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${apiKey}`)
    .then(data => data.json())
    .then(res => {
        console.log(res.results)
        const output = document.getElementById("asia-news-output");
        try {
            output.innerHTML += 
            `
            <a href="${res.results[0].url}">
                <article class="asia-news-card">
                    <div class="save-button"><img src="./icons/bookmark-white.svg" alt="save"></div>
                    <img class="article-img" src="${res.results[0]['multimedia'][0].url}" alt="placeholder">
                    <h4 class="article-title">${res.results[0].title}</h4>
                    <div class="abstract">
                        <h4 class="abstract-title">${res.results[0].title}</h4>
                        <p>${res.results[0].abstract}</p>
                    </div>
                </article>
            </a>
            `
        }
        catch(err){
            console.log(err);
        }
    })
}

async function getForYouNews() {
    await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`)
    .then(data => data.json())
    .then(res => {
        console.log(res.results)
        for (var i = 0; i < 3; i++){
            const output = document.getElementById("fy-articles");
            try {
                output.innerHTML += 
                `
                <a href="${res.results[i].url}">
                    <article class="fy-card">
                        <div class="save-button"><img src="./icons/bookmark-white.svg" alt="save"></div>
                        <img class="article-img" src="${res.results[i]['multimedia'][0].url}" alt="placeholder">
                        <h4 class="article-title">${res.results[i].title}</h4>
                        <div class="abstract">
                            <h4 class="abstract-title">${res.results[i].title}</h4>
                            <p>${res.results[i].abstract}</p>
                        </div>
                    </article>
                </a>
                `
            }
            catch(err){
                console.log(err);
            }
        }
    })
}







getBreakingNews();
getTrendingNews();
getAmericaNews();
getEuropeNews();
getMiddleEastNews();
getAsiaNews();
getForYouNews();