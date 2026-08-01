const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

const messages = [
    "من که بهت گفتم فکرشم نکن(:",
    "نه اصلا راه نداره",
    "تلاش نکن دیوونه نمیشه"
];

let count = 0;


noBtn.addEventListener("mouseenter", () => {

    const parent = noBtn.parentElement;

    const x = Math.random() * 120 - 60;
    const y = Math.random() * 80 - 40;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;


    const text = document.createElement("span");

    text.innerText = messages[count % messages.length];

    text.className = "no-message";

    noBtn.parentElement.appendChild(text);


    count++;

});


yesBtn.addEventListener("click", () => {

    window.location.href = "date.html";

});
