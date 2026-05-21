// ==========================
// API
// ==========================

const API_COURSES =
"https://69fc38eafce564e25917870a.mockapi.io/api/v1/courses";

const API_USERS =
"https://69fc38eafce564e25917870a.mockapi.io/api/v1/users";

// ==========================
// CHUYỂN MENU
// ==========================

function showSection(id, el){

    document
    .querySelectorAll('.section')
    .forEach(s => s.classList.remove('active'));

    document
    .querySelectorAll('.nav-link')
    .forEach(n => n.classList.remove('active'));

    document
    .getElementById(id)
    .classList.add('active');

    el.classList.add('active');

    if(id === 'schedule-sec'){

        loadSchedules();

    }else{

        loadUsers();
    }
}

// ==========================
// LOAD SCHEDULE
// ==========================

async function loadSchedules(){

    const res =
    await fetch(API_COURSES);

    const data =
    await res.json();

    document.getElementById(
    'scheduleGrid').innerHTML =

    data.map(item => `

        <div class="item-card">

            <button class="btn-del"
            onclick="deleteItem(
            '${API_COURSES}',
            '${item.id}',
            loadSchedules)">

                ×

            </button>

            <small style="color:var(--primary)">
                👤 ${item.username}
            </small>

            <h3>${item.monhoc}</h3>

            <p>
                ⏰ ${item.thoigian}
            </p>

        </div>

    `).join('');
}

// ==========================
// ADD SCHEDULE
// ==========================

async function addSchedule(){

    const payload = {

        username:
        document.getElementById(
        'sch-user').value,

        monhoc:
        document.getElementById(
        'sch-subject').value,

        thoigian:
        document.getElementById(
        'sch-time').value
    };

    await fetch(API_COURSES, {

        method:'POST',

        headers:{
            'Content-Type':
            'application/json'
        },

        body:JSON.stringify(payload)

    });

    loadSchedules();
}

// ==========================
// LOAD USERS
// ==========================

async function loadUsers(){

    try{

        const res =
        await fetch(API_USERS);

        const data =
        await res.json();

        document.getElementById(
        'userGrid').innerHTML =

        data.map(user => `

            <div class="item-card user-card">

                <button class="btn-del"
                onclick="deleteItem(
                '${API_USERS}',
                '${user.id}',
                loadUsers)">

                    ×

                </button>

                <div style="
                display:flex;
                align-items:center;
                gap:15px">

                    <img src=
                    "https://ui-avatars.com/api/?name=${user.name}&background=random"

                    style="
                    border-radius:50%;
                    width:50px">

                    <div>

                        <h3 style="margin:0">
                            ${user.name}
                        </h3>

                        <p style="
                        margin:0;
                        color:gray">

                            ${user.role || 'Thành viên'}

                        </p>

                    </div>

                </div>

            </div>

        `).join('');

    }catch(e){

        console.log(
        "Chưa có resource users");
    }
}

// ==========================
// ADD USER
// ==========================

async function addUser(){

    const payload = {

        name:
        document.getElementById(
        'u-name').value,

        role:
        document.getElementById(
        'u-role').value
    };

    await fetch(API_USERS, {

        method:'POST',

        headers:{
            'Content-Type':
            'application/json'
        },

        body:JSON.stringify(payload)

    });

    loadUsers();
}

// ==========================
// DELETE ITEM
// ==========================

async function deleteItem(
url,
id,
callback
){

    if(confirm(
    "Bạn có chắc chắn muốn xóa?"
    )){

        await fetch(`${url}/${id}`, {

            method:'DELETE'

        });

        callback();
    }
}

// ==========================
// KHỞI TẠO
// ==========================

loadSchedules();