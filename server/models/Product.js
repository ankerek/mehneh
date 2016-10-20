export default function(sequelize, DataTypes) {
  const Product = sequelize.define('Product', {
    name: { type: DataTypes.STRING, allowNull: false }
  }, { 
    timestamps: false
  });

  return Product;
}
