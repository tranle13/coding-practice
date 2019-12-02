module.exports = function (sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category: DataTypes.STRING
  });
  return Post;
};

