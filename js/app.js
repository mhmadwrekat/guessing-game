    
'use strict' ;


let userName = prompt('Enter Your Name Please ?');
alert('Welcome ' + userName +' To my page ^-^ , I will ask you 5 questions , I hope you will answer YES or NO');


let know = prompt('Do We know each other ?').toLocaleLowerCase();

switch(know)
{
    case 'yes':
    case 'y':
    //   console.log('correct');
    alert('truly ! thats cool');
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

alert('Thanks For Answer Question , And Welcome To My Page , ENJOY ^-^');







/*
let userIn = ['wrekat' , 25 , '201d34' , true];
alert(userIn[2]);
console.log(userIn[0]);
/*
 This is for comment
 
prompt('hi').toLocaleLowerCase();

let a;
switch(a)
{
    case 'yes':
        console.log('yes');
        break;
        default :
        console.log('problem');

}
*/
/*let con = confirm('Do you like this page ?') ;
console.log(con);
*/
