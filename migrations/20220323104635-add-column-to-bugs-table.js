module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('bugs', 'feature_id', { type: Sequelize.INTEGER });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('bugs', 'feature_id');
  },
};
