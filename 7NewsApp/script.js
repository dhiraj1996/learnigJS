const API_KEY = "36059f5b86614cdca23149e0803dd962";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load', () => fetchNews("India"));

function reload() {
    window.location.reload();
}

async function fetchNews (query){
    const res = await fetch(`${url}${query}&apikey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles){
    const cardsContainer = document.getElementById("cards-container");
    const cardTemplate = document.getElementById("news-template");

    cardsContainer.innerHTML = "";

    articles.forEach((article)=>{
        if(!article.urlToImage)return;
        const cardClone = cardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    })
}

function fillDataInCard (cardClone, article) {
    //we are not selecting from document we are selecting from cardClone.
    //That is why cardclone queryselector is used.
    //It is inside a template also.
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSrc = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });
    //its not toLocal its toLocale be carefull
    //The toLocaleString() method return Date object as a string, using locale settings.
    //https://www.w3schools.com/jsref/jsref_tolocalestring.asp

    newsSrc.innerHTML = `${article.source.name} ▫ ${date}`;

    cardClone.firstElementChild.addEventListener("click", ()=>{
        window.open(article.url, "_blank");
    });
}

let curSelectedItem = null;
function navItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedItem?.classList.remove("active");
    curSelectedItem = navItem;
    curSelectedItem.classList.add('active');

}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener('click', ()=>{
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
    curSelectedItem.classList.remove("active");
    // curSelectedItem?.classList.remove("active");
    //check why this is taught
    curSelectedItem = null;
});