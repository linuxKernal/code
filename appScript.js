const titles = document.getElementById("titles");
const master = document.getElementById("program");
const newButn = document.getElementsByClassName("newButn");
const winDiv = document.getElementById("processingDiv");

const URL = "https://code-it-forum.onrender.com"

const copyFunc = (e)=>{
    let ID = e;
    const codeDiv = document.getElementById(`code${ID}`);
    navigator.clipboard.writeText(codeDiv.innerText);   
    newButn[ID-1].innerText = "Copied";
}

let index = 0;
const getCode = async ()=>{
    await fetch(URL+"/sourcecode").then(async res=>{
        return await res.json();
    }).then(response=>{
        for(list of response){
            const linkTag = document.createElement('a');
            const container = document.createElement('div');
            const div = document.createElement('div');
            const temp = document.createElement('br');
            const divTitle = document.createElement('h2');
            const butn = document.createElement('button')
            linkTag.setAttribute("href",`#${++index}`);
            linkTag.append(list.title);
            container.setAttribute("id",`${index}`)
            container.className = "master anchor";
            divTitle.append(list.title);
            titles.append(linkTag);
            div.className = "code";
            div.setAttribute("id",`code${index}`);
            div.append(list.program);
            butn.append("Copy");
            butn.className = "newButn";
            butn.setAttribute("onclick",`copyFunc(${index})`)
            container.append(divTitle);
            container.append(butn); 
            container.append(temp);
            container.append(temp);
            container.append(div);
            master.append(container);
        }
    })
    winDiv.style.display = "none";
    document.body.style.overflowX = "hidden"
    document.body.style.overflowY = "auto"
}

getCode()
