import db from './models/index.mjs';

// import your controllers here
import initBugsController from './controllers/bugs.mjs';

export default function bindRoutes(app) {
  /* / routes just to the button link  */
  app.get('/', (req, res) => {
    res.render('landing');
  });

  // initialize the controller functions here
  const BugsController = initBugsController(db);
  // pass in the db for all callbacks

  // define your route matchers here using app
  app.get('/bugs', BugsController.index);
  app.post('/create', BugsController.createBug);
}
