# Pourquoi avoir choisi le format CSV comme format par défaut pour les index ?

Le choix du format CSV pour les index de DataShelter repose sur plusieurs critères techniques et pratiques.

## Simplicité et familiarité

Le format CSV présente l'avantage d'être un standard largement reconnu et familier. Il offre une lisibilité immédiate et permet une édition facile via des applications externes telles que les éditeurs de texte ou les tableurs.

## Adéquation aux besoins fonctionnels

Nos opérations sur les index ne nécessitent pas de fonctionnalités complexes comme les requêtes relationnelles ou les transactions ACID. Les besoins se limitent principalement à :

- La lecture séquentielle des données
- L'ajout d'entrées lors de la création des sauvegardes
- La recherche simple d'informations

Dans ce contexte, l'utilisation d'une base de données comme SQLite représenterait une complexité supplémentaire non justifiée par nos cas d'usage.

## Avantages pratiques

- **Interopérabilité** : Compatible avec la plupart des outils et langages de programmation
- **Maintenance** : Facilite le diagnostic et la résolution de problèmes
- **Performance** : Optimal pour les opérations de lecture séquentielle
- **Portabilité** : Fonctionne sur tous les systèmes sans dépendances externes

Le format CSV constitue donc un équilibre optimal entre simplicité, performance et facilité de maintenance pour notre solution de sauvegarde.
