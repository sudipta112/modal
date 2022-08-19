const openmodal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const crossbtn = document.querySelector('.close-modal')
let closemodalall = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for (let i = 0; i < openmodal.length; i++) {
    openmodal[i].addEventListener('click', () => {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
        console.log(modal.classList.contains('hidden'));

    })
}
overlay.addEventListener('click', closemodalall)
crossbtn.addEventListener('click', closemodalall)
// keyboard event
document.addEventListener('keydown', function (e) {
    // console.log(e);
    // debugger;
    console.log(modal.classList.contains('hidden'));
    if (e.key === 'Escape' && (!modal.classList.contains('hidden'))) {
        closemodalall();
    }
    console.log(modal.classList.contains('hidden'));


})