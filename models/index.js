const User = require('./User');
const Thread = require('./Thread');

User.hasMany(Thread, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Thread.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Thread };
