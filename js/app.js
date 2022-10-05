
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

document.body.firstElementChild.style.color = "blue";

var lista = document.body.getElementsByTagName("li");
    
for (let i = 0; i <= lista.length-1; i++) {
    console.log(lista[i].innerHTML);
    
}

var elementos = [4, 5, 6 ];
elementos.push(4);
console.log(elementos[0]);