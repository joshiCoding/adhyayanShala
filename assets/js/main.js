//------------for menu button
const menu = document.querySelector('.nav-container');

const menuOpenBtn = document.querySelector('.nav-open-btn');
const menuCloseBtn = document.querySelector('.nav-close-btn');

menuOpenBtn.addEventListener('click', e=> {
    menu.classList.add('nav-container-open');


    document.querySelector('body').addEventListener('click', e=>{
        if(!e.target.classList.contains('nav-container') && menu.clientWidth !== 0){
            menu.classList.remove('nav-container-open');
        }
    })
});




menuCloseBtn.addEventListener('click', e=> {
    menu.classList.remove('nav-container-open');
});


//-----------for scroll function on enquire button------

// const enquireBtn = document.querySelector('.enquire');
// enquireBtn.addEventListener('click', e=>{
//     smoothScroll('.get-in-touch',400);
// });

// const freeDemoBtn = document.querySelector('.book-demo');
// freeDemoBtn.addEventListener('click', e=>{
//     smoothScroll('.get-in-touch',400);
// });

// const feeDetailBtn = document.querySelector('.detailed-fee-enquiry-btn');
// feeDetailBtn.addEventListener('click',e=>{
//     smoothScroll('.get-in-touch',400);
// });

// // smooth scroll function of devEd (perfecto!!!)
// function smoothScroll(target, duration){
//     console.log("inside smooth scroll")
//     var target = document.querySelector(target);
//     var targetPosition = target.getBoundingClientRect().top;
//     var startPosition = window.pageYOffset;
//     var distance = targetPosition - startPosition;
//     var startTime = null;

//     console.log("targetPosition : " + targetPosition);
//     console.log("startPosition : " + startPosition);
//     console.log("distance : " + distance);
//     console.log("startTime : " + startTime);

//     function animation(currentTime){
//         if(startTime == null) startTime = currentTime;
//         var timeElapsed = currentTime - startTime;
//         var run = ease(timeElapsed, startPosition, distance, duration);
//         window.scrollTo(0,run);

//         if(timeElapsed < duration) requestAnimationFrame(animation);
//     }

//     function ease(t,b,c,d){
//         t /= d/2;
//         if(t<1)return c/2*t*t*b;
//         t--;
//         return -c/2*(t*(t-2)-1)+b;
//     }

//     requestAnimationFrame(animation);
// }


// const anchor = document.querySelector(".no-default");
// const enquireBtn = document.querySelector('.enquire');
// anchor.addEventListener('click', e=>{
//     e.preventDefault();
//     console.log("inside anchor");
   
// });

//smooth scroll function of the library smooth scroll
// var scroll1 = new SmoothScroll('.enquire-anchor', {
//     speed : 800,
//     updateURL:false,
//     offset:80
// });
// var scroll2 = new SmoothScroll('.book-demo-anchor', {
//     speed : 800,
//     updateURL:false,
//     offset:80
// });
// var scroll3 = new SmoothScroll('.detailed-fee-enquiry-anchor', {
//     speed : 800,
//     updateURL:false,
//     offset:80
// });
var scroll = new SmoothScroll('.smooth-scroll', {
    speed : 800,
    updateURL:false,
    offset:80
});



//-----------class type button
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


//for showing page active tab
// const classInfo = document.querySelector('.class-info');
// const collection = document.querySelector('.collection');
// const getInTouch = document.querySelector('.get-in-touch');

// const menuList = document.querySelector('.nav-list');

// window.addEventListener('scroll', e=>{
//     console.log(classInfo.getBoundingClientRect().top);
//     console.log(window.pageYOffset);
//     if(classInfo.getBoundingClientRect().top < window.pageYOffset){
//         console.log("you have entered courses");
//        }
//        else if(classInfo.getBoundingClientRect().top + classInfo.clientHeight > window.pageYOffset){

//        }
// })



// if(classInfo.getBoundingClientRect().top < window.pageYOffset){
//  console.log("Yes");
// }
