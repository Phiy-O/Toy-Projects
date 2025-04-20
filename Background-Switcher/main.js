var bgWebsite = document.getElementById('bg-web');

function bgSwitch() {
    var randomGenerate = Math.floor((Math.random() * 6) + 1);
    var img = `url('images/bg-${randomGenerate}.jpg')`
    bgWebsite.style.background = img;
    bgWebsite.style.backgroundRepeat = "no-repeat";
    bgWebsite.style.backgroundSize = "cover";   
}

function bgColorSwitch(){
    var colorGenerate = Math.floor(Math.random() * 6);
    var color = ["red", "blue", "pink", "yellow", "green", "purple"];
    var colorBackground = color[colorGenerate];
    bgWebsite.style.background = colorBackground;
}