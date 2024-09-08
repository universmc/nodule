##  howto-nodule_Node.js Snippets Base

Voici quelques exemples d'utilisations courantes de snippets Node.js pour vous aider à démarrer :

**1.  Créer un serveur web basique:**

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

**2. Lire un fichier:**

```javascript
const fs = require('fs');

fs.readFile('myFile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

**3. Écrire dans un fichier:**

```javascript
const fs = require('fs');

fs.writeFile('myFile.txt', 'Hello World!', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File created!');
});
```

**4. Utiliser une librairie:**

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

**5.  Traiter des requêtes HTTP:**

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World!</h1>');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```

**Conseils:**

*  Utilisez des snippets pour accélérer votre développement.
*  Ajustez les snippets en fonction de vos besoins spécifiques.
*  Explorez les nombreuses librairies Node.js disponibles pour étendre les fonctionnalités de vos projets.

 
