emailjs.init("PUBLIC_KEY");


document.getElementById("send")
.addEventListener("click",()=>{


const date = document.getElementById("date").value;

const time = document.getElementById("time").value;


if(!date || !time){

alert("اول تاریخ و ساعت رو انتخاب کن");

return;

}



emailjs.send(
"SERVICE_ID",
"TEMPLATE_ID",
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
