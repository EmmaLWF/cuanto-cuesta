module.exports = (sequelize, DataTypes) => {
  const Supermercados = sequelize.define('Supermercados', {
    supermercados_name: DataTypes.STRING,
  });
  Supermercados.associate = (db) => {
  db.Supermercados.hasMany(db.Items);
  };

  return Supermercados;
};