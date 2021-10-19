//? using the window object and adding an event 
window.addEventListener('keydown', (event)=>{
  //select associate element with the especific event
  const audio = document.querySelector(`audio[data-key='${event.keyCode}']`)
  const key = document.querySelector(`.key[data-key= "${event.keyCode}"]`)
  //if the value of the is null return, or another key
  if(!audio) return
  //avoid problema with the keys, rewind to the start
  audio.currentTime=0;
  //when you press a key, started the sound
  audio.play();
  // console.log(key);
  //add the class playing to make the transition in the dom
  key.classList.add('playing')

})
//todo: create a function for the transition and remove
//show the properties that suffers a transition 
const removeTransition = (event) =>{
  //skip it if its not a transform
  if(event.propertyName !== 'transform') return;
    //propertyName only change 
    //remove the transistion in the classlist 
  event.target.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
//iterate the transition on the especific key class
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


