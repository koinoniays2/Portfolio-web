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
})
function scrollProject() {
    const header = document.querySelector("#header");
    const projectGuild = document.querySelector("#project .project-1");
    const titleGuild = document.querySelector("#project .title > p:nth-child(2)");
    // const projectOndog = document.querySelector("#project .project-2");
    // const titleOndog = document.querySelector("#project .title > p:nth-child(3)");

    const headerBottom = header.getBoundingClientRect().bottom;
    if (projectGuild.getBoundingClientRect().top <= headerBottom) {
        titleGuild.style.opacity = "1";
    } else {
        titleGuild.style.opacity = "0";
    };

    // if (projectOndog.getBoundingClientRect().top <= headerBottom) {
    //     titleGuild.style.opacity = "0";
    //     titleGuild.style.display = "none";
    //     titleOndog.style.display = "block";
    //     setTimeout(() => {
    //         titleOndog.style.opacity = "1";
    //     }, 200);
    // } else {
    //     titleOndog.style.opacity = "0";
    //     titleOndog.style.display = "none";
    //     titleGuild.style.display = "block";
    // };
}