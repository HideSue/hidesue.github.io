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

function nav2() {
  var left = $('.sidenav');

  if (!(left.hasClass('visible'))) {
    left.addClass('visible');
    left.css('height', '190px');
  } else {
    left.removeClass('visible');
    left.css('height', '0');
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

    var info = '<div class="info">'+
    '<div class="box box1"><div class="name"><h4>姓名</h4><h5>苏梓扬</h5></div><p>Hello!&nbsp;&nbsp;</p></div>'+
    '<div class="box box2"><div class="name"><h4>学号</h4><h5>2017053579</h5></div><p>Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></div>'+
    '<div class="box box3"><div class="name"><h4>班级</h4><h5>CST</h5></div><p>College</p></div>'+
    '<div class="box box4"><div class="name"><h4>邮箱</h4><h5>794075398@qq.com</h5></div><p>Mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></div>'+
    '</div>';
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
    var hw = "<span class='hw'>"+
    "<img src='index_icon/first.PNG' alt='' style='width: 100px; height: 130px; display: inline; float: left;'>"+
    "<div class='word' style='margin-right: 0; text-align: center; float: left; padding-left: 10px;'>"+
    "<a><b>Chapter 2</b></a>"+
    "<a target='_blank' href='chapter02/project01.html'>Project 1</a>"+
    "<a target='_blank' href='chapter02/project02.html'>Project 2</a>"+
    "<time style='font-size: 22px;'>2019-9-21</time>"+
    "</div>"+
    "</span>"+
    "<span class='hw'>"+
    "<img src='index_icon/second.PNG' alt='' style='width: 100px; height: 130px; display: inline; float: left;'>"+
    "<div class='word' style='margin-right: 0; text-align: center; float: left; padding-left: 10px;'>"+
    "<a><b>Chapter 3</b></a>"+
    "<a target='_blank' href='chapter03/html/project01.html'>Project 1</a>"+
    "<a target='_blank' href='chapter03/html/project03.html'>Project 3</a>"+
    "<time style='font-size: 22px;'>2019-9-21</time>"+
    "</div>"+
    "</span>";
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
