import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "./App.css";
import Iframe from "react-iframe";

const db = () => firebase.database();

function Dashboard() {
  const [reservas, handleReservas] = useState([]);
  const [item, setItem] = useState(Number(0));
  const [input, handleInput] = useState("");
  const [inputDelete, handleInputDelete] = useState("");

  useEffect(() => {
    db().ref("/");
  });

  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(
        function() {},
        function(error) {
          console.log(error);
        }
      );
  };

  const myData = JSON.stringify(reservas);
  const myDashboard = myData
    .split(",")
    .map((it, i) => it.substring(it.length - 11, it.length - 2));

  const productDescription = myData.split(",").map((it, i) => it);

  const productID = myDashboard[item];
  const nextProduct = () => {
    if (item === myDashboard.length) {
      alert("Todos los anuncios fueron actualizados");
    } else {
      setItem(Number(item) + Number(1));
      db()
        .ref("/")
        .on("value", handleReservas);
    }
  };

  const previousProduct = () => {
    if (item === myDashboard.length) {
      alert("Todos los anuncios fueron actualizados");
    } else {
      setItem(Number(item) - Number(1));
      db()
        .ref("/")
        .on("value", handleReservas);
    }
  };

  const showProducts = () => {
    const product = "https://www.milanuncios.com/renovar/?id=" + productID;
    console.log(product);
    return (
      <html>
        <p>{productDescription[item]}</p>
        <button onClick={() => nextProduct()}> Siguiente</button>
        <Iframe height="500px" url={product}></Iframe>
        <button onClick={() => previousProduct()}> Regresar</button>
        <Iframe url="https://www.milanuncios.com"></Iframe>
      </html>
    );
  };

  const writeNewID = newID => {
    db()
      .ref("/")
      .push({
        newID
      })
      .catch(error => {
        console.log("error ", error);
      });
  };

  const deleteProduct = name => {
    db()
      .ref(name)
      .remove();
  };

  return (
    <div>
      {showProducts()}
      <h5>Escriba el ID del producto a AGREGAR</h5>
      <input value={input} onChange={e => handleInput(e.target.value)} />
      <br />
      <button onClick={() => writeNewID(input)}>Enviar</button>
      <br />
      <h5>Escriba la KEY del producto a ELIMINAR</h5>
      <input
        value={inputDelete}
        onChange={e => handleInputDelete(e.target.value)}
      />
      <br />
      <button onClick={() => deleteProduct(inputDelete)}> Eliminar </button>
      <hr />
      <button onClick={() => logOut()}>Log Out</button>
    </div>
  );
}

export default Dashboard;
