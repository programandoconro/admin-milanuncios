import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "./App.css";
import Iframe from "react-iframe";

const db = () => firebase.database();

function Dashboard() {
  const [reservas, handleReservas] = useState([]);
  const [item, setItem] = useState(Number(0));
  const [input, handleInput] = useState("");

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
    .map((it, i) => it.substr(it.length - 9));

  const productID = myDashboard[item];
  const changeProduct = () => {
    if (item === myDashboard.length) {
      alert("Todos los anuncios fueron actualizados");
    } else {
      setItem(Number(item) + Number(1));
      db()
        .ref("/")
        .on("value", handleReservas);
      alert("La ID ha sido agregada, ahora se puede renovar con esta App");
    }
  };

  const showProducts = () => {
    const product = "https://www.milanuncios.com/renovar/?id=" + productID;
    return (
      <html>
        <p>{myDashboard[item]}</p>
        <button onClick={() => changeProduct()}> Siguiente</button>
        <Iframe height="500px" url={product}></Iframe>
      </html>
    );
  };

  const writeNewID = newID => {
    firebase
      .database()
      .ref("/")
      .push({
        newID
      })
      .catch(error => {
        console.log("error ", error);
      });
  };

  return (
    <div>
      {showProducts()}
      <h5>Escriba el ID del producto a agregar</h5>
      <input value={input} onChange={e => handleInput(e.target.value)} />
      <br />
      <button onClick={() => writeNewID(input)}>Enviar</button>
      <hr />
      <button onClick={() => logOut()}>Log Out</button>
    </div>
  );
}

export default Dashboard;
