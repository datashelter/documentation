# Détails de l'infrastructure

## Que se passe-t-il en coulisse ?

Datashelter est basé sur le protocole S3, avec des composants personnalisés supplémentaires qui offrent des fonctionnalités telles que :

- **Alertes :** Nous surveillons en permanence vos sauvegardes et vous avertissons en cas de problème. Par exemple, si votre dernière sauvegarde n'a pas été reçue, vous recevrez une alerte par email.
- **Rétention :** Nous gérons la rétention de vos sauvegardes, vous permettant de configurer facilement des règles de réduction d'échantillonnage pour les dumps de bases de données. Par exemple, vous pouvez choisir de conserver 1 sauvegarde par jour pour les 7 derniers jours, 1 sauvegarde par semaine pour les 4 dernières semaines, 1 sauvegarde par mois pour les 6 derniers mois, etc. **Pour les sauvegardes de fichiers, nous conservons les index pendant 1 an grâce à la déduplication.**
- **Protection contre l'altération des données :** Avec notre passerelle S3 personnalisée, vos sauvegardes restent sécurisées même si vos identifiants S3 sont compromis. Vos sauvegardes sont immuables, ce qui signifie qu'elles ne peuvent ni être supprimées ni modifiées. Vous aurez uniquement un accès en lecture.
- **Haute segmentation :** Chaque serveur créé dans Datashelter est isolé des autres, avec un bucket et des identifiants dédiés pour chacun. Cela garantit que si un serveur est compromis, les autres ne sont pas affectés.

![Datashelter infrastructure](../../assets/faq/datashelter_infrastructure_schema.png)

## Envie d'en savoir plus ?

Si vous souhaitez en savoir plus sur nos fonctionnalités de sécurité uniques, nous vous invitons à lire notre article de blog : [Comment Datashelter garantit la sécurité de vos sauvegardes ?](https://datashelter.tech/fr/blog/datashelter-securise-vos-sauvegardes/)

Pour toute information complémentaire, notre équipe de support est à votre disposition pour vous fournir plus de détails sur le fonctionnement de Datashelter. N'hésitez pas à nous contacter à l'adresse suivante : support@datashelter.tech.