var express = require('express')
  , partials = require('express-partials')
  , http = require('http')
  , path = require('path')
  , favicon = require('serve-favicon')
  , morgan = require('morgan')
  , bodyParser = require('body-parser')
  , multer  = require('multer')
  , upload = multer({ dest: 'public/uploads/' })
  , methodOverride = require('method-override')
  , cookieParser = require('cookie-parser')
  , session = require('express-session')
  , serveStatic = require('serve-static')
  , router = express.Router()
  , routes = require('./routes');

var app = express();

app.use(partials());

var env = process.env.NODE_ENV || 'development';

if ('development' == env) {
   app.set('port', process.env.PORT || 3000);
   app.set('views', __dirname + '/views');
   app.set('view engine', 'ejs');
   app.use(favicon(path.join(__dirname, 'public', '/images/favicon.ico')));
   app.use(morgan('dev'));
   app.use(bodyParser());
   app.use(methodOverride());
   app.use(cookieParser('webapp'));
   app.use(session());
   app.use(serveStatic(path.join(__dirname, 'public')));
}

app.get('/',routes.index);

http.createServer(app).listen(app.get('port'),function()
{
	console.log("Espress Server listening on Port: " + app.get('port'));
});
