function currentTime() {
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let mon = date.getMonth();
    let curr_date = date.getDate();
    let year = date.getFullYear();
    let month_name = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];;
    let day_name = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let show_day = document.querySelectorAll(".day-wrapper span");
    let midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    curr_date = updateTime(curr_date);
    document.querySelector(".day").innerHTML = `${day_name[day]}`;
    document.querySelector(".date").innerHTML = `${curr_date}`;
    document.querySelector(".month").innerHTML = `${month_name[mon]}`;
    document.querySelector(".year").innerHTML = `${year}`;
    document.querySelector(".hour").innerHTML = `${hour}`;
    document.querySelector(".min").innerHTML = `${min}`;
    document.querySelector(".sec").innerHTML = `${sec}`;
    document.querySelector(".midday").innerHTML = `${midday}`;
}
function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}
setInterval(currentTime, 1000);

const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const body = document.body;

const theme = localStorage.getItem("theme");

if (theme) {
    body.classList.add(theme);
}
if (theme === "dark") {
    darkButton.classList.add("dispn");
    lightButton.classList.remove("dispn");
}
else if (theme === "light") {
    lightButton.classList.add("dispn");
    darkButton.classList.remove("dispn");
}
else {
    body.classList.add("light");
    lightButton.classList.add("dispn");
    darkButton.classList.remove("dispn");
}
const removeAllClasses = () => {
    body.classList.remove(...body.classList.value.split(" "));
};

darkButton.onclick = () => {
    removeAllClasses();
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    darkButton.classList.add("dispn");
    lightButton.classList.remove("dispn");
    document.querySelector(".up-logo img").setAttribute("src", "./images/up_White.png");
    document.querySelector(".footer-img img").setAttribute("src", "./images/up_White.png");
};

lightButton.onclick = () => {
    removeAllClasses();
    body.classList.add("light");
    localStorage.setItem("theme", "light");
    lightButton.classList.add("dispn");
    darkButton.classList.remove("dispn");
    document.querySelector(".up-logo img").setAttribute("src", "./images/up_Black.png");
    document.querySelector(".footer-img img").setAttribute("src", "./images/up_Black.png");
};

let pauseButton = document.querySelector(".pause");
let playButton = document.querySelector(".play");
if(pauseButton){
pauseButton.addEventListener("click", () => {
    pauseButton.classList.add("dispn");
    playButton.classList.remove("dispn");
    document.querySelector(".news-tender-list").style.animationPlayState = "paused";
})
}
if(playButton){
playButton.addEventListener("click", () => {
    playButton.classList.add("dispn");
    pauseButton.classList.remove("dispn");
    document.querySelector(".news-tender-list").style.animationPlayState = "running";
})
}

if(document.querySelector(".important-links-text-container")){
document.querySelector(".important-links-text-container").addEventListener("click", () => {
    importantLinkPopup.classList.toggle("checked");
})
}

if(document.querySelector(".close-popup")){
document.querySelector(".close-popup").addEventListener("click", () => {
    importantLinkPopup.classList.toggle("checked");
})
}

// document.addEventListener("mouseup", (e) => {
//     if (!importantLinkPopupBox.contains(e.target) && importantLinkPopup.classList.contains("checked")) {
//         importantLinkPopup.classList.toggle("checked");
//     }
// });

