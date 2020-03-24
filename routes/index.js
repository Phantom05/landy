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
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.route('/form')
.get(isLoggedIn,wrap(async (req,res) =>{
  let body = {};
  req.session.ouath = true;
  if(req.session.ouath){
    let reqType = (req.url).split('/')[3];
    req.body.reqType = reqType;
    req.body.uType = req.session.user.type;
    req.body.uCode = req.session.user.seq;
    req.body.page = req.params.pageNum;

    if(reqType=='history'){
      req.body.duration = "6M";
      req.body.sortType = 0;
    }

    const {data,error} = await postMypageProject(req,res);
    if(data && !error){
      data.pageName = req.params.pageName;
      data.tabName = "project";
      data.userInfo = initData(data.userInfo, 1);
      // data.prjList = initData(data.prjList, 5);
      data.page = 1;
      if(reqType=='history'){
        data.prjList = initData(data.prjList, 9);
      }else{
        data.prjList = initData(data.prjList, 8);
      }
      data.prjStr = JSON.stringify(data.prjList);
      body = data;
      res.render(`${pagePath.mypage}/MypageProject`, body);
    }
  }else{
    res.render(`error`,{message:`세션이 만료 되었습니다.`});
  }
}))
.post(wrap(async (req,res) =>{
  let body = {};
  console.log(req.body);
  res.json({result:1});
}))




module.exports = router;
