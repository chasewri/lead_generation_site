const firstImg  = document.querySelector('#first-img');
const secondImg = document.querySelector('#second-img');
const thirdImg  = document.querySelector('#third-img');
const fourthImg = document.querySelector('#fourth-img');
const fifthImg  = document.querySelector('#fifth-img');

firstImg.style.visibility  = 'hidden';
secondImg.style.visibility = 'hidden';
thirdImg.style.visibility  = 'hidden';
fourthImg.style.visibility = 'hidden';
fifthImg.style.visibility  = 'hidden';


const firstImgWP = new Waypoint({
    element: firstImg,
    handler: function(direction) {
        if (direction === 'down') {
            firstImg.classList.add('animate__animated', 'animate__fadeInRight');
            firstImg.style.setProperty('--animate-duration', '1.75s');
            firstImg.style.visibility = 'visible';
        }
    },
    offset: 'bottom-in-view'
});

const secondImgWP = new Waypoint({
    element: secondImg,
    handler: function(direction) {
        if (direction === 'down') {
            secondImg.classList.add('animate__animated', 'animate__fadeInLeft');
            secondImg.style.setProperty('--animate-duration', '1.75s');
            secondImg.style.visibility = 'visible';
        }
    },
    offset: 'bottom-in-view'
});
const thirdImgWP = new Waypoint({
    element: thirdImg,
    handler: function(direction) {
        if (direction === 'down') {
            thirdImg.classList.add('animate__animated', 'animate__fadeInRight');
            thirdImg.style.setProperty('--animate-duration', '1.75s');
            thirdImg.style.visibility = 'visible';
        }
    },
    offset: 'bottom-in-view'
});

const fourthImgWP = new Waypoint({
    element: fourthImg,
    handler: function(direction) {
        if (direction === 'down') {
            fourthImg.classList.add('animate__animated', 'animate__fadeInLeft');
            fourthImg.style.setProperty('--animate-duration', '1.75s');
            fourthImg.style.visibility = 'visible';
        }
    },
    offset: 'bottom-in-view'
});

const fifthImgWP = new Waypoint({
    element: fifthImg,
    handler: function(direction) {
        if (direction === 'down') {
            fifthImg.classList.add('animate__animated', 'animate__fadeInRight');
            fifthImg.style.setProperty('--animate-duration', '1.75s');
            fifthImg.style.visibility = 'visible';
        }
    },
    offset: 'bottom-in-view'
});