## howto-nodule_node-Makefile

Un Makefile vous permet de définir des tâches automatisées pour la construction, le test et la distribution de votre projet Node.js. 

Voici un exemple de Makefile basique pour un projet Node.js :

```makefile
# Variables
NODE = node
PROJECT_NAME = mon-projet-node
SRC_DIR = src
DIST_DIR = dist

# Tâches
all: build install

build:
    $(NODE) -c $(SRC_DIR)/*.js -o $(DIST_DIR)/$(PROJECT_NAME).js

install: build
    cp $(DIST_DIR)/$(PROJECT_NAME).js /usr/local/bin/$(PROJECT_NAME)

clean:
    rm -rf $(DIST_DIR)

test:
    # Ajoutez vos commandes de test ici
```

**Explication:**

* **Variables:**
    * `NODE`:  Chemin vers l'exécutable Node.js.
    * `PROJECT_NAME`: Nom de votre projet.
    * `SRC_DIR`: Repertoire contenant vos fichiers source.
    * `DIST_DIR`: Repertoire de distribution.

* **Tâches:**
    * **all:**  Tâche principale qui appelle `build` et `install`.
    * **build:** Compile les fichiers JavaScript source en un fichier exécutable.
    * **install:** Copie le fichier exécutable dans le répertoire `/usr/local/bin`.
    * **clean:** Supprime le répertoire de distribution.
    * **test:**  Tâche pour les tests unitaires (à compléter).

**Utilisation:**

1. Enregistrez ce Makefile dans le répertoire racine de votre projet.
2. Exécutez `make` pour construire et installer votre projet.
3. Utilisez `make build` pour construire uniquement le fichier exécutable.
4. Utilisez `make clean` pour nettoyer le répertoire de distribution.
5. Utilisez `make test` pour exécuter vos tests.

**Personnalisation:**

Vous pouvez personnaliser ce Makefile en fonction de vos besoins. Par exemple, vous pouvez ajouter des tâches pour :

* Exécuter des scripts de démarrage.
* Démarrer un serveur web.
* Déployer votre application sur un serveur distant.


