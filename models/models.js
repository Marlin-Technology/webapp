var path = require('path');
var Sequelize = require('sequelize');

/*var sequelize = new Sequelize(process.env.DATABASE_NAME, 
                              process.env.DATABASE_USER, 
                              process.env.DATABASE_PASSWORD, 
            		      {	   
                                   dialect: process.env.DATABASE_DIALECT, 
              			   protocol: process.env.DATABASE_PROTOCOL, 
              			   port: process.env.DATABASE_PORT,
              			   host: process.env.DATABASE_HOST,
              			   storage: process.env.DATABASE_STORAGE,
              			   omitNull: true
			      });*/

var sequelize = new Sequelize('test', 
                              'rescalante', 
                              '910401ee', 
            		      {	   
                                   dialect: 'mysql', 
              			   host: '192.168.1.244',
				   port: '3306'
			      });

sequelize.authenticate().then(function(errors) { console.log(errors) });
