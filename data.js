fetch("https://new.parkcinema.az/api/movie/filterActives")
    .then(res => res.json)
    .then(data => console.log(data))