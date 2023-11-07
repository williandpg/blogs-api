const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'blog_posts',
    timestamps: false,
    underscored: true,
  });
  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };
  return BlogPostTable;
};

module.exports = BlogPostSchema;