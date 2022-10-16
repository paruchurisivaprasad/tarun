const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const OrderItem = sequelize.define("orderItem", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: Sequelize.INTEGER,
  totalPrice:{
    type:Sequelize.STRING,
    allowNull:false
  }
});

module.exports = OrderItem;
