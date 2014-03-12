/**
 * Position Component constructor
 *
 * @class Roguelike.Components.Position
 * @classdesc The position component holds x and y position of the entity
 *
 * @param {int} x - The horizontal position of the entity
 * @param {int} y - The vertical position of the entity
 */
Roguelike.Components.Position = function(x, y) {

	/**
	 * @property {string} name - The name of this system. This field is always required!
	 */
	this.name = 'position';

	//Initialize the variables for this component
	this.x = x;
	this.y = y;

};

/**
 * KeyboardControl Component constructor
 *
 * @class Roguelike.Components.KeyboardControl
 * @classdesc An component that tells the system that this entity can be controlled with the keyboard
 */
Roguelike.Components.KeyboardControl = function() {

	/**
	 * @property {string} name - The name of this system. This field is always required!
	 */
	this.name = 'keyboardControl';

};

/**
 * Health Component constructor
 *
 * @class Roguelike.Components.Health
 * @classdesc The health component is responsible for managing the health
 *
 * @param {int} maxHealth - The new and maximum health of the entity
 */
Roguelike.Components.Health = function(maxHealth) {

	/**
	 * @property {string} name - The name of this system. This field is always required!
	 */
	this.name = 'health';

	//Initialize the variables for this component
	this.health = this.maxHealth = maxHealth;

};

Roguelike.Components.Health.prototype = {

	/**
	 * Check whether the entity is dead
	 * @protected
	 */
	isDead: function() {

		return this.health <= 0;

	}

};

/**
 * Sprite Component constructor
 *
 * @class Roguelike.Components.Sprite
 * @classdesc Determines how an entity looks!
 *
 * @param {string} color - The color code of the current entity
 */
Roguelike.Components.Sprite = function(color) {

	/**
	 * @property {string} name - The name of this system. This field is always required!
	 */
	this.name = 'sprite';

	/**
	 * @property {string} color - The color code of the current entity
	 */
	this.color = color;

};