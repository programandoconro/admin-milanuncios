<html>
<h3> Administra tus productos de milanuncios.com </h3>

<h4>Features: </h4>
<li>Despliega progresivamente la web de renovación de cada producto en milanuncios.com</li>
<li>Agrega Id's de nuevos productos a la base de datos Firebase</li>
<li>Elimina productos que ya no desees actualizar</li>

</html>
* Es necesario crear una cuenta en Firebase.com, agregar las credenciales en ```src/storage/constans.js``` y cambiar las reglas de seguridad de la "realtime database" a:

```
 {
  "rules": {
      ".read": "auth != null",
      ".write": "auth != null"
  }
}
```

Esta App se complementa con `xdotool` para automatizar todo el proceso.

Si me quieres donar un shot de Tequila, programandoconro@hotmail.com es mi paypal.
