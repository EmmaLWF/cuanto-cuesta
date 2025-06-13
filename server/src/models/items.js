module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define('Items', {
    item_name: DataTypes.STRING,
    item_name_toLowerCase: DataTypes.STRING,
    item_id: { type: DataTypes.INTEGER, allowNull: false },
    price: DataTypes.FLOAT,
  });
Items.associate = (db) => {
  db.Items.belongsTo(db.Supermercados, {foreignKey: { allowNull: false }});
};

  return Items;
};