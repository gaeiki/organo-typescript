import React from "react";
import { IColaborador } from "../../common/interfaces/IColaborador";
import Colaborador from "../Colaborador";
import "./Time.css";

interface TimeProps {
  corPrimaria: string
  corSecundaria: string
  nome: string
  colaboradores: IColaborador[]
}

const Time = (props: TimeProps) => {
  return (
    //Pode ser usado o operador && para retornar o JSX caso a primeira condição seja verdadeira. Também pode ser usado o ternário (condição ? JSX_0 : JSX_1) caso queria retornar outro JSX em condição falsa
    (props.colaboradores.length > 0) ? <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            corPrimaria={props.corPrimaria}
          />
        ))}
      </div>
    </section>
    : <React.Fragment></React.Fragment> //Mesma coisa que <></>
  );
};

export default Time;
