//Carga asíncrona de información de acciones desde origen local (acciones.json)
let arrayAcciones = [];
$.get('data/acciones.json',function(datos, estado){
  if(estado == 'success'){
      for (const literal of datos) {
        arrayAcciones.push(new Accion(literal.id, literal.ticker, literal.precio, literal.industria, literal.bolsa, literal.ppo, literal.rsi, literal.wma21, literal.D1, literal.ath, literal.ppoReco));
      }
  }
//Ordenar arrays segun propiedades del objeto acción
let targetBolsa = "Todas";
let arrayppo = [...arrayAcciones].sort((a,b)=>a.ppo - b.ppo);
let arrayRsi = [...arrayAcciones].sort((a,b)=>a.rsi - b.rsi);
let arrayWma21 = [...arrayAcciones].sort((a,b)=>a.wma21 - b.wma21);
renderizarTarjetaWMA(arrayWma21,targetBolsa);
renderizarTarjetaPpo(arrayppo,targetBolsa);
renderizarTarjetaRSI(arrayRsi,targetBolsa);
renderizarTarjetaAth(targetBolsa);
renderizarTarjetaSC(targetBolsa);
renderizarTarjetaSV(targetBolsa);
listarFavoritas();
dashCompleto();
generarOpciones();
$("#listadoFavoritas").hide();
});


//Botón Mostrar Favoritas
const mostrarFavoritas = document.getElementById("mostrarFavoritas");
mostrarFavoritas.addEventListener("click", function(){
      constructorTenencias();  
      $("#listadoFavoritas").fadeIn(500);
}) 


//Botón Ocultar Favoritas
const ocultarFavoritas = document.getElementById("ocultarFavoritas");
ocultarFavoritas.addEventListener("click", function(){
    $("#listadoFavoritas").fadeOut(500);
})

//Agregar Favoritas a localstorage
let arrayAccionesFavElegidas = [];
if(localStorage.getItem("arrayAccionesFavElegidas")){
  arrayAccionesFavElegidas = JSON.parse(localStorage.getItem("arrayAccionesFavElegidas"));
}

//Botón Favoritas
checkId = "";
const botonFav = document.getElementById("botonFavoritas");
botonFav.addEventListener("click", function(){
    for (let index = 0; index < arrayAcciones.length; index++) {
        checkId = `check${index}`;
        if (document.getElementById(checkId).checked == true) {
            arrayAccionesFavElegidas.push(arrayAcciones[index]);
            constructorFavoritas();
          }
        else{
          constructorFavoritas();
            } 
    }
    arrayAccionesFavElegidas.length = 0;
    $("#contenedorFavoritas").fadeOut(150).fadeIn(500);
})


//Agregar Tenencias a localstorage
let arrayTenencias = [];
if(localStorage.getItem("arrayTenencias")){
  arrayTenencias = JSON.parse(localStorage.getItem("arrayTenencias"));
}

let idTenencia = 0;

//Botón Agregar Tenencia
const botonTenencia = document.getElementById("botonTenencia");
botonTenencia.addEventListener("click", function(){
  let tickerTenencia = document.getElementById("tickerTenencia").value;
  let cantidadTenencia = document.getElementById("cantidadTenencia").value;
  let precioTenencia = document.getElementById("precioTenencia").value;
  let difprecioTenencia = 0;

  tickerTenencia = tickerTenencia.toUpperCase();
  if (tickerTenencia != "") {  
      for (let i = 0; i < arrayAcciones.length; i++) {
          if (tickerTenencia == arrayAcciones[i].ticker) {
            difprecioTenencia = Math.round((arrayAcciones[i].precio*100/precioTenencia)-100);
        }
      } 
      const tenencia = new Tenencia(idTenencia, tickerTenencia, cantidadTenencia, precioTenencia, difprecioTenencia);
      difprecioTenencia = 0;
      idTenencia +=1;
      arrayTenencias.push(tenencia);
      constructorTenencias();
      $("#listadoTenencia").fadeOut(150).fadeIn(500);
      localStorage.setItem("arrayTenencias",JSON.stringify(arrayTenencias))
  } else {
  alert("Inserte el nombre de una acción");
  }
})

//Botón Mostrar Tenencia
const mostrarTenencia = document.getElementById("mostrarTenencia");
mostrarTenencia.addEventListener("click", function(){
      constructorTenencias();  
      $("#listadoTenencia").show();
}) 


//Botón Ocultar Tenencia
const ocultarTenencia = document.getElementById("ocultarTenencia");
ocultarTenencia.addEventListener("click", function(){
    $("#listadoTenencia").hide();
})



//Borrar tenencia
const borrarTenencia = (e) =>{
  let id = parseInt(e.target.getAttribute("ref"))
  let seleccion = arrayTenencias.find(item => item.id === id);
  let aux = arrayTenencias.filter(el => el.id !== seleccion.id);
  arrayTenencias = aux;
  localStorage.setItem("arrayTenencias",JSON.stringify(arrayTenencias));
  constructorTenencias();

}


//Boton de selección de Bolsa
dashCompleto();
let ul = document.getElementById('btnTipoBolsaItem');
    ul.onclick = function(event) {
      let target = event.target; 
      dashfiltrado(target.innerText);
      let arrayWma21 = [...arrayAcciones].sort((a,b)=>a.wma21 - b.wma21);
      let arrayppo = [...arrayAcciones].sort((a,b)=>a.ppo - b.ppo);
      let arrayRsi = [...arrayAcciones].sort((a,b)=>a.rsi - b.rsi);
      renderizarTarjetaWMA(arrayWma21,target.innerText);
      renderizarTarjetaPpo(arrayppo,target.innerText);
      renderizarTarjetaRSI(arrayRsi,target.innerText);
      renderizarTarjetaAth(target.innerText);
      renderizarTarjetaSC(target.innerText);
      renderizarTarjetaSV(target.innerText);
};


//Animaciones de intro

$(".bodyInd").hide()

$(".spinner").fadeOut(3500);

$(".bodyInd").show(2000).fadeIn(2000);







