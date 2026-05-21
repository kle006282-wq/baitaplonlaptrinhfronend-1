// ==========================
// HIỆN / ẨN PASSWORD
// ==========================
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

// ==========================
// ĐĂNG NHẬP
// ==========================
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

        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // ADMIN
    if(username === "admin"
    && password === "123456"){

        alert("Đăng nhập Admin thành công!");

        localStorage.setItem("user", username);
        localStorage.setItem("role", role);

        window.location.href =
        "ajaxStudy.html";

        return;
    }

    // STUDENT
    if(username === "student"
    && password === "123456"){

        alert("Đăng nhập Sinh viên thành công!");

        localStorage.setItem("user", username);
        localStorage.setItem("role", role);

        window.location.href =
        "ajaxStudy.html";

        return;
    }

    // SAI
    alert("Sai tài khoản hoặc mật khẩu!");
}

// ==========================
// ENTER ĐỂ LOGIN
// ==========================
document.addEventListener(
    "keydown",
    function(event){

    if(event.key === "Enter"){

        login();
    }
});

// ==========================
// TRANG CHỦ
// ==========================
function goHome(){

    alert("Đang quay về trang chủ!");

    window.location.href =
    "index.html";
}

// ==========================
// QUÊN MẬT KHẨU
// ==========================
function forgotPassword(){

    const email =
    prompt("Nhập email để nhận lại mật khẩu:");

    if(email){

        alert(
        "Đã gửi link khôi phục tới:\n"
        + email
        );
    }
}