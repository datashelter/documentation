# Problèmes courants avec MongoDB

### *Erreur de sélection du serveur : délai d'attente dépassé, topologie actuelle : Type: ReplicaSetNoPrimary*

```bash
ERRO[0010] unable to connect to the database mydb: Failed to connect to mongodb://admin:***@127.0.0.1:27027/mydb?appName=snaper-v3.8.4: failed to ping MongoDB: server selection error: context deadline exceeded, current topology: { Type: ReplicaSetNoPrimary, Servers: [{ Addr: localhost:27017, Type: Unknown, Last error: dial tcp [::1]:27017: connect: connection refused }, ] }
```

Cette erreur survient généralement lorsqu'on utilise la configuration par défaut de MongoDB. Elle se produit parce que le client tente de se connecter à un replica set, mais aucun nœud primaire n’est disponible ou accessible.

**Solution :**  
Utilisez le paramètre `--direct-connection` pour vous connecter directement à l’instance MongoDB sans passer par la découverte du replica set.

---

### *Erreur d’authentification lors de l’initiation de la connexion : impossible de s’authentifier avec le mécanisme "SCRAM-SHA-1"*

```bash
ERRO[0000] unable to dump database mydb: error while performing the database dump: exit status 1 (executed=/usr/bin/mongodump --uri=mongodb://127.0.0.1:27027/mydb?appName=snaper-v3.8.4&authSource=admin&directConnection=true --archive=/tmp/snaper/dump-mydb2765302789, output=2025-03-29T10:48:41.555+0000     Failed: can't create session: failed to connect to mongodb://127.0.0.1:27027/mydb?appName=snaper-v3.8.4&authSource=admin&directConnection=true: connection() error occurred during connection handshake: auth error: sasl conversation error: unable to authenticate using mechanism "SCRAM-SHA-1": (AuthenticationFailed) Authentication failed.
```

Cette erreur indique que l’authentification auprès du serveur MongoDB a échoué. Les causes les plus courantes sont :

- Le nom d'utilisateur ou le mot de passe est incorrect.
- Le paramètre `--auth-db` est utilisé, mais la base de données cible n'est pas configurée pour l’authentification.

**Solutions :**

- Vérifiez les identifiants utilisés pour la connexion à la base de données.
- Si votre instance MongoDB **n'exige pas** d’authentification, essayez de retirer le paramètre `--auth-db` (ou `authSource`).

Si vous êtes certain qu’aucune authentification n’est requise et qu’aucun identifiant n’est utilisé, essayez d’exécuter la commande à nouveau **sans** l’argument `--auth-db`.  
Si le problème persiste, vérifiez les paramètres de lancement de Snaper en éditant le fichier de configuration :  
`~/.config/snaper/config.yaml`
