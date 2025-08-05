const inputBox = document.getElementById("input-box");
const ul = document.getElementById("ul");

function addElement(newData){
    if (inputBox.value === ""){
        alert("Empty.")
    } else {
        let li = document.createElement("li")
        ul.appendChild(li)

        let span = document.createElement('span');
        span.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        li.appendChild(span)

        let p = document.createElement('p')
        p.textContent = inputBox.value
        li.appendChild(p)
    }
    inputBox.value = ""
    saveData()
}

ul.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    } else if(e.target.tagName === "P"){
        showPrompt(e)
        // let editValue = prompt("Edit value : ")
    } else if(e.target.tagName === "I"){
        e.target.parentElement.parentElement.remove()
        saveData()
    }
}, false);

async function showPrompt(e) {
    const { value: text } = await Swal.fire({
    input: "textarea",
    inputLabel: "Message",
    inputPlaceholder: "Type your message here...",
    inputAttributes: {
        "aria-label": "Type your message here"
    },
    showCancelButton: true
    });
    if (text) {
        e.target.firstChild.nodeValue = text + " ";
        Swal.fire("Berhasil di ubah✅");
        saveData()
    }
}

function saveData(){
    localStorage.setItem("data", ul.innerHTML);
}

function showTask(){
    ul.innerHTML = localStorage.getItem("data");
}
showTask();