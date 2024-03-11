# Pourquoi ma partition temporaire est-elle pleine de fichiers snaper ?

Nous avons besoin de stocker des fichiers temporaires pour effectuer la compression ou le cryptage de vos données car elles ne peuvent pas être traitées en tant que flux.

Par défaut, nous traitons vos fichiers inférieurs à 10Mo en RAM et les plus gros en utilisant votre partition temporaire. Vous pouvez modifier ce comportement en éditant la valeur de configuration `general.tmp_file_threshold` dans _~/.config/snaper/config.yaml_.

Une fois votre fichier téléchargé, snaper le supprime automatiquement de votre partition temporaire.