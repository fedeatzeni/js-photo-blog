const main = document.querySelector("main"); //output
const pin = "./img/pin.svg"; //pin

// ajax call
axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(responseObj => {
        const objs = responseObj.data;
        //console.log(objs);

        //for
        objs.forEach(element => {
            // destructuring
            const { title, date, url } = element;
            // output in pagina
            main.innerHTML += `
            <div class="card">
                <img src="${pin}" alt="pin">
                <div class="photo">
                    <img src="${url}" alt="${title}">
                    <div class="date">${date}</div>
                    <div class="title">${title}</div>
                </div>
            </div>
            `;
        });

        //img opener
        const photos = document.querySelectorAll(".photo"); // img + bordo
        const imgOpened = document.querySelector(".big-img"); //output img
        const display = document.querySelector(".img-opened"); //output class active
        //console.log(photos);

        // aggiunge un EventListener a tutte le foto
        for (let i = 0; i < photos.length; i++) {
            photos[i].addEventListener("click", () => {
                // display block
                display.classList.add("active")
                // output in pagina
                imgOpened.innerHTML = `
                    <img src="${objs[i].url}" alt="${objs[i].title}">
                    `;
            })
        };

        //close 
        const closeBtn = document.querySelector(".img-opened button");
        //console.log(closeBtn);

        closeBtn.addEventListener("click", () => {
            // display none
            display.classList.remove("active")
            // remove img
            imgOpened.innerHTML = ""
        })

    })

    .catch(error => {
        output = error
        console.log(output);
    })