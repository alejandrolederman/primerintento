// import logo from './logo.svg';
import html2canvas from 'html2canvas';
import './App.css';
import { useState } from 'react';

function App() {

  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");


  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value)
  }

  const onChangeImagen = function(evento){
    setImagen(evento.target.value)
  }

  const onClickExportar = function(evento){
    alert("exportar")
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }

  
  
  return (
    <div className="App">

      <select onChange={onChangeImagen}>
        <option value="descarga">imagen 1</option>
        <option value="descarga (1)">imagen 2</option>
        <option value="descarga (2)">imagen 3</option>
        <option value="descarga (3)">imagen 4</option>

      </select> <br />

      <input onChange={onChangeLinea1} type="text" placeholder='linea 1'/> <br />
      <input onChange={onChangeLinea2} type="text" placeholder='linea 2'/> <br />
      <button onClick={onClickExportar}> EXPORTAR</button>

      <div className="meme" id="meme">
        <span>{linea1}</span> <br />
        <span> {linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} alt=""/>

      </div>


    </div>
  );
}


export default App;
