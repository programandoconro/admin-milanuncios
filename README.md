<html>
<h3> Renueva rapidamente tus anuncios de www.milanuncios.com </h3>
<img class="center" height="100" width="200" src='https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/logo.2676833a05.svg'/>
 
 <h3>Utilizando Firebase Real-Time Database </h3>
 
 <img class="center" src='https://www.gstatic.com/devrel-devsite/prod/vbf4f3f66222b8c8c17b31375459c4f918489da36926d67ecaab655b9dc1cf00f/firebase/images/lockup.png'/>
 
 <h3>... y React </h3>
 <img class="center" height="100" width="150" src='https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png'/>
 

Esta Web App hace más rápido el proceso de renovar anuncios en milanuncios. No es un Bot pero disminuye el tiempo y esfuerzo humano por cantidad de clicks para renovar los anuncios de cada productos. Esta App se puede complementar con `xdotool` para automatizar todo el proceso. 

<h4>Features: </h4>
<li>Despliega progresivamente la web de renovación de cada anuncio que tengas en milanuncios.com</li>
<li>Permite agregar las Id's de los anuncios de milanuncios a tu base de datos en Firebase.com para que poder renovarlos facilmente</li>
<li>Permite eliminar los anuncios que ya no desees desplegar en la App.</li>

</html>

Instrucciones:

1. `git clone https://github.com/progamandoconro/admin-milanuncios && cd admin-milanuncios`

2. Crea un proyecto Web en Firebase.com, agregar las credenciales del mismo en `src/storage/constans.js` y cambiar las reglas de seguridad de la "realtime database" a:

```
 {
  "rules": {
      ".read": "auth != null",
      ".write": "auth != null"
  }
}
```

y habilitar la opción email/password en la `Authentication` del proyecto creado.

Paso a paso: https://dzone.com/articles/how-to-integrate-react-application-using-firebase-1.

3. `npm start`

Uso:

1. Agrega las Ids de los productos de milanuncios que desees utilizar (9 números) con esta App.

2. Asegurate de estar autenticado en milanuncios y click a siguiente y renovar.

3. Repite el proceso hasta que no tengas más productos por renovar.

4. Para borrar algún anuncio, ingresa la key de 20 dígigtos asociada a la Id que desees eliminar.


Si me quieres donar un shot de Tequila, programandoconro@hotmail.com es mi paypal.
