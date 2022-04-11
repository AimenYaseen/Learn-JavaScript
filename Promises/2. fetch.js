// fetch Api is used to make AJAX request

const url = "https://jsonplaceholder.typicode.com/posts/";
fetch(url)
  .then((response) => {
    //  response.json  // it pulls the actual data from the response
  })
  .then((data) => console.log(data));

// status 200 : request seccussful and resources are retrieved
// status 300 : error
