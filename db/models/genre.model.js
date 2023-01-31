const { Model, DataTypes, Sequelize} = require("sequelize");

const GENRE_TABLE = "genres"

const GenreSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  genre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.Now
  }
}

class Genre extends Model {
  static associate() {
    // model
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: GENRE_TABLE,
      modelName: 'Genre',
      timestamps: false
    }
  }
}

module.exports = { GENRE_TABLE, GenreSchema, Genre }
