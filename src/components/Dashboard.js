import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "./App.css";
import Iframe from "react-iframe";

const db = () => firebase.database();

function Dashboard() {
  const [reservas, handleReservas] = useState([]);
  const [item, setItem] = useState(Number(0));

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
  const myDashboard = myData.split(",").map((it, i) =>
    it
      .replace(RegExp(/([A-Z.*+?^=!$(){}|[\]/\\""a-z])/g), " ")
      .replace("userInfo", "")
      .replace(":", "")
  );

  const productID = myDashboard[item];
  const changeProduct = () => {
    if (item === myDashboard.length) {
      alert("Todos los anuncios fueron actualizados");
    } else {
      setItem(Number(item) + Number(1));
      db()
        .ref("/")
        .on("value", handleReservas);
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

  return (
    <div>
      {showProducts()}

      <button onClick={() => logOut()}>Log Out</button>
    </div>
  );
}

export default Dashboard;
