
const alertBox = document.getElementById("alertbox");
const alertMessage = document.getElementById("alertMsg");
const butn = document.getElementById("butn");
function alertFunc(str){
    alertMessage.innerText = str;
    if(alertBox.style.display=="none") alertBox.style.display = "";
    else{
        alertBox.style.display = "none";
        window.location.href = "index.html"
    }
}

const options = {hour12:true};

const temp = async (param)=>{
    butn.innerText = "loading...";
    let date = new Date();
    const title = param.title.value.trim();
    const note = param.note.value.trim();
    const code = param.code.value.trim();
    await fetch("https://code-it-forum.onrender.com/codebase",{method:'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title:title,program:code,time:date.toLocaleString('en-GB', options),note:note})
    })
    .then(async res=>{
        butn.innerText = "Done";
        return await res.json();
    })
    .then(data=>{
        alertFunc(data.msg);
    })
    .catch(err=>{
        alertFunc(err)
    })
}
