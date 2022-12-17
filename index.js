
let newsDataArr=[];
let p=fetch("https://newsdata.io/api/1/news?apikey=pub_14689d82b63b08b043361394745d38c8a0c16&q=bamboo&language=en  ")
p.then((response)=>{
    newsDataArr=response.json();
    return newsDataArr;

}).then((response)=>{
    newsDataArr=response.results;
    console.log(newsDataArr);
    displayNews();
})
function displayNews(){
    for(let i=0;i<9;i++){
  const titlee=document.getElementById(`h${i}`);
  const news=document.getElementById(`n${i}`)
  const link=document.getElementById(`a${i}`)
  titlee.innerHTML=newsDataArr[i].title;
  news.innerHTML=newsDataArr[i].description;
  link.setAttribute("target","_blank")
  link.setAttribute("href",`${newsDataArr[i].link}`)
  
}

}

