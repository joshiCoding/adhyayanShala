
const menu = document.querySelector('.nav-container');

const menuOpenBtn = document.querySelector('.nav-container-open');
const menuCloseBtn = document.querySelector('.nav-container-close');


menuOpenBtn.addEventListener('click', e=> {
    menu.classList.add('nav-container-open');
})

menuCloseBtn.addEventListener('click', e=> {
    menu.classList.remove('nav-container-open');
})


//for scroll function on enquire button
const enquireBtn = document.querySelector('.enquire');
// const moveToClassInfo = document.querySelector('');
console.log(enquireBtn);

enquireBtn.addEventListener('click', e=>{
    smoothScroll('info-get');
});

//copied from stackoverflow
function smoothScroll(elementId){
    var MIN_PIXELS_PER_STEP = 16;
    var MAX_SCROLL_STEPS = 30;
    var target = document.getElementById(elementId);
    var scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    var pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP,
                                 (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);

    var stepFunc = function() {
        scrollContainer.scrollTop =
            Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);

        if (scrollContainer.scrollTop >= targetY) {
            return;
        }

        window.requestAnimationFrame(stepFunc);
    };

    window.requestAnimationFrame(stepFunc);
}