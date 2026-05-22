// =====================================
// MENU ACTIVE + SECTION
// =====================================
const links =
document.querySelectorAll(".nav-link[data-target]");


const sections =
document.querySelectorAll(".section");

links.forEach(link=>{

    link.addEventListener("click",()=>{

        links.forEach(item=>
            item.classList.remove("active")
        );

        sections.forEach(sec=>
            sec.classList.remove("active")
        );

        link.classList.add("active");

        const target =
        link.getAttribute("data-target");

        document
        .getElementById(target)
        .classList.add("active");

        clickEffect();

    });

});

// =====================================
// COUNTER ANIMATION
// =====================================
const counters =
document.querySelectorAll(".card h2");

counters.forEach(counter=>{

    let target = +counter.innerText;
    let count = 0;

    const update = ()=>{

        let speed = target / 40;

        count += speed;

        if(count < target){

            counter.innerText =
            Math.floor(count);

            requestAnimationFrame(update);

        }else{

            counter.innerText = target;

        }

    };

    update();

});

// =====================================
// BUTTON EFFECT
// =====================================
document.querySelectorAll(".btn")
.forEach(btn=>{

    btn.addEventListener("click",()=>{

        clickEffect();

        showNotify("🚀 Thao tác thành công!");

    });

});

// =====================================
// CLICK EFFECT
// =====================================
function clickEffect(){

    document.body.animate([

        {filter:"brightness(1)"},
        {filter:"brightness(1.15)"},
        {filter:"brightness(1)"}

    ],{
        duration:250
    });

}

// =====================================
// NOTIFICATION
// =====================================
function showNotify(message){

    const notify =
    document.createElement("div");

    notify.className = "notify";

    notify.innerHTML = `
        <i class="fa-solid fa-bolt"></i>
        ${message}
    `;

    document.body.appendChild(notify);

    setTimeout(()=>{
        notify.classList.add("show");
    },100);

    setTimeout(()=>{

        notify.classList.remove("show");

        setTimeout(()=>{
            notify.remove();
        },500);

    },2500);

}

// =====================================
// NOTIFY STYLE
// =====================================
const style =
document.createElement("style");

style.innerHTML = `

.notify{
    position:fixed;

    top:30px;
    right:-400px;

    padding:18px 28px;

    border-radius:18px;

    background:linear-gradient(
        135deg,
        #2563eb,
        #9333ea,
        #ec4899
    );

    color:white;

    font-weight:700;

    backdrop-filter:blur(10px);

    box-shadow:
    0 10px 35px rgba(0,0,0,0.45);

    z-index:9999;

    transition:0.5s;
}

.notify.show{
    right:30px;
}

.notify i{
    margin-right:10px;
}

`;

document.head.appendChild(style);

// =====================================
// WELCOME EFFECT
// =====================================
window.onload = ()=>{

    showNotify("👑 Welcome To Luxury Admin Dashboard");

};