'use strict';
let counter=0;
let username=prompt('Hello and welcome to my website, what\'s your name ? ');
alert('Welcome ' +username+ ',  I know you are curious about me and would like to have a game with you, so you get to know me better :)');

function  question1(){

let age=prompt('I am guess you are younger but lets see, do you think I am older than 35 ? ');
age=age.toLowerCase();
//console.log(age);
switch(age)
{
case 'yes':
case 'y':
  {
    age=confirm('I am not that old :(, I am actually 29 :)');
    // console.log(age);
  }
  break;
case 'no':
case 'n':
  {
    age=confirm('I do like you think I am younger and yes you are right i am 29 :) ');
    // console.log(age);
    counter++;
  }
  break;
default:
  {
    age=confirm('Anyways I am 29 :) ');
    // console.log(age);
  }
  break;
}
}
question1();

function  question2(){
let answer=prompt('What type of music you think I like "classic, jazz or pop" ');
answer=answer.toLowerCase();
console.log(answer);
switch (answer)
{
case'classic':
  alert('Yes you are right :) ');
  //console.log(answer);
  counter++;
  break;
case 'pop':
  alert('No i dont, I prefer classic');
  //console.log(answer);
  break;
case'jaz':
  alert('No i dont, I prefer classic');
  //console.log(answer);
  break;
default:
  alert('I like classic one\'s ');
  //console.log(answer);
}
}

question2();

function  question3(){
alert('omarirlaopoerappaerpalomartujehnabgerwnmasdoityawerpoaertawwbebrhwasdafrepizzaoueraerpalomar');
answer=prompt(username+', there was a one word of my faviorte food, if you notice please type it');
answer=answer.toLowerCase();
console.log(answer);
switch (answer)
{
case'pizza':
  alert('Yes you are right :) ');
  //console.log(answer);
  counter++;
  break;
case 'no':
case 'n':
default:
  alert('It was pizza here the message again: omarirlaopoerappaerpalomartujehnabgerwnmasdoityawerpoaertawwbebrhwasdafrepizzaoueraerpalomar');
  //console.log(answer);
  break;
}
}
question3();

function  question4(){
answer=prompt(username+', Now which month you think I was born I "Hnt: the first quarter of the year and with a horoscope of Aquarius"');
answer=answer.toLowerCase();
console.log(answer);
switch (answer)
{
case'february':
case'2':
  alert('Yes you are right :) ');
  //console.log(answer);
  counter++;
  break;
default:
  alert('It is February :)');
  //console.log(answer);
  break;
}
}
question4();

function  question5(){
let gn=prompt('how many characters you think my name have, hint choose a number between 2 and 10, you only have 4 attempts to guess it ');
gn=parseInt(gn);
console.log(gn);
if (gn===4){counter++;}
let gg =1;
while(gg!==5)
{
  alert('This was your '+gg+' attempt');
  gg=parseInt(gg);
  if(gn === 4)
  {
    alert('Well done '+ username+' so let me introduce myself my name is Omar, and its nice to meet you :)');
    counter++;
    //console.log('it was run');
    break;
  }if(gg ===4)
  {
    alert('sorry '+username+' you ran out of attempts but let me introduce myself my name is Omar, and its nice to meet you :)');
    break;
  }
  else if(gn>=6)
  {
    gn=prompt('Too high, Try again the number is lower ');
    gn=parseInt(gn);
    // console.log(gn);
  }
  else if(gn<=3)
  {
    gn=prompt('too low,Try again you are too close :)');
    gn=parseInt(gn);
    // console.log(gn);
  }
  else if(gn<=5)
  {
    gn=prompt('Try again you are too close :)');
    gn=parseInt(gn);
    // console.log(gn);
  }
  gg++;
}
}
question5()

function  question6(){
answer=alert(username+', Now which of these you think is a Semantic Elements in "HTML": "<div>","<form>","<table>","<span>","<article>","<aside>"');
let answers=['<div>','<span>'];
// console.log(answers);
gg=1;
let c=0;
while(gg!==7)
{
  answer=prompt('This is your '+gg+' attempt');
  for(let i=0;i<answers.length;i++)
  {
    // console.log(i);
    // console.log(answer);
    // console.log(answers[i]);
    if(answer===answers[i])
    { c=1;
      // console.log('if is working :)');
      // console.log(answer);
      // console.log(answers[i]);
      alert('well done that is one of the correct answers, '+username);
      counter++;
      break;
    }
  }
  if (c===1)
  {
    break;
  }
  console.log(gg);
  if(gg===6)
  {
    alert('That was your last chance correct answers are <div> OR <span>');
  }
  gg++;
}
if (counter>0)
{
  alert('It was fun, well done '+ username+ '!, You have '+counter+ ' correct answers out of 7, Now enjoy my website  :)');
  //console.log(counter);
}
else
{
  answer=confirm('Now enjoy my website ' + username+ ' :)');
  //console.log(counter);
}
}
question6();

