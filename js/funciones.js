//Constructor de rankings de indicadores 


function renderizarTarjetaWMA(arrayWma21, target) {
  const contWma = document.getElementById("contWma");
  let acumulador = "";
  acumulador = `<div class="tarjetas">
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    <p class="h5">%WMA21</p>
    </div>
    <ul class="list-group list-group-flush">
    <table>`
  if (target == "Todas") {
    acumulador += `
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayWma21[0].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayWma21[0].wma21}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayWma21[1].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayWma21[1].wma21}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayWma21[2].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayWma21[2].wma21}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayWma21[3].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayWma21[3].wma21}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayWma21[4].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayWma21[4].wma21}</span></td></tr></li>
          `;
  }
  let pase = 0;
  for (let index = 0; index < arrayWma21.length; index++) {

    if (target == arrayWma21[index].bolsa && pase <= 4) {
      pase += 1;
      acumulador += `
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayWma21[index].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayWma21[index].wma21}</span></td></tr></li>`
        
    }
  };
  acumulador += `</table></ul>
                  </div>
                  </div>`
  contWma.innerHTML = acumulador;
};


function renderizarTarjetaMACD(arrayMacd, target) {
  const contMacd = document.getElementById("contMacd");
  let acumulador = "";
  acumulador = `<div class="tarjetas">
    <div class="card" style="width: 18rem">
    <div class="card-header">
    <p class="h5">PPO</p>
    </div>
    <ul class="list-group list-group-flush">
    <table>`
  if (target == "Todas") {
    acumulador += `
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayMacd[0].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayMacd[0].macd}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayMacd[1].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayMacd[1].macd}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayMacd[2].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayMacd[2].macd}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayMacd[3].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayMacd[3].macd}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayMacd[4].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayMacd[4].macd}</span></td></tr></li>
          `
  }
  let pase = 0;
  for (let index = 0; index < arrayMacd.length; index++) {

    if (target == arrayMacd[index].bolsa && pase <= 4) {
      pase += 1;
      acumulador += `
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayMacd[index].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayMacd[index].macd}</span></td></tr></li>`
        
    }
  };
  acumulador += `</table></ul>
                  </div>
                  </div>`
  contMacd.innerHTML = acumulador;
};



function renderizarTarjetaRSI(arrayRsi, target) {
  const contRsi = document.getElementById("contRsi");
  let acumulador = "";
  acumulador = `<div class="tarjetas">
      <div class="card" style="width: 18rem;">
      <div class="card-header">
      <p class="h5">RSI</p>
      </div>
      <ul class="list-group list-group-flush">
      <table>`
  if (target == "Todas") {
    acumulador += `
            <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayRsi[0].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayRsi[0].rsi}</span></td></tr></li>
            <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayRsi[1].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayRsi[1].rsi}</span></td></tr></li>
            <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayRsi[2].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayRsi[2].rsi}</span></td></tr></li>
            <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayRsi[3].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayRsi[3].rsi}</span></td></tr></li>
            <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayRsi[4].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayRsi[4].rsi}</span></td></tr></li>
            `
  }
  let pase = 0;
  for (let index = 0; index < arrayRsi.length; index++) {

    if (target == arrayRsi[index].bolsa && pase <= 4) {
      pase += 1;
      acumulador += `
            <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayRsi[index].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayRsi[index].rsi}</span></td></tr></li>`
        
    }
  };
  acumulador += `</table></ul>
                    </div>
                    </div>`
  contRsi.innerHTML = acumulador;
};


//Listado y elección de acciones favoritas
function listarFavoritas() {
  const listadoFavoritas = document.getElementById("listadoFavoritas");
  let liId = ""
  let acumuladorFav = '<ul class="list-group listadoFavoritasContenedor">'
  for (let index = 0; index < arrayAcciones.length; index++) {
    checkId = `check${index}`;
    acumuladorFav += `
        <li class="list-group-item listadoFavoritas">
        <input id="${checkId}" class="form-check-input me-1" type="checkbox" value="" aria-label="...">
        ${arrayAcciones[index].ticker}
        </li>
        `
  }
  acumuladorFav += '</ul>'
  listadoFavoritas.innerHTML = acumuladorFav;
}


