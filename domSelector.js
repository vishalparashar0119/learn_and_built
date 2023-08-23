console.log("hello world")
document.getElementById("hello")

const  j = document.getElementsByClassName('ello')[1]

const h = document.getElementById("hello");

h.addEventListener("click", hello);
j.addEventListener("click");
function hello (){
    h.innerHTML = "you clicked";
    h.style.backgroundColor = "red";
}

const k = document.getElementById('butt');

k.addEventListener('click',function (){
    alert('you have clicked')
})
