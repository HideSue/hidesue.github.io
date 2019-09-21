function nav() {
  var left = $('.sidenav');

  if (!(left.hasClass('visible'))) {
    left.addClass('visible');
    left.css('width', '300px');
  } else {
    left.removeClass('visible');
    left.css('width', '0');
  }
}

function about() {
  var right = $('.content_right');

  if (!(right.hasClass('has_info'))) {

    if (right.hasClass('has_hw')) {
      right.removeClass('has_hw');
      $('.hw').remove();
    } else if (right.hasClass('has_other')) {
      right.removeClass('has_other');
      $('.other').remove();
    }

    var info = "<div class='info'>"+
    "<img src='head_background.jpg' alt='' style='width: 100px; height: 100px; border-radius: 50%;'>"+
    "<p>姓名: 苏梓扬</p>"+
    "<hr>"+
    "<p>学号：2017053579</p>"+
    "</div>";
    right.addClass('has_info');
    right.append(info);
  }
}

function hw() {
  var right = $('.content_right');

  if (!(right.hasClass('has_hw'))) {
    if (right.hasClass('has_info')) {
      right.removeClass('has_info');
      $('.info').remove();
    } else if (right.hasClass('has_other')) {
      right.removeClass('has_other');
      $('.other').remove();
    }
    var hw = "<div class='hw'>"+
    "<img src='first.PNG' alt='' style='width: 100px; height: 130px; display: inline; float: left;'>"+
    "<div class='word' style='overflow: hidden; margin-right: 0; text-align: center;'>"+
    "<a target='_blank' href='hm1/project1_1.html'>Project 1</a>"+
    "<a target='_blank' href='hm1/project1_2.html'>Project 2</a>"+
    "<time style='font-size: 22px;'>2019-9-21</time>"+
    "</div>"+
    "</div>";
    right.addClass('has_hw');
    right.append(hw);
  }
}

function other() {
  var right = $('.content_right');

  if (!(right.hasClass('has_other'))) {

    if (right.hasClass('has_info')) {
      right.removeClass('has_info');
      $('.info').remove();
    } else if (right.hasClass('has_hw')) {
      right.removeClass('has_hw');
      $('.hw').remove();
    }
    var other = "<div class='other'>"+
    "<a href='#'>其他</a>"+
    "</div>";
    right.addClass('has_other');
    right.append(other);
  }
}
