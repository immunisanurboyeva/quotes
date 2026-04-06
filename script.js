const ul = document.querySelector('.ul')

fetch('https://api.api-ninjas.com/v2/quotes?categories=success%2Cwisdom', {
  headers: {
    'X-Api-Key': 'GnxpyjjORxM1tGWnAHb104SzKiIG8McqnS7opIpX'
  }
})
.then(response => response.json())
.then(data => {
  data.forEach(item => {
   ul.innerHTML += 
   `
    <li class="list">
        <h3 class="quote">${item.quote}</h3>
        <p class="author">${item.author}</p>
        <div class="type">
        </div>
    </li>
   `
  });
});