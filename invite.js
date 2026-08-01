const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseenter", () => {

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);

    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});


const yesBtn = document.getElementById("yes");

yesBtn.addEventListener("click", () => {

    alert("یییییییییییییییییییییییییییییییییییی 🤍");

});
