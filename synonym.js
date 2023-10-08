let toast = document.querySelector(".toast");
let queryInput = document.querySelector("#queryWord");

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bdb5952f33mshe20f85b10163cccp155f4djsnbde8ddb636f2',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
};

let wordSynonym = document.querySelector('#wordSynonym');

document.querySelector("#getBtn").onclick = ()=>{
    let word = queryInput.value;
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`, options)
    .then(response => response.json())
        .then(response => {
            console.log(response);
            if(response.synonyms && response.synonyms.length > 0){
                wordSynonym.innerHTML = response.synonyms[0];
            } else {
                wordSynonym.innerHTML = 'No synonym found';
            }
        })
        .catch(err => console.error(
            toast.innerHTML = 'Try a word or phrase',
            fadeElem(toast)
        ));
}

document.querySelector(".toast").onclick = () =>{
    toast.innerHTML = "Copied to clipboard"
    copyText();
}

function fadeElem(elem){
    elem.style.display = 'inherit'
    elem.style.opacity = 1;
    let opc = 1.5;
    let i = setInterval(() => {
        opc-=0.01;
        if(opc <= 0){
            elem.style.display = "none";
            clearInterval(i);
        }else if(opc <=1){
            elem.style.opacity = opc;
        }
    }, 10)
}

async function copyText(){
    if(wordSynonym.innerHTML != ""){
        navigator.clipboard.writeText(wordSynonym.innerHTML)
        .then(
            fadeElem(document.querySelector(".toast"))
        )
    }
}
