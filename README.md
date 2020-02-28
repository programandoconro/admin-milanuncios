<html>
<h3> Administra tus productos de milanuncios.com </h3>

<h4>Features: </h4>
<li>Despliega progresivamente la web de renovación de cada producto en milanuncios.com</li>
<li>Agrega Id's de nuevos productos a la base de datos Firebase</li>
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

1. Agrega las Ids de los productos que desees utilizar.

2. Asegurate de estar autenticado en milanuncios y click a siguiente.

Esta App se puede complementar con `xdotool` para automatizar todo el proceso.

Si me quieres donar un shot de Tequila, programandoconro@hotmail.com es mi paypal.
