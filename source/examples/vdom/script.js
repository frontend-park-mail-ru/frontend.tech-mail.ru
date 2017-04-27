'use strict';

class VDOM {

	static el(type, props, ...children) {
		return {type, props, children};
	}

}

class App {
	constructor() {
		this._list = [];
		this._id = 0;
	}

	sort() {
		const max = this._list.reduce((max, {score}) => Math.max(max, score), 0);
		this._list = this._list
			.sort(({score: l}, {score: r}) => r - l)
			.map(el => Object.assign({}, el, {part: max === 0 ? 0 : (((el.score / max) * 1000 ) | 0) / 10}));
	}

	addUser(name) {
		this._list.push({name, score: 0, part: 0.0, _id: `#${++this._id}`});
	}

	putScores(name, scores) {
		this._list = this._list.map(user => {
			if (user.name === name) {
				user = Object.assign({}, user, {score: user.score + scores});
			}
			return user;
		});
	}

	toDOM() {
		this.sort();
		const header = VDOM.el('h1', {'class': 'application__header'}, `Список пользователей`);
		const subHeader = VDOM.el('h2', {'class': 'application__sub-header'}, `Количество пользователей: ${this._list.length}`);

		const list = VDOM.el('ul', {'class': 'application__list list'}, ...this._list.map(item => {
			return VDOM.el('li', {'class': 'list__item user-info', _id: item._id},
				VDOM.el('div', {'class': 'user-info__username'}, `${item.name} &mdash; ${item.score}`),
				VDOM.el('div', {'class': 'user-info__chart', style: `width: ${item.part}%;`}, ``)
			);
		}));

		return VDOM.el('main', {'class': 'application'},
			header,
			subHeader,
			list
		);
	}

	toHTML() {
		this.sort();
		const header = `<h1 class="application__header">Список пользователей</h1>`;
		const subHeader = `<h2 class="application__sub-header">Количество пользователей: ${this._list.length}</h2>`;

		const list = `<ul class="application__list list">
${this._list
			.map(item => {
				return `<li class="list__item user-info" data-id="${item._id}">
<div class="user-info__username">${item.name} &mdash; ${item.score}</div>
<div class="user-info__chart" style="width: ${item.part}%;"></div>
</li>`;

			})
			.join('\n')}
</ul>`;

		return `<main class="application">${header}${subHeader}${list}</main>`;
	}
}

window.app = new App;
app.addUser('user1');
app.addUser('user2');
app.addUser('user3');
app.addUser('user4');

[1, 1, 1, 1].forEach(() => {
	app.putScores('user1', (Math.random() * 100 ) | 0);
	app.putScores('user2', (Math.random() * 100 ) | 0);
	app.putScores('user3', (Math.random() * 100 ) | 0);
	app.putScores('user4', (Math.random() * 100 ) | 0);
});

root.innerHTML = app.toHTML();
