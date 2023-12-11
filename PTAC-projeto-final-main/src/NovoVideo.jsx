
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NovoVideo.css";

export default function NovoVideo() {
   
  const localStorageList = JSON.parse(localStorage.getItem("Lista")) || [];
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [canal, setCanal] = useState("");
  const [letra, setLetra] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");
  const [lista, setLista] = useState(localStorageList);
  const [id, setId] = useState(
    localStorageList[localStorageList.length - 1]?.id + 1 || 1
  );

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);



  const salvar = (e) => {
    e.preventDefault();
    setLista([...lista, {
      id: id,
      name: name,
      canal: canal,
      url: url,
      data: data,
      letra: letra,
      local: local
    }]);

    setId(id + 1);
  };

  const remover = (id) => {
    const listFilter = [];
    lista.map((list) => {
      if (list.id !== id) {
        listFilter.push(list);
      }
    });

    setLista(listFilter);
  }
  return (
    <div class="container-new-video">
      <Link to="/">home</Link>
      <h1>Events and Shows</h1>
      <form onSubmit={salvar}>

        <h4><i>Name</i></h4>
        <input type="text"
          value={name}
          onChange={(e) => { setName(e.target.value) }} />

        <h4><i>Canal</i></h4>
        <input type="text"
          value={canal}
          onChange={(e) => { setCanal(e.target.value) }} />

        <h4><i>Url</i></h4>
        <input type="text"
          value={url}
          onChange={(e) => { setUrl(e.target.value) }} />
      
      

      <h4><i>Data</i></h4>
        <input type="text"
          value={data}
          onChange={(e) => { setData(e.target.value) }} />
     
     <h4><i>Letra</i></h4>
        <input type="text"
          value={letra}
          onChange={(e) => { setLetra(e.target.value) }} />
     

        <h4><i>Local</i></h4>
        <input type="text"
          value={local}
          onChange={(e) => { setLocal(e.target.value) }} />
        
        <br></br>
        <br></br>
        <button>ADD</button>

      </form>
      
   
      {lista.map((ativ) =>
        <ul key={ativ.id}>
          <li>
            <p>Name: {ativ.name}</p>
            <p>Canal: {ativ.canal}</p>
            <p>Url: {ativ.url}</p>
            <p>Data: {ativ.data}</p>
            <p>Letra: {ativ.letra}</p>
            <p>Local: {ativ.local}</p>
            <button onClick={() => remover(ativ.id)}>Remove</button>
          </li>
        </ul>
      )}
    </div>
  );
}
