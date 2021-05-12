const joke1 = document.getElementById('joke');
//const joke1 = document.querySelectorAll('#joke');
//const jokeBtn = document.querySelectorAll('#jokeBtn');
const jokeBtn = document.getElementById('jokeBtn');
const generateJokes = () =>{
    const setHeader = {
        headers:{
            Accept: "application/json"
        }
    }
    fetch('https://icanhazdadjoke.com',setHeader)
    .then((res)=>res.json())
    .then((data)=>{
        joke1.innerHTML = data.joke;
    })
    .catch((error)=>{
        console.log(error);
    })
}   
// jokeBtn.addEventListener('click',() => generateJokes());
// jokeBtn.addEventListener('click' , generateJokes);
jokeBtn.addEventListener("click",generateJokes);
generateJokes();