const Sequelize = require("sequelize");
const db = require("../db");

const Event = db.define("event", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  image: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  start: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  end: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tag: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
  },
  borough: {
    type: Sequelize.ENUM(
      "Bronx",
      "Brooklyn",
      "Queens",
      "Manhattan",
      "Staten-Island"
    ),
    allowNull: false,
  },
  eventLink: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.ENUM("approved", "pending", "denied"),
    defaultValue: "pending",
  },
  longitude: {
    type: Sequelize.DOUBLE,
  },
  latitude: {
    type: Sequelize.DOUBLE,
  },
});

module.exports = Event;
