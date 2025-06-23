# Comment l'alerte par email est-elle déclenchée ?

Depuis l'introduction de la fonctionnalité de planification automatique, nous avons modifié les déclencheurs de vos alertes par courriel.

Vous recevrez désormais des alertes pour vos sauvegardes automatiques **uniquement si une règle de planification est définie**. Cela vous empêche de recevoir des alertes pour les instantanés que vous avez exécutés manuellement à des fins de test.

L'alerte est déclenchée si nous n'avons pas reçu de sauvegarde dans l'intervalle de temps défini par la crontab, en y ajoutant une tolérance de 75%. Par exemple, si vous avez configuré une sauvegarde quotidienne à 14h et qu'aucune sauvegarde n'a été reçue d'ici au lendemain 8h, vous recevrez une alerte.