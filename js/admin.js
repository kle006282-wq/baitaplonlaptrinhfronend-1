// ===================================
// HIỆN / ẨN PASSWORD
// ===================================
function togglePassword(){

    const password =
    document.getElementById("password");

    const eye =
    document.querySelector(".eye i");

    if(password.type === "password"){

        password.type = "text";

        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");

    }else{

        password.type = "password";

        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");

    }

}

// ===================================
// LOGIN
// ===================================
function login(){

    const username =
    document.getElementById("username")
    .value.trim();

    const password =
    document.getElementById("password")
    .value.trim();

    const role =
    document.getElementById("role")
    .value;

    // KIỂM TRA RỖNG
    if(username === "" || password === ""){

        showNotify(
            "⚠️ Vui lòng nhập đầy đủ thông tin!",
            "error"
        );

        return;
    }

    // ADMIN
    if(username === "admin"
    && password === "123456"){

        localStorage.setItem("isLogin","true");
        localStorage.setItem("user",username);
        localStorage.setItem("role",role);

        showNotify(
            "👑 Đăng nhập Admin thành công!",
            "success"
        );

        setTimeout(()=>{

            window.location.href =
            "index2.html";

        },1500);


        return;
    }

    // STUDENT
    if(username === "student"
    && password === "123456"){

        localStorage.setItem("isLogin","true");
        localStorage.setItem("user",username);
        localStorage.setItem("role",role);

        showNotify(
            "🎓 Đăng nhập Sinh viên thành công!",
            "success"
        );

        setTimeout(()=>{

            window.location.href =
            "index.html";

        },1500);

        return;
    }

      // LECTURER
    if(username === "lecturer"
    && password === "123456"){


        localStorage.setItem("isLogin","true");
        localStorage.setItem("user",username);
        localStorage.setItem("role",role);

        showNotify(
            "🎓 Đăng nhập Giảng viên thành công!",
            "success"
        );

        setTimeout(()=>{

            window.location.href =
            "admin.html";

        },1500);

        return;
    }

    // SAI
    showNotify(
        "❌ Sai tài khoản hoặc mật khẩu!",
        "error"
    );

}

// ===================================
// ENTER LOGIN
// ===================================
document.addEventListener(
"keydown",
function(event){

    if(event.key === "Enter"){

        login();

    }

});

// ===================================
// HOME
// ===================================
function goHome(){

    showNotify(
        "🏠 Đang quay về trang chủ...",
        "success"
    );

    setTimeout(()=>{

        window.location.href =
        "index.html";

    },1200);

}

// ===================================
// FORGOT PASSWORD
// ===================================
function forgotPassword(){

    const email =
    prompt("Nhập email để khôi phục mật khẩu:");

    if(email){

        showNotify(
            "📧 Đã gửi liên kết tới: " + email,
            "success"
        );

    }

}

// ===================================
// NOTIFICATION
// ===================================
function showNotify(message,type){

    const notify =
    document.createElement("div");

    notify.className =
    "notify " + type;

    notify.innerHTML = message;

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

// ===================================
// CSS NOTIFY
// ===================================
const style =
document.createElement("style");

style.innerHTML = `

.notify{
    position:fixed;

    top:30px;
    right:-400px;

    min-width:280px;

    padding:18px 25px;

    border-radius:18px;

    color:white;

    font-weight:600;

    backdrop-filter:blur(10px);

    box-shadow:
    0 10px 30px rgba(0,0,0,0.4);

    transition:0.5s;

    z-index:9999;
}

.notify.show{
    right:30px;
}

.notify.success{
    background:linear-gradient(
        135deg,
        #16a34a,
        #22c55e
    );
}

.notify.error{
    background:linear-gradient(
        135deg,
        #dc2626,
        #ef4444
    );
}

`;

document.head.appendChild(style);