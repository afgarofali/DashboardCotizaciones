//Constructor objeto

class Accion {
  constructor(id, ticker, precio, industria, bolsa, ppo, rsi, wma21, D1, ath, ppoReco) {
    this.id = id;
    this.ticker = ticker;
    this.precio = precio;
    this.industria = industria;
    this.bolsa = bolsa;
    this.ppo = ppo;
    this.rsi = rsi;
    this.wma21 = wma21;
    this.D1 = parseFloat(D1);
    this.ath = ath;
    this.ppoReco = ppoReco;
  }
}


let acumulador = 0;

class Tenencia {
  constructor(id, ticker, cantidad, precio, difprecioTenencia) {
    this.id = id;
    this.ticker = ticker;
    this.cantidad = cantidad;
    this.precio = precio;
    this.difprecioTenencia = difprecioTenencia;

  }
}
