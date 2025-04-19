var changeCounter = document.getElementById("count");
let counter = 0;

function plus(){    

    if (counter == 50){
        Swal.fire({
            title: "Niat amat lu brok wkwk.",
            icon: "success",
        });
        counter++;
    } else if(counter == 100) {
        Swal.fire({
            title: "Gabut lu ya? wkwk",
            icon: "success",
        });
        counter++;
    } else {
        counter++;
    }
    changeCounter.innerText = counter;

}

function plus5(){    

    if (counter == 50){
        Swal.fire({
            title: "Niat amat lu brok wkwk.",
            icon: "success",
        });
        counter+=5;
    } else if(counter == 100) {
        Swal.fire({
            title: "Gabut lu ya? wkwk",
            icon: "success",
        });
        counter+=5;
    } else {
        counter+=5;
    }
    changeCounter.innerText = counter;

}
function minus(){

    if (counter === 0){
        counter = 0;
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Angka tidak bisa kurang dari 0!",
        });
    } else {
        counter--;
    }
    changeCounter.innerText = counter;

}

function reset(){
    
    counter = 0;
    changeCounter.innerText = counter;

}