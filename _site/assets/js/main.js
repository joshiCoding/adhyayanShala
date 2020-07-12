// for menu button
const menu = document.querySelector('.nav-container');

const menuOpenBtn = document.querySelector('.nav-open-btn');
const menuCloseBtn = document.querySelector('.nav-close-btn');


menuOpenBtn.addEventListener('click', e=> {
    menu.classList.add('nav-container-open');
    
})

menuCloseBtn.addEventListener('click', e=> {
    menu.classList.remove('nav-container-open');
})


//for scroll function on enquire button
const enquireBtn = document.querySelector('.enquire');
// const moveToClassInfo = document.querySelector('');

enquireBtn.addEventListener('click', e=>{
    smoothScroll('.teaching-info',400);
});

//copied from stackoverflow
// function smoothScroll(elementId){
//     var MIN_PIXELS_PER_STEP = 16;
//     var MAX_SCROLL_STEPS = 30;
//     var target = document.getElementById(elementId);
//     var scrollContainer = target;
//     do {
//         scrollContainer = scrollContainer.parentNode;
//         if (!scrollContainer) return;
//         scrollContainer.scrollTop += 1;
//     } while (scrollContainer.scrollTop == 0);

//     var targetY = 0;
//     do {
//         if (target == scrollContainer) break;
//         targetY += target.offsetTop;
//     } while (target = target.offsetParent);

//     var pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP,
//                                  (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);

//     var stepFunc = function() {
//         scrollContainer.scrollTop =
//             Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);

//         if (scrollContainer.scrollTop >= targetY) {
//             return;
//         }

//         window.requestAnimationFrame(stepFunc);
//     };

//     window.requestAnimationFrame(stepFunc);
// }

// smooth scroll function of deved
function smoothScroll(target, duration){
    console.log("inside smooth scroll")
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top - 80;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    console.log(targetPosition);
    function animation(currentTime){
        if(startTime == null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);

        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t,b,c,d){
        t /= d/2;
        if(t<1)return c/2*t*t*b;
        t--;
        return -c/2*(t*(t-2)-1)+b;
    }

    requestAnimationFrame(animation);
}


//class type button
const classroomBtn = document.querySelector(".classroom-btn");
const oneononeBtn = document.querySelector('.one-on-one-btn');

const classTypeContainer = document.querySelector('.class-type-container');


console.log(classroomBtn);
console.log(oneononeBtn);
console.log(classTypeContainer);
oneononeBtn.addEventListener('click', e=>{
    classTypeContainer.style.marginLeft = '-100%';

    oneononeBtn.classList.remove('class-type-goto');
    classroomBtn.classList.add('class-type-goto');
});
classroomBtn.addEventListener('click',e =>{
    classTypeContainer.style.marginLeft = '100%';

    oneononeBtn.classList.add('class-type-goto');
    classroomBtn.classList.remove('class-type-goto');
})
