emailjs.init("ih63wIv-Gcdt6yBT6");


document.getElementById("send")
.addEventListener("click",()=>{


const date = document.getElementById("date").value;

const time = document.getElementById("time").value;


if(!date || !time){

alert("اول تاریخ و ساعت رو انتخاب کن");

return;

}



emailjs.send(
"iimnotERFF",
"template_10luli7",
{

date: date,

time: time

}

)
.then(()=>{

alert("ثبت شد 🤍");

})
.catch(()=>{

alert("یه مشکلی پیش اومد");

});


});
