const secondImg = document.querySelector('#second-img');
const firstImg = new Waypoint({
    element: document.querySelector('#first-img'),
    handler: function() {
        console.log('hit it') 
    },
    offset: 'bottom-in-view'
})

const secondImgWP = new Waypoint({
    element: secondImg,
    handler: function(direction) {
        if (direction === 'down') {
            secondImg.classList.add('animate__animated', 'animate__fadeInLeft')
            secondImg.style.setProperty('--animate-duration', '2.25s')
        }

        
    },
    offset: 'bottom-in-view'
})