//Contenedor de Favoritas
const constructorFavoritas = function () {
  const contenedorFavoritas = document.getElementById("contenedorFavoritas");
  let acumuladorFavElegidas = `<div class="tarjetas">
                                <div class="card tarjetasFav">
                                <div class="card-header">
                                Acciones Favoritas
                                </div>
                                <ul class="list-group list-group-flush"><table>`

  for (let index = 0; index < arrayAccionesFavElegidas.length; index++) {
    acumuladorFavElegidas += `
            <tr><td><li class="list-group-item">${arrayAccionesFavElegidas[index].ticker}</td><td>   Precio: ${arrayAccionesFavElegidas[index].precio}</td><td>    PPO: ${arrayAccionesFavElegidas[index].macd}</td><td> RSI: ${arrayAccionesFavElegidas[index].rsi}</td><td> %WMA21: ${arrayAccionesFavElegidas[index].wma21} </li></td></tr>
            `
  }
  acumuladorFavElegidas += `</table></ul></div></div>`
  if (arrayAccionesFavElegidas.length > 0) {
    contenedorFavoritas.innerHTML = acumuladorFavElegidas;
  }
  else {
    contenedorFavoritas.innerHTML = ``;
  }
  localStorage.setItem("arrayAccionesFavElegidas", JSON.stringify(arrayAccionesFavElegidas))
}


//Contenedor de Tenencias
const constructorTenencias = function () {
  const contenedorTenencia = document.getElementById("listadoTenencia");
  let acumuladorTenencia = `<div class="tarjetas">
                                <div class="contenedorTenencia card">
                                <div class="card-header">
                                Tenencia en Cartera
                                </div>
                                <ul class="list-group list-group-flush">`
  for (let index = 0; index < arrayTenencias.length; index++) {

    if (arrayTenencias[index].difprecioTenencia >= 0) {
      acumuladorTenencia += `
                      <li class="list-group-item">Ticker: ${arrayTenencias[index].ticker}  Cantidad: ${arrayTenencias[index].cantidad} Precio: ${arrayTenencias[index].precio} Variación: <span class="badge bg-success">${arrayTenencias[index].difprecioTenencia}%</span>
                      `
    } else {
      acumuladorTenencia += `
                  <li class="list-group-item">Ticker: ${arrayTenencias[index].ticker}  Cantidad: ${arrayTenencias[index].cantidad} Precio: ${arrayTenencias[index].precio} Variación: <span class="badge bg-danger">${arrayTenencias[index].difprecioTenencia}%</span>
                  `
    }
    //Botón Borrar
    acumuladorTenencia +=
      `<button type="button" ref=${arrayTenencias[index].id} class="btnBorrar btn-close" aria-label="Cerrar"></button></li>`;
  }

  acumuladorTenencia += `</ul></div></div>`
  contenedorTenencia.innerHTML = acumuladorTenencia;

  //Quitar tenencia
  btnBorrar = document.querySelectorAll(".btnBorrar");
  btnBorrar.forEach(el => el.addEventListener("click", borrarTenencia));
  if (arrayTenencias.length == 0) {
    contenedorTenencia.innerHTML = "";
  }
}


