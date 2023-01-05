let text = document.querySelector(".landing .text");

document.querySelector(".navbar button").onclick = function () {
  text.style.top = "65%";
};

// random image

let landing = document.querySelector(".landing");
let random;
let imgss;

function bginterval() {
  imgss = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
  random = setInterval(() => {
    let randomnumber = Math.floor(Math.random() * 4);
    landing.style.backgroundImage = `url(../JS-SPECIAL-DESIGN/imgs/${imgss[randomnumber]})`;
  }, 10000);
}
bginterval();

// select box
let spin = document.querySelector(".spin");
let gear = document.querySelector(".fa-gear");
let sid = document.querySelector(".side");

spin.onclick = function () {
  gear.classList.toggle("fa-spin");
  sid.classList.toggle("open");
};

// colors

let lis = document.querySelectorAll(".colors li");
if (localStorage.color != "") {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.color
  );
  lis.forEach((li) => {
    li.classList.remove("active");
    li.dataset.color;
    if (li.dataset.color === localStorage.color) {
      li.classList.add("active");
    }
  });
}

lis.forEach((li) => {
  li.onclick = function (e) {
    lis.forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");

    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color", e.target.dataset.color);
  };
});

// random

let yn = document.querySelectorAll(".random button");

yn.forEach((el) => {
  el.onclick = function (e) {
    yn.forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.dataset.bg === "yes") {
      bginterval();
      localStorage.setItem("bg", e.target.dataset.bg);
    } else {
      clearInterval(random);
      localStorage.setItem("bg", e.target.dataset.bg);
    }
  };
});

// Animation
let skills = document.querySelectorAll(".ourskills .box div span");

window.onscroll = function () {
  if (scrollY > 900) {
    skills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// overlay

let images = document.querySelectorAll(".gellary .images img");
images.forEach((image) => {
  image.onclick = (e) => {
    let div = document.createElement("div");
    div.classList.add("overlay");
    document.body.appendChild(div);
    //img
    let imgdiv = document.createElement("div");
    imgdiv.classList.add("imgdiv");
    let img = document.createElement("img");
    img.src = e.target.src;
    imgdiv.append(img);
    document.body.append(imgdiv);
    //close

    let h3 = document.createElement("h3");
    let text = document.createTextNode(e.target.alt);
    h3.append(text);
    imgdiv.prepend(h3);
    //
    let span = document.createElement("span");
    let sptext = document.createTextNode("x");
    span.append(sptext);

    imgdiv.append(span);
    span.onclick = function () {
      // div.style.display = "none";
      // imgdiv.style.display = "none";
      div.remove();
      imgdiv.remove();
    };
  };
});
