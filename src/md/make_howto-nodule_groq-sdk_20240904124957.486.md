##  howto-nodule_groq-sdk : Votre guide pour utiliser le SDK Groq en Node.js

Le SDK Groq pour Node.js vous permet d'intégrer facilement les modèles linguistiques de Groq dans vos applications. 

Voici un guide rapide pour vous aider à démarrer avec le SDK Groq:

**1. Installation:**

```bash
npm install groq-sdk
```

**2. Importer le SDK:**

```javascript
const Groq = require('groq-sdk');
```

**3. Configuration:**

* **Authentification:**

Si vous utilisez une instance privée de Groq, vous devrez fournir vos clés d'API pour l'authentification.

```javascript
const groq = new Groq({
  apiKey: 'votre_clé_api',
});
```

* **Modèle:**

Spécifiez le modèle Groq que vous souhaitez utiliser. 

```javascript
const model = 'groq-llama3-8b-8192'; // Remplacez par le nom du modèle souhaité
```

**4. Interaction avec le modèle:**

Utilisez la méthode `query` pour envoyer une requête au modèle Groq.

```javascript
groq.query(model, 'Bonjour, comment allez-vous ?').then(response => {
  console.log(response.text);
});
```

**5. Options:**

Le SDK Groq offre plusieurs options de configuration pour personnaliser les interactions avec le modèle, telles que :

* `temperature`: Contrôle la créativité de la réponse (plus élevé = plus créatif).
* `top_p`: Contrôle la probabilité de sélectionner des tokens moins probables.
* `max_tokens`: Limite le nombre de tokens dans la réponse.

**Ressources supplémentaires:**

* **Documentation officielle du SDK Groq:** [https://docs.groq.ai/sdk](https://docs.groq.ai/sdk)
* **Exemples d'utilisation:** [https://github.com/groq-ai/groq-sdk-node](https://github.com/groq-ai/groq-sdk-node)



N'hésitez pas à explorer la documentation et les exemples pour découvrir toutes les fonctionnalités et possibilités offertes par le SDK Groq.
