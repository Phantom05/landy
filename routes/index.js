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
  const reviewList = [
    {
      id:0,
      // profile:"/img-common/testimonial-1.jpg",
      profile:`/img-common/default_person2_icon.png`,
      reviewSummary:`최고!! 이거 사용하고 시간이 훨씬 줄었어요 ㅋㅋ 사람들 많이 안썼으면 좋겠네요 ㅠㅠ`,
      name:`김**`,
      job:`kh****`,
    },
    {
      id:1,
      // profile:"/img-common/testimonial-2.jpg",
      profile:`/img-common/default_person2_icon.png`,
      reviewSummary:`솔직히 비싼거 같아서 조금 망설였는데 60주고 1000이득 봤네요 ㅎㅎ 완전 효자 프로그램 ㅎㅎ`,
      name:`이**`,
      job:`mo*****`,
    },
    {
      id:2,
      // profile:"/img-common/testimonial-3.jpg",
      profile:`/img-common/default_person2_icon.png`,
      reviewSummary:`Searching for a great marketing automation app was difficult but thankfully I found .`,
      job:`Marketer`,
      name:`Marsha Singer`
    },
    {
      id:3,
      // profile:"/img-common/testimonial-4.jpg",
      profile:`/img-common/default_person2_icon.png`,
      reviewSummary:`This app has the potential of becoming a mandatory tool in every marketer's day to day operations.`,
      job:`Designer`,
      name:`Tim Shaw`
    },
    {
      id:4,
      // profile:"/img-common/testimonial-5.jpg",
      profile:`/img-common/default_person2_icon.png`,
      reviewSummary:`This app has the potential of becoming a mandatory tool in every marketer's day to day operations.`,
      job:`Marketer`,
      name:`Lindsay Spice`
    },
    {
      id:5,
      // profile:"/img-common/testimonial-6.jpg",
      profile:`/img-common/default_person_icon.png`,
      reviewSummary:`This app has the potential of becoming a mandatory tool in every marketer's day to day operations.`,
      job:`Developer`,
      name:`Ann Black`
    },
  ];
  const price={
    basic:`Development efforts. Try Lolantic mobile app for any mobile platform platform Get a solid foundation for your self development efforts. Try Lolantic mobile app development efforts. Try Lolantic mobile app for any mobile platform platform for any mobile platform`,
    premium:`Get a solid foundation for your self development efforts. Try Lolantic mobile app
    for any mobile Get a solid foundation for your self development efforts. Try Lolantic mobile app for any mobile platform platform`
  }
  const body={};
  body.reviewList = reviewList;
  body.price = price;
  res.render('index',body);
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
