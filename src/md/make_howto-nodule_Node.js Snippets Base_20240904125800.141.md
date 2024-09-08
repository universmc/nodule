##  Node.js Snippets Base: Un Kit de Démarrage

Voici quelques exemples de snippets Node.js pour vous aider à démarrer :

**1.  Salut le monde !**

```javascript
console.log('Hello World!');
```

* Explication : Ce snippet utilise la fonction `console.log()` pour afficher le texte "Hello World!" dans la console.

**2.  Calculer la somme de deux nombres**

```javascript
const num1 = 5;
const num2 = 10;
const sum = num1 + num2;
console.log('La somme de', num1, 'et', num2, 'est', sum);
```

* Explication : Ce snippet définit deux variables `num1` et `num2`, ajoute leurs valeurs et affiche le résultat dans la console.

**3.  Fonction pour dire bonjour**

```javascript
function greet(name) {
  console.log('Bonjour', name + '!');
}

greet('Alice');
greet('Bob');
```

* Explication : Ce snippet définit une fonction `greet()` qui prend un nom en argument et affiche un message de salutation personnalisé dans la console.

**4.  Lire un fichier**

```javascript
const fs = require('fs');

fs.readFile('myFile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lors de la lecture du fichier:', err);
    return;
  }
  console.log('Contenu du fichier:', data);
});
```

* Explication : Ce snippet utilise le module `fs` pour lire le contenu d'un fichier nommé `myFile.txt` et l'afficher dans la console.

**5.  Créer un serveur HTTP**

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from my Node.js server!');
});

server.listen(3000, () => {
  console.log('Serveur écoutant sur http://localhost:3000');
});
```

* Explication : Ce snippet crée un serveur HTTP simple qui écoute sur le port 3000 et affiche un message "Hello from my Node.js server!" lorsqu'une requête est reçue.


##  Ressources pour en savoir plus

* **Documentation officielle de Node.js:** [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)
* **MDN Web Docs Node.js:** [https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Node](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Node)
* **Tutorialspoint Node.js:** [https://www.tutorialspoint.com/nodejs/index.htm](https://www.tutorialspoint.com/nodejs/index.htm)

N'hésitez pas à explorer ces ressources et à expérimenter avec différents snippets pour approfondir vos connaissances de Node.js !



