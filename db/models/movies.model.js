const { Model, DataTypes, Sequelize} = require("sequelize");

const MOVIE_TABLE = "movies"

const MovieSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  year: {
    allowNull: false,
    type: DataTypes.DATE
  },
  watched: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  rating: {
    allowNull: false,
    type: DataTypes.DECIMAL(2,1)
  },
  duration: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Movie extends Model {
  static associate() {
    // model
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVIE_TABLE,
      modelName: 'Movie',
      timestamps: false
    }
  }
}

module.exports = { MOVIE_TABLE, MovieSchema, Movie }
