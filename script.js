function searchMovie(title){
    let url = "http://www.omdbapi.com/?apikey=a23f8817&t=" + title;
    fetch(`${url}`)
    .then(response => response.json()).then (data => {
        console.log(data);
    
        // let e = document.createElement('div');
        // e.innerHTML = `
        // <img src="${data.Poster}" alt="">
        // <p>${data.Title}</p>
        // <p>${data.Year}</p>
        // <p>${data.Released}</p>
        // <p>${data.Genre}</p>
        // <p>${data.Director}</p>
        // `;
        // element = document.getElementById("display");
        // while(e.firstChild) {
        //     element.appendChild(e.firstChild);
        // }
        let container = $('<div></div>');
        container.append(`
        <img src="${data.Poster}" alt="">
        <p>${data.Title}</p>
        <p>${data.Year}</p>
        <p>${data.Released}</p>
        <p>${data.Genre}</p>
        <p>${data.Director}</p>
        `);
        $('#display').append(container);
    });
}

// searchMovie("Pulp Fiction");

document.getElementById("myButton").addEventListener('click', function(e) {
    e.preventDefault();
    let input = document.getElementById("movie");
    let title = input.value;
    searchMovie(title);
});