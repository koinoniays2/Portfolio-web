$(document).ready(function () {
// 스크롤 부드럽게
    $('nav a').click(function (e) {
        $.scrollTo(this.hash || 0, 400); // 속도 조절, 숫자가 작을수록 빠름
        e.preventDefault();
    });
// 토글 클릭시 슬라이드
    $("#toggle-icon").click(function () {
        $("#menu-nav").slideToggle(200);
    });
// slick
const postWrapper = document.querySelectorAll(".post-wrapper");
postWrapper.forEach((item, index) => {
    $(item).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $(`.prev-button-${index + 1}`),
            nextArrow: $(`.next-button-${index + 1}`),
        });
    });
});
// 프로젝트 제목
window.addEventListener("load", () => {
    window.addEventListener('scroll', scrollProject);
});

function scrollProject() {
    const header = document.querySelector("#header");
    const headerBottom = header.getBoundingClientRect().bottom;
    const projects = document.querySelectorAll(".project-content");
    const titleP = document.querySelector(".title p");

    projects.forEach((item) => {
        const title = item.querySelector(".project-title > p:nth-child(2)");
        if (item.getBoundingClientRect().top <= headerBottom) {
            titleP.textContent = "";
            titleP.textContent = title.textContent;
            titleP.style.opacity = "1";
        };
    });
    
    if(projects[0].getBoundingClientRect().top > headerBottom ) {
        titleP.style.opacity = "0";
    };
};