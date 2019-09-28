const shortid = require('shortid');
const ObjectClass = require('./object');
const Constants = require('../shared/constants');

class Bullet extends ObjectClass {
  constructor(parentID, x, y, dir) {
    super(shortid(), x, y, dir, Constants.BULLET_SPEED);
    this.parentID = parentID;
  }

  // Returns true if the bullet should be destroyed
  update(dt) {
    super.update(dt);
    // TODO: return a boolean for whether or not the bullet is still valid
  }
}

module.exports = Bullet;
