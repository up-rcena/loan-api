module.exports = {
  type: 'postgres',
  url: process.env.POSTGRES_URL,
  entities: [process.env.ENTITY_PATH],
  synchronize: true,
};
