# failed to decompress stream : invalid input : magic number mismatch

Cette erreur survient lorsque snaper **n'arrive pas à décompresser correctement les données**. Ce problème survient souvent lorsque l'on essaie de restaurer des données sur un autre système avec une clé de chiffrement incorrecte.

Pour résoudre ce problème, mettez à jour la clé de chiffrement stockée dans `~/.config/snaper/.encryption_key` et essayez de restaurer les données à nouveau.

**Si votre problème persiste**, définissez le paramètre `log_level` dans *~/.config/snaper/config.yaml* à `debug` et **[contactez-nous](/support) en joignant vos logs** !