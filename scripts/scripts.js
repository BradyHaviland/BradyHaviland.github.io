function defaultMode() {
    document.getElementById('pic').style = "background-color: rgb(92, 163, 205);";
    document.getElementById('copyright').style = "background-color: rgb(92, 163, 205);";
    document.getElementById('projects').style = "background-color: rgb(92, 163, 205);";
    document.getElementById('body').style = "background-color:rgb(240, 203, 133); color: black;" ;
    document.getElementById('h1').style = "background-color: white; color: black;" ;
    document.getElementById('button1').style = "background-color: white; color: black;" ;
    document.getElementById('button2').style = "background-color: white; color: black;" ;
    document.getElementById('button3').style = "background-color: white; color: black;" ;
    
    
}
function darkMode() {
    document.getElementById('pic').style = "background-color: rgb(2, 45, 69); color: rgb(144, 146, 147) ;" ;
    document.getElementById('copyright').style = "background-color: rgb(2, 45, 69); color: rgb(144, 146, 147) ;" ;
    document.getElementById('projects').style = "background-color: rgb(2, 45, 69); color: rgb(144, 146, 147) ;" ;
    document.getElementById('body').style = "background-color: rgb(52, 35, 3); color: rgb(144, 146, 147) ;" ;
    document.getElementById('h1').style = "background-color: black; color: rgb(144, 146, 147);" ;
    document.getElementById('button1').style = "background-color: black; color:rgb(144, 146, 147) ;" ;
    document.getElementById('button2').style = "background-color: black; color:rgb(144, 146, 147) ;" ;
    document.getElementById('button3').style = "background-color: black; color:rgb(144, 146, 147) ;" ;
    
    
    
}

function lightMode() {
    document.getElementById('pic').style = "background-color: rgb(193, 227, 246); color: black;";
    document.getElementById('copyright').style = "background-color: rgb(193, 227, 246); color: black;";
    document.getElementById('projects').style = "background-color: rgb(193, 227, 246); color: black;";
    document.getElementById('body').style = "background-color:rgb(245, 224, 186); color: black;" ;
    document.getElementById('h1').style = "background-color: rgb(205, 207, 208); color: black;" ;
    document.getElementById('button1').style = "background-color: rgb(205, 207, 208); color: black;" ;
    document.getElementById('button2').style = "background-color: rgb(205, 207, 208); color: black;" ;
    document.getElementById('button3').style = "background-color: rgb(205, 207, 208); color: black;" ;
    
}

function getPerimeter() {
    var perimeterL = parseInt(document.getElementById("perimeterL").value);
    var perimeterW = parseInt(document.getElementById("perimeterW").value);
    document.getElementById("perimeterAnswer").innerHTML =  (2 * perimeterL) + (2 * perimeterW);

}

function getArea() {
    var areaL = parseInt(document.getElementById("areaL").value);
    var areaW = parseInt(document.getElementById("areaW").value);
    document.getElementById("areaAnswer").innerHTML =  areaL * areaW;

}

function getVolume() {
     var volumeL = parseInt(document.getElementById("volumeL").value);
     var volumeW = parseInt(document.getElementById("volumeW").value);
     var volumeH = parseInt(document.getElementById("volumeH").value);
     document.getElementById("volumeAnswer").innerHTML =  volumeL * volumeW * volumeH;

}

