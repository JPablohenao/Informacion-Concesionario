import { useState } from "react";


const buscarMarca = (array, filtro) => {
  return array.filter(carro => carro.marca === filtro);
};
const buscarModelo = (array, filtro) => {
  return array.filter(carro => carro.modelo === filtro);
};
const ranking = (array, filtro) => {
  return array.filter(carro => carro.calificacion > filtro );
};


function App() {
  const [filtroMarca, setFiltroMarca] = useState("");
  const [filtroModelo, setFiltroModelo] = useState("");
  const [filtroRanking, setFiltroRanking] = useState("");
  const [resMarca, setResMarca] = useState("");
  const [resModelo, setResModelo] = useState("");
  const [resRanking, setResRanking] = useState("");



  const array = [];

  array.push({ "modelo": "roma", "marca": "ferrari", "referencia": "23", "calificacion": "5" });
  array.push({ "modelo": "flo", "marca": "pagani", "referencia": "2022", "calificacion": "3" });
  array.push({ "modelo": "lucery", "marca": "bmw", "referencia": "2293", "calificacion": "4" });
  array.push({ "modelo": "fast", "marca": "mercedes", "referencia": "1393", "calificacion": "1" });
  array.push({ "modelo": "tor", "marca": "bugatti", "referencia": "333", "calificacion": "5" });
  array.push({ "modelo": "39u", "marca": "bugatti", "referencia": "239", "calificacion": "3" });
  array.push({ "modelo": "call", "marca": "bmw", "referencia": "2993", "calificacion": "2" });
  array.push({ "modelo": "cks", "marca": "lambo", "referencia": "999", "calificacion": "5" });
  array.push({ "modelo": "rclo", "marca": "alfaromeo", "referencia": "932", "calificacion": "2" });
  array.push({ "modelo": "pn23", "marca": "pagani", "referencia": "277", "calificacion": "0" });
  array.push({ "modelo": "huracan", "marca": "lambo", "referencia": "230", "calificacion": "2" });
  array.push({ "modelo": "vs", "marca": "ferrari", "referencia": "777", "calificacion": "1" });
  array.push({ "modelo": "roop", "marca": "ferrari", "referencia": "444", "calificacion": "3" });
  array.push({ "modelo": "flahs", "marca": "rollroyce", "referencia": "1111", "calificacion": "4" });
  array.push({ "modelo": "roma", "marca": "ferrari", "referencia": "23", "calificacion": "5" });
  console.log(array);

  const filtrarmarca = (event) => {
    setFiltroMarca(event.target.value);
    setResMarca(buscarMarca(array, event.target.value).length);
  };
  const filtrarmodelo = (event) => {
    setFiltroModelo(event.target.value);
    setResModelo(buscarModelo(array, event.target.value).length);
  };
  const filtrarRanking = (event) => {
    setFiltroRanking(event.target.value);
    setResRanking((array, event.target.value).length);
  };

  console.log(buscarMarca(array));
  console.log(buscarModelo(array));
  console.log(ranking(array));

  return (
    <>
      <div>
        <label> filtrar marca:
          <input type="text" value={filtroMarca} onChange={filtrarmarca} />
        </label>
        <label> filtrar modelo:
          <input type="text" value={filtroModelo} onChange={filtrarmodelo} />
        </label>
        <label> ranking:
          <input type="number" value={filtroRanking} onChange={filtrarRanking} />
        </label>
      </div>
      <div>
        <label> resultado:
          <input type="text" value={resMarca} readOnly />
        </label>
        <label> resultado:
          <input type="text" value={resModelo} readOnly />
        </label>
        <label> resultado:
          <input type="text" value={resRanking} readOnly />
        </label>

      </div>
    </>
  );
}

export default App;
