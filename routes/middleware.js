const {axios,_,util} = require('./npm_module');
const {log,commandLine} = require('./common');

function isLoggedIn(req, res, next) {
  if (req.session.user) {
    return next();
  } else {
    const url = req.originalUrl;
    req.session.prevUrl = url;
    res.redirect('/auth/login');
    // res.status(403).send('로그인 필요');
  }
};

function isNotLoggedIn(req, res, next){
  if (!req.session.user) {
    next();
  } else {
    res.redirect('/auth/login');
  }
};

function wrap(asyncFn ) {
  // FIXME: Promise와 catch를 이용하면 더 간결해질 것 같습니다.
    return (async (req, res, next) => {
      try {
        log(`\n`,'green');
        log(`** Attempted Router`,'yello')
        log(commandLine,'green');
        log(` - [ ${req.method} ] ${req.originalUrl}` , 'green');
        log(commandLine,'green');
        log(`\n`,'green');
        return await asyncFn(req, res, next);
      } catch (error) {
        console.log(error.message);
        return next(error);
      }
    })  
}

function emailVaild(data,type = 'valid'){

  
  if(type === 'valid'){

  }
}

// export 
exports.wrap = wrap;
exports.isNotLoggedIn = isNotLoggedIn;
exports.isLoggedIn = isLoggedIn;
