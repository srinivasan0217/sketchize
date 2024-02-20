const cursordot = document.querySelector(".data-cursor-dot");

const cursoroutline = document.querySelector(".data-cursor-outline");

window.addEventListener("mousemove", function (e) {

    const posx = e.clientX;
    const posy = e.clientY;

   cursordot.style.left =`${posx}px`;

    cursordot.style.top =`${posy}px`;
   
    // cursoroutline.style.left =`${posx}px`;
    // cursoroutline.style.top =`${posy}px`;
    cursoroutline.animate({
        left: `${posx}px`,
        top: `${posy}px`
    }, {duration :500,fill:"forwards"});

});

// const body=document.getElementsByTagName('body')
// console.log(body);