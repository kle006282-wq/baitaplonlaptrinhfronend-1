const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

links.forEach(link => {

    link.addEventListener("click", () => {

        // XÓA ACTIVE MENU
        links.forEach(item => {
            item.classList.remove("active");
        });

        // ACTIVE MENU ĐƯỢC CLICK
        link.classList.add("active");

        // ẨN TẤT CẢ SECTION
        sections.forEach(section => {
            section.classList.remove("active");
        });

        // HIỆN SECTION ĐƯỢC CHỌN
        const target = link.getAttribute("data-target");

        document
        .getElementById(target)
        .classList.add("active");

    });

});