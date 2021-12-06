import React from "react";
import "./style.css";

export default function App() {
  //const [botao, setBotao] = useState("App");
  return (
    <div>
      <h1>Numeros Aleatorios!!!</h1>
      <h2>O grande jogo de bincar com os numeros</h2>
      <p>Escolhe um dos cinco botoes e aperta quantas vezes voce quiser</p>

      <button onClick={()=>setBotao("App")}>Resetar todos os numeros    </button>
      <button onClick={()=>setBotao("App")}>Gerar novos numeros aqui </button>

      <button onClick={()=>setBotao("App")}>1: </button>
      <button onClick={()=>setBotao("App")}>2: </button>
      <button onClick={()=>setBotao("App")}>3: </button>
      <button onClick={()=>setBotao("App")}>4: </button>
      <button onClick={()=>setBotao("App")}>5: </button>




      
    </div>
  );
}
