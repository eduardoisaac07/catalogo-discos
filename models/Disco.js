module.exports = (sequelize, DataTypes) => {
    const Disco = sequelize.define('Disco', {
      titulo: DataTypes.STRING,
      ano: DataTypes.INTEGER,
      capa: DataTypes.STRING,
    });
  
    Disco.associate = (models) => {
      Disco.belongsToMany(models.Artista, { through: 'DiscoArtista' });
      Disco.belongsToMany(models.Genero, { through: 'DiscoGenero' });
      Disco.hasMany(models.Faixa);
    };
  
    return Disco;
  };
  