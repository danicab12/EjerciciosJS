
//Ejercicio 1:
document.getElementById="cuadro";
    document.body.style.backgroundColor = "aquamarine";
    document.body.style.fontFamily = "Arial";
    document.body.style.color = "red";
    cuadro.style.border = "3px solid";

    const cambioColor = setInterval(setColor, 30000);
    
    function setColor() {
        var fondo=Math.floor(Math.random() * 8);
        switch (fondo) {
            case 0:
                document.body.style.backgroundColor = "black";
                break;
                case 1:
                    document.body.style.backgroundColor = "orange";
                    break;
                    case 2:
                        document.body.style.backgroundColor = "yellow";
                        break;
                        case 3:
                            document.body.style.backgroundColor = "pink";
                            break;
                            case 4:
                                document.body.style.backgroundColor = "green";
                                break;
                                case 5:
                                    document.body.style.backgroundColor = "white";
                                    break;
                                    case 6:
                                        document.body.style.backgroundColor = "purple";
                                        break;
                                        case 7:
                                            document.body.style.backgroundColor = "blue";
                                            break;
            default:
                break;
        }
    }

//Ejercicio 2:

document.body.firstElementChild.style.color = "";

//Ejercicio de añadir a la lista

var lista3 = document.getElementById("lista");
for(i=4;i<=6;i++){
    var li = document.createElement("li");
    var li1Texto = document.createTextNode("object "+i);
    li.appendChild(li1Texto);
    lista3.appendChild(li);
}

//Ejercicio de la tabla

var tabla = document.getElementById("tabla").firstElementChild;
var nombres = tabla.firstElementChild.children[1];

for(i=0;i<=2;i++){
    nombres.children[i].innerHTML=Math.floor(Math.random()*101);
}

//Ejercicio de QuerySelector

const enlaces = document.querySelectorAll(".enlace");
for(i=0;i<enlaces.length;i++){
    enlaces[i].style.backgroundColor = "Green";
}