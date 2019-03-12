# Plus petit plus grand !

## Logique du jeu :

1. Générer un nombre aléatoire entre 1 et 100 lors du chargement de la page.

2. Stocker le nombre de tentatives. Commencer par 1.

3. Fournir au joueur le moyen de saisir un nombre (input ou prompt au choix).

4. Stocker l'ensemble des propositions de nombres pour que le joueur puisse les consulter.

5. Vérifier su le nombre saisi par le joueur est correct.

6. S'il est correct il faut :
	- afficher un message de félicitations
	- Empêcher que le joueur saisisse de nouveau un nombre
	- Afficher un contrôle pour que je joueur puisse rejouer.

7. S'il est faux et que le joueur a encore des tours à jouer :
	- Informer le joueur que sa proposition de nombre est fausse.
	- Lui permettre d'entrer une nouvelle proposition de nombre.
	- Incrémenter le nombre de tours de 1.

8. S'il est faux et que le joueur n'a plus de tours à jouer :
	- Informer le joueur qu'il a perddu et que la partie est finie.
	- Empêcher que le joueur saisisse de nouveau un nombre.
	- Afficher un contrôle pour que le joueur puisse rejouer.

9. Une fois le jeu redémarré, s'assurer que la logique du jeu et l'interface utilisateur sont complètement réinitialisées, puis revenir à l'étape 1.

### Pour aller plus loin

Implémenter un tableau de score en y mettant de la couleur !
Chaque partie doit être ajoutée  au tableau.

Si le joueur joue plusieurs partie, on lui affiche un total.
S'il a gagné plus de partie qu'il en a perdu, afficher une
`<img>` pour célébrer sa victoire !

Par exemple : https://media.giphy.com/media/l3q2xYZJPVVplQuWI/source.gif

Donner au joueur la possibilité de pouvoir choisir un mode de diffuculté (1-10, 1-50, 1-100, 1-1000).

Par exemple :

```html
<table>
	<thead>
		<tr>
			<th>Partie N°</th>
			<th>Résultat</th>
			<th>Tentatives</th>
			<th>Nombre à trouver</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>Perdu</td>
			<td>--</td>
			<td>251</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Gagné</td>
			<td>9</td>
			<td>784</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Abandon</td>
			<td>--</td>
			<td>593</td>
		</tr>
	</tbody>
</table>
```

### Résultat final




## Whaaat ?!

- https://developer.mozilla.org/fr/docs/Web/API/Window/confirm
- https://developer.mozilla.org/fr/docs/Web/API/Element/innertHTML
- https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
- https://developer.mozilla.org/fr/docs/Web/API/Element/className
- https://developer.mozilla.org/fr/docs/Web/API/Node/textContent


---


# Enoncé challenge 1

## Objectif

On a découvert les base du JS et de la programmation : Conditions, boucles, fonctions. Mais faut s'entrainer maintenant, car c'est en faisant qu'on apprend !

Donc, on continue de s’entraîner avec ce challenge, en compliquant un peu les choses : on développe notre premier jeu !

## Instructions

1. Au chargement de la page, on va générer un nombre entier aléatoire entre 1 et 1000 (C'est le nombre que va devoir deviner le joueur)
2. On demande au joueur de rentrer un entier dans une boite de dialogue.
3. On indique au joueur via un popup si le nombre à trouver est plus petit ou plus grand.

## Bonus

4. Tant qu'on n'a pas trouvé, on revient au 2.
5. Lorsque le joueur trouve le bon entier, ça affiche un popup célébrant sa victoire.
6. Si le joueur n'a pas trouvé au bout de 10 tentatives, on affiche un message de défaite.

## Whaaat ?!

Si vous ne trouvez pas les fonctions qu'il faut, elles sont là :
- https://developer.mozilla.org/fr/docs/Web/API/Window/alert
- https://developer.mozilla.org/fr/docs/Web/API/Window/prompt
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/while
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/floor
