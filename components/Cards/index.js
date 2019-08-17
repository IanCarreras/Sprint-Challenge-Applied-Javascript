// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {
    Object.entries(res.data.articles).forEach(article => {
        createCards(article)
    })
    return res
})
.catch(err => {
    console.log(err)
    return err
})

const createCards = (article) => {
    let headlines = article[1]

    headlines.forEach(headline => {
        const cardDiv = document.createElement('div')
        const headlineDiv = document.createElement('div')
        const authorDiv = document.createElement('div')
        const imgContainer = document.createElement('div')
        const imgTag = document.createElement('img')
        const span = document.createElement('span')
        
        cardDiv.classList.add('card')
        headlineDiv.classList.add('headline')
        headlineDiv.innerText = `${headline.headline}`
        authorDiv.classList.add('author')
        imgContainer.classList.add('img-container')
        imgTag.src = `${headline.authorPhoto}`
        span.innerText = `By ${headline.authorName}`

        imgContainer.appendChild(imgTag)
        authorDiv.appendChild(imgContainer)
        authorDiv.appendChild(span)
        cardDiv.appendChild(headlineDiv)
        cardDiv.appendChild(authorDiv)

        const cardContainer = document.querySelector('.cards-container')
        cardContainer.appendChild(cardDiv)
        return cardDiv
    })
}