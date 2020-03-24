const {
  express,
  _,
} = require('./npm_module');
const router = express.Router();
const {
  env,
  dummy,
  api,
  log,
  api_address,
  pageName,
  Acx,
  envMode,
  pagePath,
  getIpInfo,
  vars,
  convertLocaleTimeStamps,
  profilePath,
  isNull,
  cipher,
  initData
} = require('./common');
const {
  isLoggedIn,
  wrap
} = require('./middleware');

/* GET home page. */
router.get('/tems', function(req, res, next) {
  const body ={};
  res.render(`${pagePath.view}/tems`, body);
});


router.get('/policy', function(req, res, next) {
  const body ={};
  res.render(`${pagePath.view}/policy`, body);
});



module.exports = router;
