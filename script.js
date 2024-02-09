const btn = document.getElementById('btn') 
const img = document.getElementById('img')
const container = document.getElementsByClassName('container')

function fetchDog() {
    fetch("https://random.dog/woof.json")
      .then((response) => response.json())
      .then((load) => {
        img.src = load.url;
      })
      .catch((error) => console.error(error));
    }

    fetchDog();
         
btn.addEventListener('click', fetchDog());

container.appendChild(img)