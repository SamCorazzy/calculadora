import { useState } from "react";

function App() {
  const [inputState, setinputState] = useState({
    operacion: "",
    resultado: "",
  });

  const inicioEstado = JSON.parse(localStorage.getItem("historial")) || [];
  const [historial, setHistorial] = useState(inicioEstado);

  const handleInputChange = (event) => {
    setinputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };

  const handleNumeroClick = (event) => {
    setinputState({
      ...inputState,
      operacion: inputState.operacion + event.target.value,
    });
  };

  const handleOperadorClick = (event) => {
    setinputState({
      ...inputState,
      operacion: inputState.operacion + event.target.textContent,
    });
  };

  const handleResultado = () => {
    var datos = inputState.operacion;
    var res = eval(datos);

    localStorage.setItem(
      "historial",
      JSON.stringify([
        ...historial,
        {
          operacion: datos,
          resultado: res,
        },
      ])
    );
    setHistorial([
      ...historial,
      {
        operacion: datos,
        resultado: res,
      },
    ]);

    setinputState({
      ...inputState,
      operacion: res,
      resultado: "",
    });
  };

  const handleClickLimpiar = () => {
    setinputState({
      ...inputState,
      operacion: "",
      resultado: "",
    });
  };

  const handleResetHistorial = () => {
    setHistorial([]);
    localStorage.setItem("historial", JSON.stringify([]));
  };




  return (
    <div className="card-body shadow container-sm mt-4 text-center"  style={{fontFamily: "Footlight MT Light", width: "860px"}}>
      <h2>CALCULADORA</h2>
      <div className="row">

        <div className="mb-3 text-end">
          <input 
            id="input"
            name="input"
            className="p-2 w-75 text-end shadow"
            disabled={true}
            onChange={handleInputChange}
            value={inputState.operacion}
            >
            </input>
        </div>

        <div className="col card-body" style={{width: "200px"}}>
          <h3>Historial</h3>
          {
            historial.length === 0 ?
            "Al momento no tienes operaciones guardadas. Puedes realizar una operacion en la calculadora contigua."
            :
            (
              <ol>
                {historial.map((item,index) => {
                  return(
                    <li key={index} style={{fontSize: "150%"}}>
                      {item.operacion} = {item.resultado} &nbsp;
                    </li>
                  );
                })
                }
              </ol>
            )
          }
          <button
            className="btn btn-outline-danger btn-lg m-2"
            style={{width: "100px"}}
            value="+"
            onClick={handleResetHistorial}
          >Borrar</button>
        </div>

        <div className="col card-body" style={{width: "640px"}}>
          <button
            className="btn btn-outline-danger btn-lg m-2"
            style={{width: "100px"}}
            value="+"
            onClick={handleOperadorClick}
          >+</button>
          <button
            className="btn btn-outline-danger btn-lg"
            style={{width: "100px"}}
            value="-"
            onClick={handleOperadorClick}
          >-</button>
          <button
            className="btn btn-outline-danger btn-lg m-2"
            style={{width: "100px"}}
            value="*"
            onClick={handleOperadorClick}
          >*</button>
          <button
            className="btn btn-outline-danger btn-lg"
            style={{width: "100px"}}
            value="/"
            onClick={handleOperadorClick}
          >/</button>
          <button
            className="btn btn-outline-light btn-lg m-2"
            style={{width: "100px"}}
            value={9}
            onClick={handleNumeroClick}
          >9</button>
          <button
            className="btn btn-outline-light btn-lg"
            style={{width: "100px"}}
            value={8}
            onClick={handleNumeroClick}
          >8</button>
          <button
            className="btn btn-outline-light btn-lg m-2"
            style={{width: "100px"}}
            value={7}
            onClick={handleNumeroClick}
          >7</button>
          <button
            className="btn btn-outline-light btn-lg"
            style={{width: "100px"}}
            value={6}
            onClick={handleNumeroClick}
          >6</button>
          <button
            className="btn btn-outline-light btn-lg m-2"
            style={{width: "100px"}}
            value={5}
            onClick={handleNumeroClick}
          >5</button>
          <button
            className="btn btn-outline-light btn-lg"
            style={{width: "100px"}}
            value={4}
            onClick={handleNumeroClick}
          >4</button>
          <button
            className="btn btn-outline-light btn-lg m-2"
            style={{width: "100px"}}
            value={3}
            onClick={handleNumeroClick}
          >3</button>
          <button
            className="btn btn-outline-light btn-lg"
            style={{width: "100px"}}
            value={2}
            onClick={handleNumeroClick}
          >2</button>
          <button
            className="btn btn-outline-light btn-lg m-2"
            style={{width: "100px"}}
            value={1}
            onClick={handleNumeroClick}
          >1</button>
          <button
            className="btn btn-outline-light btn-lg"
            style={{width: "100px"}}
            value={0}
            onClick={handleNumeroClick}
          >0</button>
          <button
            className="btn btn-outline-light btn-lg m-2"
            style={{width: "100px"}}
            value={"."}
            onClick={handleNumeroClick}
          >.</button>
          <button
          className="btn btn-outline-light btn-lg"
          style={{width: "100px"}}
          onClick={handleResultado}
          value="="
          >=</button>
          <button
          className="btn btn-outline-light btn-lg m-2"
          style={{width: "100px"}}
          onClick={{handleClickLimpiar}}
          >Limpiar</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
//getbootstrap.com
