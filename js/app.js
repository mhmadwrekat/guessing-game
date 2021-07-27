
'use strict' ;

let score = 0 ;

////////// First message (Entering name message) :

let userName = prompt('Enter Your Name Please ?');
alert('Welcome ' + userName +' To my page ^-^ , I will ask you 5 questions , I hope you will answer YES or NO');

////////////////// the first Five Question :

let know = prompt('Do We know each other ?').toLocaleLowerCase();

switch(know)
{
case 'yes':
case 'y':
  //   console.log('correct');
  alert('truly ! thats cool');
  score+= 14 ;
  break;

case 'no':
case 'n':
  alert('I hope we get to know each other ^-^');
  break;

default :
  alert('You Didnt answer :(');
}

let likeWeb = prompt('Do I Like Web pages ?').toLocaleLowerCase();

switch(likeWeb)
{
case 'yes':
case 'y':
  score+= 14 ;

  //  console.log('correct');
  alert('sure i love it , see my page ^-^');
  break;

case 'no':
case 'n':
  alert('why not everyone like web pages :(');
  break;

default :
  alert('You Didnt answer :(');
}

let learnWeb = prompt('Do i learned about web pages ?').toLocaleLowerCase();

switch(learnWeb)
{
case 'yes':
case 'y':
  score+= 14 ;

  //   console.log('correct');
  alert('sure , i learned about it ^-^');
  break;

case 'no':
case 'n':
  alert('no incorrect  :(');
  break;

default :
  alert('You Didnt answer :(');
}

let likeSport = prompt('Do i like sport ?').toLocaleLowerCase();

switch(likeSport)
{
case 'yes':
case 'y':
  score+= 14 ;

  //   console.log('correct');
  alert('sure , i love sport very much ^-^');
  break;

case 'no':
case 'n':
  alert('why not everyone like sport :(');
  break;

default :
  alert('You Didnt answer :(');
}

let healthyFood = prompt('do i like healthy food ?').toLocaleLowerCase();

switch(healthyFood)
{
case 'yes':
case 'y':
  score+= 14 ;

  //   console.log('yes');
  alert('sure i like it ^-^');
  break;

case 'no':
case 'n':
  alert('no i love healthy food :(');
  break;

default :
  alert('You Didnt answer :(');
}

/////// question (6th) Guessing Number game :

let counter = 1 ;
let random = Math.floor(Math.random() * 10) + 1 ;
let input = prompt('Guess Number In My mind Between 0 and 10 ?');
if (input !== null) {
  while (input !== random) {
    if (counter < 4)
    {
      if (input < random) {
        input = prompt('Bigger ): try another number');
        if (input === null) {
          alert('Thats Ok Maybe Later  :)');
          break;
        }
      }
      else if (input > random) {
        input = prompt('Smaller ): Try another number');
        if (input === null) {
          alert('Thats Ok Maybe Later  :)');
          break;
        }
      }
      else if (input == random) {
        alert('thats Right ' + random + ' => Number Of Your Trying : ' + counter + ' Times :)');
        score+= 14 ;
        break;
      }
      else {
        break;
      }
      counter += 1;
    }
    else{
      alert('sorry , you take 4 attempts , The number is :' + random ) ;
      break;
    }

  }
} else { alert('Thats Ok Maybe Later  :)'); }


//////////// question 7th (array) :

let favFruites = [ 'banana' , 'orange' , 'cherry' , 'kiwi'] ;

let gussFavFruites = prompt('Guess Whats My Favorite Fruites ?').toLocaleLowerCase() ;

let countGuessFavFruites = 0 ;

while (gussFavFruites !== favFruites)
{
  countGuessFavFruites++ ;
  if ( countGuessFavFruites < 6 )
  {
    if ( gussFavFruites === favFruites[0] ||
        gussFavFruites === favFruites[1] ||
        gussFavFruites === favFruites[2] ||
        gussFavFruites === favFruites[3] )
    {
      alert(gussFavFruites + ' , Thats right ^_^ , ' +
    'My all Favorite Fruites Is : ' + favFruites[0] + ' , ' +
     favFruites[1] + ' , ' +favFruites[2] + ' , ' +favFruites[3] ) ;
      score+= 14 ;
      break ;
    }
    else
    {
      gussFavFruites = prompt('No :( try again').toLocaleLowerCase();
    } }
  else{
    alert('Sorry Yo have 6 attempts , My Favorite Fruites Is : '
    + favFruites[0] + ' , ' +
    favFruites[1] + ' , ' +favFruites[2] + ' , '
    +favFruites[3] ) ;
    break;
  }
}

///// Final score : 
alert('Your Final Score Is : ' + score + '%') ;

///// Final Welcome Message :
alert('Thanks For Answer Question , And Welcome To My Page , ENJOY ^-^');
