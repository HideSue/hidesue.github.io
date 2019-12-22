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
    }

    var info = '<div class="info">'+
    '<div class="box box1"><div class="name"><h4>Name</h4><h5>苏梓扬</h5></div><p>Hello!&nbsp;&nbsp;</p></div>'+
    '<div class="box box2"><div class="name"><h4>Id</h4><h5>2017053579</h5></div><p>Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></div>'+
    '<div class="box box3"><div class="name"><h4>Class</h4><h5>CST</h5></div><p>College</p></div>'+
    '<div class="box box4"><div class="name"><h4>Mail</h4><h5>794075398@qq.com</h5></div><p>Mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></div>'+
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
    }
    var hw = 
  '<div class="hw">' + 
    '<img src="index_icon/first.PNG" alt="">' +
    '<div class="details">' +
      '<b>Chapter 2</b>' +
      "<a target='_blank' href='chapter02/project01.html'>Project 1</a>" +
      "<a target='_blank' href='chapter02/project02.html'>Project 2</a>" +
      '<time>2019-9-21</time>' +
    '</div>' +
  '</div>'+
  '<div class="hw">' + 
    '<img src="index_icon/second.PNG" alt="">' +
    '<div class="details">' +
      '<b>Chapter 3</b>' +
      "<a target='_blank' href='chapter03/html/project01.html'>Project 1</a>" +
      "<a target='_blank' href='chapter03/html/project03.html'>Project 3</a>" +
      '<time>2019-9-21</time>' +
    '</div>' +
  '</div>' +
  '<div class="hw">' + 
    '<img src="index_icon/project2.PNG" alt="">' +
    '<div class="details">' +
      '<b>Project 2</b>' +
      "<a target='_blank' href='project2/html/main.html'>Project 2</a>" +
      '<time>2019-11-11</time>' +
    '</div>' +
  '</div>';
    right.addClass('has_hw');
    right.append(hw);
  }
}
