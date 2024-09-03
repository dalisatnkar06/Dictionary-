let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");


searchBtn.addEventListener("click", () => {
    const search = searchInput.value;
    if (search == "") {
        alert("First Enter the Value")
    } else {
        getData(search);
    }
})

const getData = async(searchData) => {
    let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchData}`);
    let jsonData = await data.json()
    console.log(jsonData)

    document.getElementById("text").innerHTML = "";
    let div = document.createElement("div");
    div.innerHTML = `
            <h2>Word : ${jsonData[0].word}</h2>
            <p>Part of Speech : ${jsonData[0].meanings[0].partOfSpeech}</p>
            <p>Meaning : ${jsonData[0].meanings[0].definitions[0].definition}</p>
            <p>Example : ${jsonData[0].meanings[0].definitions[0].example}</p>
            <p>Synonyms : ${jsonData[0].meanings[0].synonyms}</p>
            <a href=${jsonData[0].sourceUrls[0]} >Read More</a>
    `
    document.getElementById("text").append(div);
}




