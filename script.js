
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("serch-btn");

btn.addEventListener("click", () => {

    const ineWord = document.getElementById("ine_Word").value;

    fetch(`${url}${ineWord}`)
    .then((response) => response.json())
    .then((data => {

        console.log(data);
        result.innerHTML = `<div class="word">

                <h3>${ineWord}</h3>

                <button class="sound" onclick = "playSound()">

                    <i class="fa-solid fa-volume-high"></i>

                </button>

            </div>

            <div class="details">

                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>

            </div>

            <p class="word-mining">

                ${data[0].meanings[0].definitions[0].definition}

            </p>

            <p class="word-example">

                ${data[0].meanings[0].definitions[0].example || "No example found"}

            </p>`

            let audioSrc = data[0].phonetics.find(p => p.audio)?.audio;

            if (audioSrc) {
            sound.setAttribute("src", audioSrc);
            } else {
                sound.setAttribute("src", "");
                alert("No pronunciation audio found for this word 😢");
            }

    }))

    .catch(() => {
            result.innerHTML = `<h3 class="error">Could not find the word</h3>`;
        });

})

function playSound() {

    sound.play();

}