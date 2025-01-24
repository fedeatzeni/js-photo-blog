const main = document.querySelector("main"); //output
const pin = "./img/pin.svg" //pin

// ajax
axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(responseObj => {
        const objs = responseObj.data;
        //console.log(objs);

        //for
        objs.forEach(element => {
            // destructuring
            const { title, date, url } = element;
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

    })

    .catch(error => {
        output = error;
    })