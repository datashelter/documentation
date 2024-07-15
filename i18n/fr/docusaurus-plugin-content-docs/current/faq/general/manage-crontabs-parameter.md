# Qu'est-ce que le paramètre manage_crontab ?

Depuis juillet 2024, nous avons introduit une nouvelle fonctionnalité de gestion de crontab sur snaper. Liée au panel, elle vous permet de définir une récurrence pour vos sauvegardes (ex : dump ma base de données tous les jours à 14h)

![Programmation automatique](../../assets/faq/crontab_scheduling.png)

Pour se faire, snaper va gérer sa propre liste de crontab sur votre serveur en ajoutant une nouvelle crontab pour chaque sauvegarde pour laquelle vous avez défini une récurrence :
    
    ```bash
# SNAPER MANAGED CRONTABS
5 1 * * * /usr/local/bin/snaper backup files --name lingering-moon >> /tmp/snaper.log 2>&1
# END OF SNAPER MANAGED CRONTABS
    ```
