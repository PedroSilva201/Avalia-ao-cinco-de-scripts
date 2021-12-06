import React from "react";
import api from "./api";
//aqui neste caso e onde ocorre as movimentaçoes de açoes do programa
const Hooks = () => {
  const list = async () => {
    try{
      const {data} = await api.get("/list");//aqui e feito a soma dos numeros, por meio de um registro mediante a soma dos numeros
      return data.registros;
    } catch(e){
      console.log(e.message);
      alert(e.response.date.error[0]);
    }
  };
  const save = async () => {//local onde sera salvo os numeros
    try{
      await api.get('/save/${number}');
    } catch(e){
      console.log(e.message);
      alert(e.response.date.error[0]);
    }
  };
  const reset = async () => {//local onde havera a resetaçao dos numeros
    try{
      await api.get("/reset");
    } catch(e){
      console.log(e.message);
      alert(e.response.date.error[0]);
    }
  };
  return {list, save, reset};
};
export default Hooks;