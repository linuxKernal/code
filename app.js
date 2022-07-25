const getFunction = (num)=>{
    if(num==1){
        window.location.href = "index.html"
    }else if(num==2){
        window.location.href = "project.html"
    }
    else if(num==3){
        window.location.href = "code.html"
    }
    else if(num==4){
	window.location.href = "aboutPage.html"
    }
    else if(num==5){
	window.location.href = "imageView.html"
    }
}
const basePage = document.getElementById("home");

basePage.addEventListener("click",()=>window.location.href = "index.html");


let div1 = document.getElementById('para');
let div2 = document.getElementById('para1');

const func = ()=>{
	div1.classList.add("graphic");
	div2.classList.add("graphic");

}
const URL = "https://serverlessfunction.herokuapp.com/";


const addviews = async()=>{
  await fetch(`${URL}views`,{method:'POST'})
}


addviews()
