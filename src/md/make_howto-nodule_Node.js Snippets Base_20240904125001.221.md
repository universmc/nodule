## howto-nodule_Node.js Snippets Base

Voici quelques snippets Node.js basiques pour vous aider à démarrer :

**1. Bonjour le monde !**

```javascript
console.log('Bonjour le monde !');
```

**2. Lecture de fichiers**

```javascript
const fs = require('fs');

fs.readFile('monfichier.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

**3. Création de fichiers**

```javascript
const fs = require('fs');

fs.writeFile('nouveau_fichier.txt', 'Ceci est un nouveau fichier.', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Fichier créé avec succès !');
});
```

**4. Requêtes HTTP**

```javascript
const https = require('https');

https.get('https://www.google.com', (res) => {
  res.on('data', (chunk) => {
    console.log(`Données reçues : ${chunk.toString()}`);
  });
}).on('error', (err) => {
  console.error(err);
});
```

**5. Exécution de commandes système**

```javascript
const { exec } = require('child_process');

exec('ls -la', (err, stdout, stderr) => {
  if (err) {
    console.error(`Erreur : ${err}`);
    return;
  }
  console.log(`Sortie : ${stdout}`);
  console.error(`Erreur : ${stderr}`);
});

```

**Ressources supplémentaires:**

* **Documentation officielle Node.js:** https://nodejs.org/en/docs/
* **MDN Web Docs Node.js:** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Node

N'hésitez pas à me poser d'autres questions si vous avez besoin de plus d'aide pour démarrer avec Node.js.



