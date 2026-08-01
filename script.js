// انتخاب آهنگ

const songs = document.querySelectorAll(".song");
const playButtons = document.querySelectorAll(".play");

let selectedSong = 0;

songs.forEach((song, index) => {

    song.addEventListener("click", () => {

        songs.forEach(s => s.classList.remove("active"));

        song.classList.add("active");

        selectedSong = index;

    });

});

// فایل‌های آهنگ

const music = [
    "Born.mp3"
];

const player = new Audio();

playButtons.forEach((button, index) => {

    button.addEventListener("click", (e) => {

        e.stopPropagation();

        if (
            player.src.includes(music[index]) &&
            !player.paused
        ) {

            player.pause();
            button.innerText = "▶ پخش";
            return;

        }

        playButtons.forEach(btn => btn.innerText = "▶ ");

        player.src = music[index];

        player.play();

        button.innerText = "⏸ ";

    });

});

player.onended = () => {

    playButtons.forEach(btn => btn.innerText = "▶ پخش");

};

// دکمه بریم

document
.getElementById("next")
.addEventListener("click",()=>{

    window.location.href = "invite.html";

});
