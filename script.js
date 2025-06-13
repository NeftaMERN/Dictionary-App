
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

                <button class="sound">

                    <i class="fa-solid fa-volume-high"></i>

                </button>

            </div>

            <div class="details">

                <p>pos</p>
                <p>/Sampl/</p>

            </div>

            <p class="word-mining">

                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, deleniti. Minus accusantium totam eius ut.

            </p>

            <p class="word-example">

                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga labore voluptas itaque voluptate aut! Odit.

            </p>`

    }))

})