let sideBar = document.querySelector(".side-bar");
let navBar = document.querySelector(".nav-bar");
let navLink = document.querySelectorAll(".nav-list .nav-link");
let navIcon = document.querySelectorAll(".nav-list .nav-link .nav-icon");
let navLinkText = document.querySelectorAll(".nav-list .nav-link .nav-link-text");
let socialHandle = document.querySelector(".social-handle");
let expandNav = document.querySelectorAll(".expand-nav");
let importantLinkPopup = document.querySelector(".important-link-popup");
let importantLinkPopupBox = document.querySelector(".important-link-popup-box");
for (let i = 0; i < 4; ++i) {
    document.querySelectorAll(".expand-check")[i].addEventListener("mouseover", () => {
        expandNav[i].classList.add("show");
        expandNav[i].classList.remove("hide");
    })
    document.querySelectorAll(".expand-check")[i].addEventListener("mouseout", () => {
        expandNav[i].classList.remove("show");
        expandNav[i].classList.add("hide");
    })
    document.querySelectorAll(".expand-check")[i].addEventListener("click", function (e) {
        e.preventDefault();
    })
    document.querySelectorAll(".expand-check")[i].addEventListener("click", () => {
        expandNav[i].classList.toggle("show");
        expandNav[i].classList.toggle("hide");
    })
}
function showSideMd() {
    sideBar.style.width = "20%";
    socialHandle.style.flexFlow = "row";
    socialHandle.style.opacity = 1;
    socialHandle.style.visibility = "visible";
    socialHandle.style.width = "auto";
    socialHandle.style.position = "relative";
    for (let i = 0; i < 10; ++i) {
        navLink[i].style.justifyContent = "flex-start";
        navLink[i].style.overflow = "hidden";
        navLinkText[i].style.opacity = 1;
        navLinkText[i].style.visibility = "visible";
        navLinkText[i].style.width = "auto";
        navLinkText[i].style.position = "relative";
        navIcon[i].style.opacity = 1;
        navIcon[i].style.visibility = "visible";
        navIcon[i].style.width = "auto";
        navIcon[i].style.position = "relative";
    }
}
function hideSideMd() {
    sideBar.style.width = "10%";
    socialHandle.style.flexFlow = "column";
    socialHandle.style.opacity = 1;
    socialHandle.style.visibility = "visible";
    socialHandle.style.width = "auto";
    socialHandle.style.position = "relative";
    for (let i = 0; i < 10; ++i) {
        navLink[i].style.justifyContent = "center";
        navLink[i].style.overflow = "hidden";
        navLinkText[i].style.opacity = 0;
        navLinkText[i].style.visibility = "hidden";
        navLinkText[i].style.width = 0;
        navLinkText[i].style.position = "relative";
        navIcon[i].style.opacity = 1;
        navIcon[i].style.visibility = "visible";
        navIcon[i].style.width = "auto";
        navIcon[i].style.position = "relative";
    }
}
function showSideSm() {
    sideBar.style.width = "50%";
    socialHandle.style.flexFlow = "row";
    socialHandle.style.opacity = 1;
    socialHandle.style.visibility = "visible";
    socialHandle.style.width = "auto";
    socialHandle.style.position = "relative";
    for (let i = 0; i < 10; ++i) {
        navLink[i].style.justifyContent = "flex-start";
        navLinkText[i].style.opacity = 1;
        navLinkText[i].style.visibility = "visible";
        navLinkText[i].style.width = "auto";
        navLinkText[i].style.position = "relative";
        navIcon[i].style.opacity = 1;
        navIcon[i].style.visibility = "visible";
        navIcon[i].style.width = "auto";
        navIcon[i].style.position = "relative";
    }
}
function hideSideSm() {
    sideBar.style.width = 0;
    socialHandle.style.flexFlow = "column";
    socialHandle.style.opacity = 0;
    socialHandle.style.visibility = "hidden";
    socialHandle.style.width = 0;
    socialHandle.style.position = "relative";
    for (let i = 0; i < 10; ++i) {
        navLink[i].style.justifyContent = "center";
        navLink[i].style.overflow = "hidden";
        navLinkText[i].style.opacity = 0;
        navLinkText[i].style.visibility = "hidden";
        navLinkText[i].style.width = 0;
        navLinkText[i].style.position = "relative";
        navIcon[i].style.opacity = 0;
        navIcon[i].style.visibility = "hidden";
        navIcon[i].style.width = 0;
        navIcon[i].style.position = "relative";
    }
}
function mediafunMd(x) {
    if (x.matches) {
        hideSideMd();
        navBar.addEventListener("mouseover", () => {
            showSideMd();
        });
        navBar.addEventListener("mouseout", () => {
            hideSideMd();
        });
        document.querySelector(".side-bar-expand-btn-md").addEventListener("click", () => {
            if (sideBar.style.width == "10%") {
                showSideMd();
            }
            else {
                hideSideMd();
            }
        })
    }
    else {
        showSideMd();
        navBar.addEventListener("mouseover", () => {
            showSideMd();
        });
        navBar.addEventListener("mouseout", () => {
            showSideMd();
        });
    }
}
function mediafunSm(x) {
    if (x.matches) {
        hideSideSm();
        navBar.addEventListener("mouseover", () => {
            showSideSm();
        });
        navBar.addEventListener("mouseout", () => {
            showSideSm();
        });
        document.querySelector(".side-bar-expand-btn-sm").addEventListener("click", () => {
            if (sideBar.style.width == "0px") {
                showSideSm();
            }
            else {
                hideSideSm();
            }
        })
    }
    else {
        showSideMd();
    }
}

let mediaMd = window.matchMedia("(max-width: 992px)");
mediafunMd(mediaMd);
mediaMd.addListener(mediafunMd);
let mediaSm = window.matchMedia("(max-width: 576px)");
mediafunSm(mediaSm);
mediaSm.addListener(mediafunSm);


mybutton = document.querySelector(".scroll-to-top");
window.onscroll = function () { scrollFunction() };
mybutton.addEventListener("click", () => {
    topFunction();
});
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "inline-block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

for (let i = 0; i < 21; ++i) {
    document.querySelectorAll('.btn-card')[i].addEventListener("mouseover", () => {
        if (document.querySelectorAll('.btn-card')[i].innerHTML === "Read More") {
            document.querySelectorAll('.btn-card')[i].innerHTML = "अधिक पढ़ें"
        } else {
            document.querySelectorAll('.btn-card')[i].innerHTML = "Read More"
        }
    })
    document.querySelectorAll('.btn-card')[i].addEventListener("mouseout", () => {
        if (document.querySelectorAll('.btn-card')[i].innerHTML === "अधिक पढ़ें") {
            document.querySelectorAll('.btn-card')[i].innerHTML = "Read More"
        } else {
            document.querySelectorAll('.btn-card')[i].innerHTML = "अधिक पढ़ें"
        }
    })
}