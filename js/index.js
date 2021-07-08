const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);
const clickedScore= document.getElementById("pairs-clicked");
const pairScore= document.getElementById("pairs-guessed");

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      if (memoryGame.pickedCards.length<1){
        if(!card.classList.contains('blocked'))
        {memoryGame.pickedCards.push(card);
        card.classList.add('turned');}
      }


      else{
        
        if(!card.classList.contains('blocked')){
          card.classList.add('turned');
        memoryGame.pickedCards.push(card);
        

        let isItSame=memoryGame.checkIfPair((memoryGame.pickedCards[0].dataset.cardName),(memoryGame.pickedCards[1].dataset.cardName));
        clickedScore.innerText=memoryGame.pairsClicked;
        if (isItSame){
          pairScore.innerText=memoryGame.pairsGuessed;
          document.querySelectorAll(".turned").forEach((card)=>{card.classList.add("blocked")});
          memoryGame.pickedCards=[];

         if (memoryGame.checkIfFinished()){window.alert("You woon")};
        }

        else{
          memoryGame.pickedCards=[];
          setTimeout(function(){

            document.querySelectorAll(".turned:not(.blocked)").forEach((card)=>{card.classList.remove("turned")});
          },500);
          
        }
        }
        

      }

      
    });
  });
});