const { Model, DataTypes, Sequelize} = require("sequelize");

const COMMENT_TABLE = "comments"

const CommentSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  calification: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  comment: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Comment extends Model {
  static associate() {
    // model
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COMMENT_TABLE,
      modelName: 'Comment',
      timestamps: false
    }
  }
}

module.exports = { COMMENT_TABLE, CommentSchema, Comment }
