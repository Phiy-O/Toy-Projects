const height = document.getElementById("tinggi");
const weight = document.getElementById("berat");
const age = document.getElementById("age");
const submit = document.getElementById("submit");
const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
const manButton = document.getElementById("man-btn");
const womanButton = document.getElementById("woman-btn");
const gayButton = document.getElementById("gay-btn");
const bmiPage = document.getElementById("bmi-page");
const bmrPage = document.getElementById("bmr-page");
const genderButton = document.getElementById("gender");
const labelAge = document.getElementById("label-age");

// Code
let gender = null;
let curretMode = "bmi";

// Its from gpt (just for pressed styling)
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // hapus class active dari semua button
    buttons.forEach(b => b.classList.remove("active"));
    // kasih class active ke button yang diklik
    btn.classList.add("active");
  });
});
// Close

function bmiCalculation(){
    let bmi = weight.value / ((height.value/100)**2)
    result.innerText = bmi.toFixed(2)

    if (bmi < 18.5) {
        Swal.fire({
            title: "Underweight",
            text: "Berat badan kurang"
        });
    } else if (bmi < 24.9 && bmi > 18.5) {
        Swal.fire({
            title: "Ideal",
            text: "Berat badan Normal"
        });
    } else if (bmi < 29.9 && bmi > 25) {
        Swal.fire({
            title: "Overweight",
            text: "Berat badan Berlebih"
        });
    } else if (bmi >= 30) {
        Swal.fire({
            title: "Obesitas",
            text: "Berat badan Obesitas"
        });
    } else {
        alert("Error")
    }
    
};

function bmrCalculation(){
    let bmr = null

    if (gender == "man"){
        bmr = 88.362 + (13.397 * weight.value) + (4.799 * height.value) - (5.677 * age.value)
    } else if (gender == "woman") {
        bmr = 447.593 + (9.247 * weight.value) + (3.098 * height.value) - (4.330 * age.value)
    } else if (gender == "gay") {
        bmr = "Why you keep fill the input it's just only 2 genders you jerk😂"
    } else {
        bmr = "Error"
    }

    if (bmr) {
        result.innerText = bmr.toFixed(2) + " kcal/day"
    } else {
        alert("pilih gender dulu")
    }
};

bmiPage.addEventListener("click", function(){
    curretMode = "bmi";
    genderButton.style.display = "none"
    labelAge.style.display = "none"

    result.innerText = "Result"
});

bmrPage.addEventListener("click", function(){
    curretMode = "bmr"
    genderButton.style.display = "flex"
    labelAge.style.display = "block"

    result.innerText = "Result"
});

manButton.addEventListener("click", function(){
    gender = "man"
});

womanButton.addEventListener("click", function() {
    gender = "woman"
});

gayButton.addEventListener("click", function() {
    gender = "gay"
    Swal.fire({
        title: "😂",
        text: "Why clicked the Gay🏳️‍🌈 button🤣!"
    });
    console.log("you " + gender + " haha")
});

submit.addEventListener("click", function() {
    if (height.value == "" && weight.value == "") {
        alert("Fill input height & weight")
    } else if (height.value == "") {
        alert("Fill input height")
    }else if (weight.value == "") {
        alert("Fill input weight")
    }

    if (curretMode == "bmi") {
        bmiCalculation()
    } else if (curretMode == "bmr") {
        if (!age.value) {
            alert("isi age value")
        }
        bmrCalculation()
    }

    height.value = ""
    weight.value = ""
    age.value = ""
});