/* Template: Leno - Mobile App HTML Landing Page Template
   Author: Inovatik
   Created: Mar 2019
   Description: Custom JS file
*/


function elt(name, attributes) {
  var node = document.createElement(name);
  if (attributes && typeof attributes !== "string") {
    for (var attr in attributes) {
      if (attributes.hasOwnProperty(attr)) {
        node.setAttribute(attr, attributes[attr]);
      }
    }
  }
  for (var i = 2; i < arguments.length; i++) {
    var child = arguments[i];
    if (typeof child === "string") {
      child = document.createTextNode(child);
    }
    node.append(child);
  }
  return node;
}


(function ($) {
  "use strict";

  /* Preloader */
  $(window).on('load', function () {
    var preloaderFadeOutTime = 500;
    function hidePreloader() {
      var preloader = $('.spinner-wrapper');
      setTimeout(function () {
        preloader.fadeOut(preloaderFadeOutTime);
      }, 500);
    }
    hidePreloader();
  });


  /* Navbar Scripts */
  // jQuery to collapse the navbar on scroll
  $(window).on('scroll load', function () {
    if ($(".navbar").offset().top > 20) {
      $(".fixed-top").addClass("top-nav-collapse");
    } else {
      $(".fixed-top").removeClass("top-nav-collapse");
    }
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function () {
    $(document).on('click', 'a.page-scroll', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 600, 'easeInOutExpo');
      event.preventDefault();
    });
  });

  // closes the responsive menu on menu item click
  $(".navbar-nav li a").on("click", function (event) {
    if (!$(this).parent().hasClass('dropdown'))
      $(".navbar-collapse").collapse('hide');
  });


  /* Rotating Text - Morphtext */
  $("#js-rotating").Morphext({
    animation: "fadeIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 2000,
    complete: function () {
      // Called after the entrance animation is executed.
    }
  });


  /* Card Slider - Swiper */
  var cardSlider = new Swiper('.card-slider', {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      // when window is <= 992px
      992: {
        slidesPerView: 2
      },
      // when window is <= 768px
      768: {
        slidesPerView: 1
      }
    }
  });


  /* Image Slider - Swiper */
  var imageSlider = new Swiper('.image-slider', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    slidesPerView: 5,
    breakpoints: {
      // when window is <= 380px
      380: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window is <= 516px
      516: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window is <= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window is <= 992px
      992: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      // when window is <= 1200px
      1200: {
        slidesPerView: 5,
        spaceBetween: 30
      },
    }
  });


  /* Image Slider - Magnific Popup */
  $('.popup-link').magnificPopup({
    removalDelay: 300,
    type: 'image',
    callbacks: {
      beforeOpen: function () {
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure ' + this.st.el.attr('data-effect'));
      },
      beforeClose: function () {
        $('.mfp-figure').addClass('fadeOut');
      }
    },
    gallery: {
      enabled: true //enable gallery mode
    }
  });


  /* Video Lightbox - Magnific Popup */
  $('.popup-youtube, .popup-vimeo').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: function (url) {
            var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
            if (!m || !m[1]) return null;
            return m[1];
          },
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: function (url) {
            var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
            if (!m || !m[5]) return null;
            return m[5];
          },
          src: 'https://player.vimeo.com/video/%id%?autoplay=1'
        }
      }
    }
  });


  /* Lightbox - Magnific Popup */
  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });


  /* Counter - CountTo */
  var a = 0;
  $(window).scroll(function () {
    if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          },
            {
              duration: 2000,
              easing: 'swing',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
                //alert('finished');
              }
            });
        });
        a = 1;
      }
    }
  });


  /* Move Form Fields Label When User Types */
  // for input and textarea fields
  $("input, textarea").keyup(function () {
    if ($(this).val() != '') {
      $(this).addClass('notEmpty');
    } else {
      $(this).removeClass('notEmpty');
    }
  });


  /* Contact Form */
  $("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
      // handle the invalid form...
      cformError();
      csubmitMSG(false, "Please fill all fields!");
    } else {
      // everything looks good!
      event.preventDefault();
      csubmitForm();
    }
  });

  function csubmitForm() {
    // initiate variables with form content
    var name = $("#cname").val();
    var email = $("#cemail").val();
    var message = $("#cmessage").val();
    var terms = $("#cterms").val();
    $.ajax({
      type: "POST",
      url: "php/contactform-process.php",
      data: "name=" + name + "&email=" + email + "&message=" + message + "&terms=" + terms,
      success: function (text) {
        if (text == "success") {
          cformSuccess();
        } else {
          cformError();
          csubmitMSG(false, text);
        }
      }
    });
  }

  function cformSuccess() {
    $("#contactForm")[0].reset();
    csubmitMSG(true, "Message Submitted!");
    $("input").removeClass('notEmpty'); // resets the field label after submission
    $("textarea").removeClass('notEmpty'); // resets the field label after submission
  }

  function cformError() {
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass();
    });
  }

  function csubmitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "h3 text-center tada animated";
    } else {
      var msgClasses = "h3 text-center";
    }
    $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);
  }


  /* Privacy Form */
  $("#privacyForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
      // handle the invalid form...
      pformError();
      psubmitMSG(false, "Please fill all fields!");
    } else {
      // everything looks good!
      event.preventDefault();
      psubmitForm();
    }
  });

  function psubmitForm() {
    // initiate variables with form content
    var name = $("#pname").val();
    var email = $("#pemail").val();
    var select = $("#pselect").val();
    var terms = $("#pterms").val();

    $.ajax({
      type: "POST",
      url: "php/privacyform-process.php",
      data: "name=" + name + "&email=" + email + "&select=" + select + "&terms=" + terms,
      success: function (text) {
        if (text == "success") {
          pformSuccess();
        } else {
          pformError();
          psubmitMSG(false, text);
        }
      }
    });
  }

  function pformSuccess() {
    $("#privacyForm")[0].reset();
    psubmitMSG(true, "Request Submitted!");
    $("input").removeClass('notEmpty'); // resets the field label after submission
  }

  function pformError() {
    $("#privacyForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass();
    });
  }

  function psubmitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "h3 text-center tada animated";
    } else {
      var msgClasses = "h3 text-center";
    }
    $("#pmsgSubmit").removeClass().addClass(msgClasses).text(msg);
  }


  /* Back To Top Button */
  // create the back to top button
  $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
  var amountScrolled = 700;
  $(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
      $('a.back-to-top').fadeIn('500');
    } else {
      $('a.back-to-top').fadeOut('500');
    }
  });


  /* Removes Long Focus On Buttons */
  $(".button, a, button").mouseup(function () {
    $(this).blur();
  });


  const brandName = 'Landy';
  const targetName = '$$name$$';
  const brandNameTarget = [$('[data-brand-name]')];
  brandNameTarget.map(item => item.html(brandName));


  $('#contactForm').on('submit', async function (e) {
    e.preventDefault();
    const getFormData = $(this).serializeArray();
    const config = {
      url: "/form",
      method: 'post',
      data: getFormData
    }
    const onlyInputList = _.filter(getFormData, item => item.name !== 'cterms');
    const hasAllData = onlyInputList.every(item => item.value.length > 1);
    const isTermChecked = document.getElementById('cterms').checked;

    if (!hasAllData) {
      modal({
        type: "alert",
        title: "실패하였습니다.",
        content: `내용을 모두 기입해주세요.`
      })
      return;
    }

    if (!isTermChecked) return;
    const { data, error } = await axios(config).catch(err => ({ error: err }));
    if (data && !error) {
      if (data.result === 1) {
        $(this)[0].reset();
        modal({
          type: "alert",
          title: "완료되었습니다.",
          content: `메일 확인 후 회신드리겠습니다.`
        })
      }
    } else {
      console.log(error, 'error');
    }
  })


  $(document).ready(function () {
    $(".dotdotdot").dotdotdot({
      wrapper: 'div',  /*  콘텐트를 감쌀 요소. */
      ellipsis: '...',  /*  말줄임표를 뭘로 할지 */
      wrap: 'word',    /*  자를 단위. 다음 옵션 중 하나 선택: 'word'/'letter'/'children' */
      after: null,     /*  자르고 나서도 유지시킬 요소를 jQuery 선택자로 적는다. */
      watch: 'window',    /*  윈도우가 리사이즈될 때 업데이트할 건지: true/'window' */
      height: 130,     /*  선택. max-height를 지정한다. 만약 null이면 알아서 잰다. */
      tolerance: 0       /*  글이 넘치면 이만큼쯤 height를 늘린다 */
    });
  });

})(jQuery);

function modal(props) {
  const confirmTag = props.type === 'confirm' ? `
  <button type="button" class="btn btn-default" data-dismiss="modal">CANCEL</button>`: "";
  const modalTemplate = `
  <div class="modal fade" id="myModal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <p class="modal-body-info main">${props.title}</p>
        <p class="modal-body-info sub">${props.content}</p>
      </div>
      <div class="btn-box">
        <button type="button" class="btn btn-default" data-dismiss="modal" id="modalBtn">OK</button>
        ${confirmTag}
      </div>
    </div>
    
  </div>
</div>
`
  $('body').append(modalTemplate);
  $("#myModal").modal();

  $('#myModal').on('hidden.bs.modal', function () {
    $("#myModal").remove()
  });
}