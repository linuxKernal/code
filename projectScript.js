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
}
document.body.style.overflow = "hidden"

const basePage = document.getElementById("home");

basePage.addEventListener("click",()=>window.location.href = "index.html");


let date = new Date();
const inputData = document.getElementById("postText");

const butn = document.getElementById("butn");
const div = document.getElementById("newPost");

let data = "";

butn.innerText = "Post";

const printData = ()=>{
  butn.innerText = "Post";
  inputData.value = "";
  div.innerText = "";
  for(let ptr of data){
    const newDiv = document.createElement('div')
    newDiv.className = "text";
    newDiv.append(ptr.data);
    div.append(newDiv);
  }
}

const URL = "https://serverlessfunction.herokuapp.com/";
const winDiv = document.getElementById("processingDiv");

const getPostData = async ()=>{
await fetch(URL+"getpost",{})
.then(async function(response) {
data = await response.json();
printData();
}).catch(function(err) {
console.log("ERROR found while get post",err);
});
winDiv.style.display = "none";
document.body.style.overflow = "auto"
}


const sendPost = async (e)=>{
  
  if(inputData.value!=" " && inputData.value!=""){
      butn.innerText = "Post...";
  await fetch(`${URL}addpost?data=${inputData.value}&time=${date.toLocaleString('en-US')}`)
  .then((hi)=>{
    getPostData();
    
    console.log("successfully posted");
  }).catch(err=>{
    console.log("ERROR: ",err);
  })
}
}


butn.addEventListener("click",sendPost);

getPostData();

const addviews = async()=>{
  await fetch(`${URL}views`,{method:'POST'})
}


addviews()
