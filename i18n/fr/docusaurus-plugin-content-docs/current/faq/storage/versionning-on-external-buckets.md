# Pourquoi activer la versionnage sur mes buckets externes ?

Nous forçons l'activation du versionning sur vos buckets S3 externes afin que vous puissiez bénéficier de l'immuabilité de vos sauvegardes. En effet, nous protégeons vos sauvegardes contre la suppression accidentelle ou malveillante grâce à une logique particulières au niveau du proxy `s3.datashelter.cloud`.

C'est-à-dire que les requêtes de suppression d'objets (DELETE) sont ignorées et les requêtes visant à réécrire un objet sont acceptées. Si nous acceptons la réécriture d'un objet, nous devons conserver l'ancienne version de l'objet afin de garantir la cohérence de vos sauvegardes. C'est pourquoi **le versionning doit être activé sur votre bucket**.
