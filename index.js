// 0) Get all the products from the API using a fetch

const fetchProducts = fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        const row = document.querySelector("#mainContainer")
        data.forEach((element) => {
            const content = ` 
            <div class="col-3 mt-3 mr-0">
                <div class="card">
                    <img src="${element.img}" class="card-img-top" style="height:100%; cover" "alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            
            </div>
            `

            row.innerHTML += content

        })
    })