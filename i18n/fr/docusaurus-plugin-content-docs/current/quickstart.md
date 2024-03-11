---
sidebar_position: 2
---

# Quickstart

## Créez un compte sur Datashelter

Créez un compte sur [app.datashelter.tech](https://app.datashelter.tech)


## Ajouter votre premier serveur

Ajoutez votre premier serveur sur le tableau de bord. Vous serez invité à installer le CLI snaper sur votre serveur et à le configurer.


1. **Cliquez sur le bouton "Ajouter un serveur"**
![Configure server](assets/quickstart/configure_server.png)

2. **Définissez le nom du serveur et une description**
![Server informations](assets/quickstart/1_server_informations.png)

3. **Sélectionnez les services que vous souhaitez sauvegarder**
![Select services](assets/quickstart/2_select_services.png)

4. **Remplir les informations sur les services à sauvegarder**
![Service informations](assets/quickstart/3_service_informations.png)

1. **Lancer les commandes d'installation et de configuration retournées dans votre terminal pour effectuer votre premier instantané**
![Final step](assets/quickstart/4_final_step.png)

## Configurer les sauvegardes récurentes

Une fois la CLI de snaper installée et configurée, vous pouvez configurer des crontabs pour planifier vos sauvegardes.

```
crontab -e
---
# Sauvegarde tous vos services configurés toutes les jours à 3h00 du matin
0 3 * * * /usr/local/bin/snaper backup --all 2>&1 >> /var/log/snaper.log
```

## Profitez ! 🚀

Nous nous occupons du reste pour vous. Vous pouvez maintenant vous détendre et vous concentrer sur votre activité. Nous vous alerterons en cas de problème et nous veillerons à ce que vos sauvegardes soient sûres et sécurisées.