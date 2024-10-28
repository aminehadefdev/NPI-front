class fetchAPI{
    constructor(url){
        this.url = url
    }
    get(params){
        const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
          
          fetch(this.url + "/" + params, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }
    post(params){
        const requestOptions = {
            method: "POST",
            redirect: "follow"
          };
          
          return fetch(this.url + "/" + params, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }
}

export default fetchAPI