//Dashboard con todas las bolsas de acciones
function dashCompleto() {
  $("#dashAccionesFilt").remove();
  $("#dashAcciones").remove();
  let arrayBolsas = [...arrayAcciones].sort((a, b) => b.D1 - a.D1);

  let contenedorTodas =
    `<div id="dashAcciones" class="tarjetas bolsaAcc">
                      <div class="contenedorAcciones card">
                      <div class="card-header">
                      <h3>Bolsa de acciones</h3></div>
                      <ul class="list-group list-group-flush">
                      <table>`

  for (let index = 0; index < arrayBolsas.length; index++) {
    switch (true) {
      case (arrayBolsas[index].D1 >= 0.5):
        contenedorTodas += `<tr><td><li class="list-group-item rengAcc"><span class="badge rounded-pill bg-light text-dark">${arrayBolsas[index].ticker}</span> </td> <td>${arrayBolsas[index].industria}</td> <td> <span class="badge bg-success"> ${arrayBolsas[index].D1}%</span></li></td></tr>`
        break;
      case (arrayBolsas[index].D1 < 0.5 && arrayBolsas[index].D1 >= -0.5):
        contenedorTodas += `<tr><td><li class="list-group-item rengAcc"><span class="badge rounded-pill bg-light text-dark">${arrayBolsas[index].ticker}</span> </td> <td>${arrayBolsas[index].industria}</td> <td> <span class="badge bg-warning"> ${arrayBolsas[index].D1}%</span></li></td></tr>`
        break;
      case (arrayBolsas[index].D1 < -0.5):
        contenedorTodas += `<tr><td><li class="list-group-item rengAcc"><span class="badge rounded-pill bg-light text-dark">${arrayBolsas[index].ticker}</span> </td> <td>${arrayBolsas[index].industria}</td> <td> <span class="badge bg-danger"> ${arrayBolsas[index].D1}%</span></li></td></tr>`
        break;
    }
  }
  contenedorTodas += '</table>';
  $(".bodyInd").append(contenedorTodas);
};

//Dashboard de bolsas de acciones filtrado por tipo de bolsa
function dashfiltrado(target) {
  $("#dashAccionesFilt").remove();
  $("#dashAcciones").remove();
  let arrayBolsas = [...arrayAcciones].sort((a, b) => b.D1 - a.D1);
  let contenedorFiltrado =
    `<div id="dashAcciones" class="tarjetas bolsaAcc">
                      <div class="contenedorAcciones card">
                      <div class="card-header">
                      <h3>Bolsa de acciones</h3></div>
                      <ul class="list-group list-group-flush">
                      <table>`
  if (target == "Todas") {
    dashCompleto();
  } else {
    for (let index = 0; index < arrayBolsas.length; index++) {


      switch (true) {
        case (arrayBolsas[index].D1 >= 0.5):
          if (target == arrayBolsas[index].bolsa) {
            contenedorFiltrado += `<tr><td><li class="list-group-item rengAcc"><span class="badge rounded-pill bg-light text-dark">${arrayBolsas[index].ticker}</span> </td> <td>${arrayBolsas[index].industria}</td> <td> <span class="badge bg-success"> ${arrayBolsas[index].D1}%</span></li></td></tr>`
          }
          break;
        case (arrayBolsas[index].D1 < 0.5 && arrayBolsas[index].D1 >= -0.5):
          if (target == arrayBolsas[index].bolsa) {
            contenedorFiltrado += `<tr><td><li class="list-group-item rengAcc"><span class="badge rounded-pill bg-light text-dark">${arrayBolsas[index].ticker}</span> </td> <td>${arrayBolsas[index].industria}</td> <td> <span class="badge bg-warning"> ${arrayBolsas[index].D1}%</span></li></td></tr>`
          }
          break;
        case (arrayBolsas[index].D1 < -0.5):
          if (target == arrayBolsas[index].bolsa) {
            contenedorFiltrado += `<tr><td><li class="list-group-item rengAcc"><span class="badge rounded-pill bg-light text-dark">${arrayBolsas[index].ticker}</span> </td> <td>${arrayBolsas[index].industria}</td> <td> <span class="badge bg-danger"> ${arrayBolsas[index].D1}%</span></li></td></tr>`
          }
          break;
      }

    }
    contenedorFiltrado += '</table>';
    $(".bodyInd").append(contenedorFiltrado);
  }

};



//Función para generar en el DOM las opciones del select de Bolsa
function generarOpciones() {
  let arrayTipoBolsas = ["Índices", "Cedears", "NYSE", "Líder", "General", "Crypto", "ADR"];
  let padre = document.getElementById("btnTipoBolsaItem");
  let inner = "";
  for (const elemento of arrayTipoBolsas) {
    inner += `<li id="${elemento}" class="dropdown-item">${elemento}</li>`;
  }
  padre.innerHTML = inner;
  padre = document.getElementById("btnTipoBolsaItem");
  inner += `<li><hr class="dropdown-divider">
                <li id="Todas" class="dropdown-item">Todas</li>`;
  padre.innerHTML = inner;
}




