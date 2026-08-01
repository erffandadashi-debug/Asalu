const noBtn = document.getElementById("no");

const messages = [
    "من که بهت گفتم فکرشم نکن(:",
    "نه اصلا راه نداره",
    "تلاش نکن دیوونه نمیشه"
];

let count = 0;


noBtn.addEventListener("mouseenter", () => {

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";


    const text = document.createElement("div");

    text.innerText = messages[count % messages.length];

    text.style.position = "fixed";
    text.style.fontSize = "12px";
    text.style.color = "#888";
    text.style.left = Math.random() * 80 + "%";
    text.style.top = Math.random() * 80 + "%";

    document.body.appendChild(text);


    count++;

});


document.getElementById("yes")
.addEventListener("click",()=>{

    window.location.href = "date.html";

});
