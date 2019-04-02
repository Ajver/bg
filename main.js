
let anim = document.querySelector('#anim');
let clicked = false;

window.onload = () => {
  anim.addEventListener('click', () => {
    if(clicked) return;

    clicked = true;

    anim.classList.add('opened-curtains');

    window.setTimeout(() => {
      
    }, 10000);
  });
}
