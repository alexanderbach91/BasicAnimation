const btn = document.querySelector('.btn');
let timerId,
    counter = 0;
let pos = 0;
const box = document.querySelector('.box');

// function myAnimation() {
//     
//     let pos = 0;

//     let id = setInterval(frame, 10);

//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             box.style.top = pos + `px`;
//             box.style.left = pos + `px`;
//         }
//     }
// }

// btn.addEventListener('click' , () => {
//     myAnimation();
// });

// btn.addEventListener('click' , () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 2000);
// });



// function logger() {
//     if (counter === 3) {
//         clearInterval(timerId);
//     }
//     console.log('test');
//     counter++;
// }

//рекурсивный setTimeout
// let id = setTimeout(function log() {
//     console.log("Testing");
//     id = setTimeout(log, 500);
// },500 );


//request animation frame

function myAnimation() {
    pos++;
    box.style.top = pos + `px`;
    box.style.left = pos + `px`;

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }

}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);