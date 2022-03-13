'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_type_id: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: {
        //     tableName: 'user_types',
        //     schema: 'schema'
        //   },
        //   key: 'id'
        // },
        // allowNull: false
      },
      university_id: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: {
        //     tableName: 'universities',
        //     schema: 'schema'
        //   },
        //   key: 'id'
        // },
        // allowNull: false
      },
      location_id: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: {
        //     tableName: 'locations',
        //     schema: 'schema'
        //   },
        //   key: 'id'
        // },
        // allowNull: false
      },
      
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATEONLY
      },
      mobile_phone: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.BOOLEAN
      },
      verification_document: {
        type: Sequelize.STRING
      },
      profile_picture: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};