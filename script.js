const resetBtn = document.querySelector('.reset');
let cant = parseInt(document.getElementById("Cantidad").value);
let desc;
let enviar = document.getElementById("resumen");
let total=document.getElementById("Pagar");

function PorcDesc (categoria){
    switch(categoria) {
        case "Estudiante":
            desc = 0.2
            console.log(desc);
            break;
        case "Trainee":
            desc = 0.5
            console.log(desc);
            break;
        case "Junior":
            desc = 0.85
            console.log(desc);
            break;
        default:
            console.log("Eso no es valido");
    }
    return desc;
}



function calculate (evt) {
    
    cant = parseInt(document.getElementById("Cantidad").value);
    
    desc=PorcDesc(document.getElementById("Categoria").value);
    
   
    
    let tot = parseFloat(200*cant*desc);
   
    total.value="Total a Pagar: "+tot+" $";
    }



resumen.onclick=calculate;


resetBtn.addEventListener('click', () => {
  window.location.reload();
});