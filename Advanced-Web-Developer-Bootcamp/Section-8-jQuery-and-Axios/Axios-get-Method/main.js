const url = "https://opentdb.com/api.php?amount=3";
const p = document.querySelector("p");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");

axios.get(url)
    .then((response) => {
        console.log(response.data.results);
        
      p.textContent = response.data.results[0].question;   
      p1.textContent = response.data.results[1].question;   
      p2.textContent = response.data.results[2].question;   
    })
    .catch((e) => {
        console.log(e); 
    })