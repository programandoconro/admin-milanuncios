<html>
<h3> Administra tus productos de milanuncios.com </h3>

<h4>Features: </h4>
<li>Despliega progresivamente la web de renovación de cada producto en milanuncios.com, haciendo más rápido el proceso si se tienen muchos anuncios.</li>
<li>Agrega Id's de los nuevos productos a la base de datos Firebase para que poder renovarlos facilmente</li>
<li>Elimina productos que ya no desees actualizar</li>

</html>

Configuración:

1. Crear un proyecto en Firebase.com, agregar las credenciales del mismo en `src/storage/constans.js` y cambiar las reglas de seguridad de la "realtime database" a:

```
 {
  "rules": {
      ".read": "auth != null",
      ".write": "auth != null"
  }
}
```

2. Habilitar la opción email/password en la `Authentication` de `Firebase`.

Uso:

1. Agrega las Ids de los productos de milanuncios que desees utilizar (9 números) con esta App.

2. Asegurate de estar autenticado en milanuncios y click a siguiente y renovar.

3. Repite el proceso hasta que no tengas más productos por renovar.

4. Para borrar algún anuncio, ingresa la key de 20 dígigtos asociada a la Id que desees eliminar.

Esta App se puede complementar con `xdotool` para automatizar todo el proceso.

Si me quieres donar un shot de Tequila, programandoconro@hotmail.com es mi paypal.
