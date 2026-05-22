// ======================================
// CHUYỂN SECTION
// ======================================
function showSection(id, element){

    // ẨN TOÀN BỘ SECTION
    document.querySelectorAll(".section")
    .forEach(sec=>{
        sec.classList.remove("active");
    });

    // XÓA ACTIVE MENU
    document.querySelectorAll(".nav-link")
    .forEach(link=>{
        link.classList.remove("active");
    });

    // HIỆN SECTION
    document.getElementById(id)
    .classList.add("active");

    // ACTIVE MENU
    element.classList.add("active");

    // EFFECT
    clickEffect();

}

// ======================================
// THÊM LỊCH HỌC
// ======================================
function addSchedule(){

    let user =
    document.getElementById("sch-user").value;

    let subject =
    document.getElementById("sch-subject").value;

    let time =
    document.getElementById("sch-time").value;

    if(user === "" || subject === "" || time === ""){

        showNotify("⚠️ Nhập đầy đủ thông tin!");
        return;
    }

    let card = `
    
    <div class="item">

        <h3>${subject}</h3>

        <p>
            <i class="fa-solid fa-user"></i>
            ${user}
        </p>

        <p>
            <i class="fa-solid fa-clock"></i>
            ${time}
        </p>

        <div class="action">

            <button class="small-btn edit">
                Sửa
            </button>

            <button class="small-btn delete"
            onclick="removeCard(this)">

                Xóa

            </button>

        </div>

    </div>
    
    `;

    document.getElementById("scheduleGrid")
    .innerHTML += card;

    // RESET INPUT
    document.getElementById("sch-user").value = "";
    document.getElementById("sch-subject").value = "";
    document.getElementById("sch-time").value = "";

    showNotify("🔥 Thêm lịch học thành công!");

    clickEffect();

}

// ======================================
// THÊM USER
// ======================================
function addUser(){

    let name =
    document.getElementById("u-name").value;

    let role =
    document.getElementById("u-role").value;

    if(name === "" || role === ""){

        showNotify("⚠️ Nhập đầy đủ thông tin!");
        return;
    }

    let card = `
    
    <div class="item">

        <h3>${name}</h3>

        <p>
            <i class="fa-solid fa-briefcase"></i>
            ${role}
        </p>

        <div class="action">

            <button class="small-btn edit">
                Chỉnh sửa
            </button>

            <button class="small-btn delete"
            onclick="removeCard(this)">

                Xóa

            </button>

        </div>

    </div>
    
    `;

    document.getElementById("userGrid")
    .innerHTML += card;

    // RESET
    document.getElementById("u-name").value = "";
    document.getElementById("u-role").value = "";

    showNotify("🚀 Thêm thành viên thành công!");

    clickEffect();

}

// ======================================
// XÓA CARD
// ======================================
function removeCard(btn){

    let card =
    btn.closest(".item");

    card.style.transform = "scale(0)";
    card.style.opacity = "0";

    setTimeout(()=>{
        card.remove();
    },300);

    showNotify("❌ Đã xóa thành công!");

}

// ======================================
// THÔNG BÁO VIP
// ======================================
function showNotify(text){

    let notify =
    document.createElement("div");

    notify.className = "notify";

    notify.innerHTML = `
        <i class="fa-solid fa-bolt"></i>
        ${text}
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

// ======================================
// EFFECT CLICK
// ======================================
function clickEffect(){

    document.body.animate([

        {filter:"brightness(1)"},
        {filter:"brightness(1.15)"},
        {filter:"brightness(1)"}

    ],{
        duration:250
    });

}

// ======================================
// NOTIFY STYLE
// ======================================
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

// ======================================
// LOAD DEMO DATA
// ======================================
window.onload = ()=>{

    document.getElementById("scheduleGrid")
    .innerHTML = `
    
    <div class="item">
        <h3>Lập Trình Web</h3>
        <p><i class="fa-solid fa-user"></i> Nguyễn Văn A</p>
        <p><i class="fa-solid fa-clock"></i> Thứ 2 - 7:00 AM</p>

        <div class="action">
            <button class="small-btn edit">
                Sửa
            </button>

            <button class="small-btn delete"
            onclick="removeCard(this)">
                Xóa
            </button>
        </div>
    </div>

    `;

    document.getElementById("userGrid")
    .innerHTML = `
    
    <div class="item">
        <h3>Trần Văn B</h3>
        <p><i class="fa-solid fa-briefcase"></i> Giảng Viên</p>

        <div class="action">
            <button class="small-btn edit">
                Sửa
            </button>

            <button class="small-btn delete"
            onclick="removeCard(this)">
                Xóa
            </button>
        </div>
    </div>

    `;

    showNotify("👑 Welcome To Luxury Admin System");

};