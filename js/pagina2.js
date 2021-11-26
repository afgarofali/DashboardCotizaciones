//Carga asíncrona de información de acciones desde origen local (acciones.json)
let arrayAcciones = [];
let arrayIndicadores = [];
$.get('data/acciones.json',function(datos, estado){
  if(estado == 'success'){
      for (const literal of datos) {
        arrayAcciones.push(new Accion(literal.id, literal.ticker, literal.precio, literal.industria, literal.bolsa, literal.ppo, literal.rsi, literal.wma21, literal.D1));
      }
  }

//Ordenar arrays segun propiedades del objeto acción
let arrayppo = [...arrayAcciones].sort((a,b)=>a.ppo - b.ppo);
let arrayRsi = [...arrayAcciones].sort((a,b)=>a.rsi - b.rsi);
let arrayWma21 = [...arrayAcciones].sort((a,b)=>a.wma21 - b.wma21);
arrayIndicadores = [arrayppo,arrayRsi,arrayWma21];
renderizarTarjetaWMA(arrayWma21);
renderizarTarjetappo(arrayppo);
renderizarTarjetaRSI(arrayRsi);
});



function renderizarTarjetaWMA(arrayWma21,target) {
    
const contWma = document.getElementById("contWma");
    let acumulador = '<div class="tarjetas">';
      acumulador += `
          <div class="card" style="width: 18rem;">
          <div class="card-header">
          WMA21
          </div>
          <ul class="list-group list-group-flush">
          <table>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayWma21[0].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayWma21[0].wma21}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayWma21[1].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayWma21[1].wma21}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayWma21[2].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayWma21[2].wma21}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayWma21[3].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayWma21[3].wma21}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayWma21[4].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayWma21[4].wma21}</span></td></tr></li>
          </table></ul>
        </div>`;
    acumulador += '</div>';
    contWma.innerHTML = acumulador;
};

function renderizarTarjetappo(arrayppo,target) {
    const contppo = document.getElementById("contppo");
    let acumulador = '<div class="tarjetas">';

      acumulador += `
          <div class="card" style="width: 18rem;">
          <div class="card-header">
          ppo
          </div>
          <ul class="list-group list-group-flush">
          <table>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayppo[0].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayppo[0].wma21}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayppo[1].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayppo[1].wma21}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayppo[2].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayppo[2].wma21}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayppo[3].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayppo[3].wma21}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayppo[4].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayppo[4].wma21}</span></td></tr></li>
          </table></ul>
        </div>`;
    acumulador += '</div>';
    contppo.innerHTML = acumulador;
};

function renderizarTarjetaRSI(arrayRsi,target) {
    const contRsi = document.getElementById("contRsi");
    let acumulador = '<div class="tarjetas">';

      acumulador += `
          <div class="card" style="width: 18rem;">
          <div class="card-header">
          
          </div>
          <ul class="list-group list-group-flush">
          <table>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayRsi[0].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayRsi[0].wma21}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayRsi[1].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayRsi[1].wma21}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayRsi[2].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayRsi[2].wma21}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayRsi[3].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayRsi[3].wma21}</span></td></tr></li>
          <tr><td><li class="list-group-item cardInd"><span class="badge bg-light text-dark">${arrayRsi[4].ticker}</td><td></span> <span class="badge bg-info text-dark">${arrayRsi[4].wma21}</span></td></tr></li>
          </table></ul>
        </div>`;
    acumulador += '</div>';
    contRsi.innerHTML = acumulador;
};
