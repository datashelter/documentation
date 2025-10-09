---
slug: /
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# Introduction

Datashelter est une solution de sauvegarde simple et intégrée pour les serveurs Linux.
Elle a été conçue pour rendre les sauvegardes réellement gérables : pas de configuration complexe, pas de scripts à maintenir.
En quelques commandes, vous pouvez sauvegarder vos fichiers et bases de données vers n'importe quel stockage compatible S3, de manière sécurisée et automatique.

Datashelter prend en charge le chiffrement, la compression, la déduplication et la planification pour vous — ainsi vos sauvegardes restent légères, sûres et faciles à restaurer en cas de problème.

### Comment ça fonctionne

Au cœur de Datashelter se trouve Snaper, un petit outil en ligne de commande écrit en Go.
Snaper s'exécute directement sur vos serveurs et prend en charge chaque étape du processus de sauvegarde :
- Scanne et suit les modifications au niveau des fichiers
- Compresse et chiffre les données localement
- Les téléverse vers votre stockage S3 (le vôtre ou le nôtre)
- Gère automatiquement les sauvegardes incrémentales et dédupliquées

Contrairement à des outils comme rsync, Snaper ne se contente pas de copier les fichiers modifiés — il utilise une méthode de sauvegarde basée sur des index qui identifie les changements à l'intérieur des fichiers et ne transfère que ce qui est nécessaire.
Cela rend les sauvegardes plus rapides, plus petites et plus efficaces.

---
## Explorer la documentation

<div className="row">
	<div className="col col--6">
		<div className="card margin-vert--md">
			<div className="card__body">
				<h3>Commencer</h3>
				<p>Guide pas-à-pas pour créer un compte, ajouter votre premier serveur et configurer Snaper.</p>
				<Link to="/quickstart" className="button button--secondary">Commencer</Link>
			</div>
		</div>
	</div>

	<div className="col col--6">
		<div className="card margin-vert--md">
			<div className="card__body">
				<h3>Installer/Configurer Snaper</h3>
				<p>Référence pour les commandes Snaper, paramètres de configuration et variables d'environnement.</p>
				<Link to="/cli/requisites/install/" className="button button--secondary">Installer Snaper</Link>
			</div>
		</div>
	</div>
</div>
