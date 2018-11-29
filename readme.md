# Proyecto HTML5
	##Equipo 2
	##Participantes
1.Alberto Torres Cruz
2.Jorge Bedmar Fernandez
3.Alejandro Cobo Yera
4.Alejandro Álvarez Serrano
5.Andres Manuel Moreno Martinez 

# Introducción
    Ésta es la practica de clase Lenguaje de Marcas y Sistemas de Información, donde vamos a ver cómo crear
    páginas web, darles estilo, y hacerlas interactivas gracias a JavaScript.

## Preparación del entorno
    Vamos a usar Visual Studio Code, instalamos la extensión "Markdown All in One", y para ir viendo este manual, podemos usar la preview pulsando **CTRL+ SHIFT+ V**.

    Para ayudarnos con el HTML5, también instalamos la extensión "HTML5 Boilerplate".
    
# Estructúra básica de una web
    Toda web o página web suele tener una estructura parecida a ésta:
    ![estructura de directorio de una web](extra/tree.png)

    A su vez, el fichero **index.html**, tendrá como mínimo la siguiente estructura:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Titulo de la web</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/main.css" />
    <script src="js/main.js"></script>
</head>
<body>
    Cuerpo de la pagina
</body>
</html>
```

Para indicar que es html5:
´´´html
<!DOCTYPE html>
´´´

el elemento raiz de todo html es la etiqueta:

´´´html
    <html>
    </html>
´´´

Todo html debe tener las etiquetas **HEAD** (metainformación, hojas de estilo, javascript, etc) y **BODY** (contenido puro de la web):
```html
<!DOCTYPE>
<html>
    <head></head>
    <body></body>
</html>
```

## La cabecera
    delimitada por las etiquetas *&lt;head&gt;*.
    *.En ella podemos indicar informacion como:

    1. Codificación de caracteres
    2. Título de la página
    3. En qué fichero/s están las hojas de estilo (css)
    4. En qué fichero/s está el código javascript de mi página
Ejemplo:
´´´<html>
    <head>
    <meta charset="utf-8" />
    <title>Titulo de la web</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
</html>
```

## EL cuerpo
El cuerpo, etiqueta **&lt;body&gt;** es como su nombre indica, el cuerpo de la página, el contenido "puro" textual de mi web.

A su vez, el cuerpo contiene otras etiquetas para dar formato o informacion del texto de la web. Distinguimos entre etiquetas semanticas y etiquetas de formato.


# Etiquetas basicas de HTML5
