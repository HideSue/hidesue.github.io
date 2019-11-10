var app = new Vue({
    el: '#sum',
    data: {
        cityList: [
            [{lat: 23.1353, lng: 113.2714}, "广州", 101280101],
            [{lat: 29.6500, lng: 91.1208}, "拉萨", 101140101],
            [{lat: 34.3472, lng: 108.9464}, "西安", 101110101],
            [{lat: 39.9109, lng: 116.4133}, "北京", 101010100],
            [{lat: 20.0440, lng: 110.3255}, "海口", 101310101],
            [{lat: 31.2359, lng: 121.4805}, "上海", 101020100],
            [{lat: 30.6558, lng: 104.0815}, "成都", 101270101],
            [{lat: 45.8088, lng: 126.5416}, "哈尔滨", 101050101],
            [{lat: 26.0804, lng: 119.3034}, "福州", 101230101],
            [{lat: 37.8769, lng: 112.5563}, "太原", 101100101],
            [{lat: 36.6565, lng: 117.1263}, "济南", 101120101],
            [{lat: 43.8307, lng: 87.6244}, "乌鲁木齐", 101130101],
            [{lat: 36.6233, lng: 101.7844}, "西宁", 101150101],
            [{lat: 36.0672, lng: 103.8405}, "兰州", 101160101],
            [{lat: 40.8484, lng: 111.7555}, "呼和浩特", 101080101]
        ],
        map: null,
        myValue: '',
        myPoint: ''
    },
    methods: {
        init_map: function () {
            var me = this;
            this.map = new BMap.Map('container', {enableMapClick:false});
            var point = new BMap.Point(116.404, 39.915);
            this.map.centerAndZoom(point, 6);
            this.map.enableScrollWheelZoom(true);
            var cityList = this.cityList;
            for(var i=0; i<cityList.length; i++){
                (function (i) {
                  $.ajax({
                      type: 'GET',
                      url: 'https://www.tianqiapi.com/api/',
                      data: 'version=v1&city='+cityList[i][1]+'&appid=[75248442]&appsecret=[qMnlL1Fj]',
                      dataType: 'JSON',
                      error: function () {
                          alert('网络错误');
                      },
                      success: function (res) {
                          console.log(res.data[0]);
                          var weather = res.data[0];
                		      var marker = new BMap.Marker(cityList[i][0]);
                          marker.setLabel(me.setLabelStyle(cityList[i][1]+': '+weather.tem+" "+weather.wea));
                		      me.map.addOverlay(marker);
                      }
                  });
                }) (i);
            }
            this.move_to_current_position();
            this.listen_poi();
        },
        setLabelStyle: function (content) {
            //左偏移  右偏移
            var offsetSize = new BMap.Size(0, 0);
            var labelStyle = {
                color: "#fff",
                backgroundColor: "#333333",
                border: "0",
                fontSize : "14px",
                width:"200px",
                opacity:"0.8",
                verticalAlign:"center",
                borderRadius: "2px",
                whiteSpace:"normal",
                wordWrap:"break-word",
                padding:"7px",
            };
            //用于设置样式
            var spanA="<span class='angle'><span>"
            //不同数字长度需要设置不同的样式。
            var num=parseInt(content.length/10)
            switch(num) {
                case 0:
                    offsetSize = new BMap.Size(-20, -40);
                    break;
                case 1:
                    offsetSize = new BMap.Size(-20, -40);
                    break;
                case 2:
                    offsetSize = new BMap.Size(-20, -60);
                    break;
                case 3:
                    offsetSize = new BMap.Size(-20, -80);
                    break;
                default:
                    break;
            }

            var label = new BMap.Label(content+spanA, {
                offset: offsetSize
            });
            label.setStyle(labelStyle);
            return label;
        },
        move_to_current_position: function () {
          var me = this;
          var geolocation = new BMap.Geolocation();
          geolocation.getCurrentPosition(function(r) {
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
              var mk = new BMap.Marker(r.point);
                me.map.addOverlay(mk);
                me.map.panTo(r.point);
            } else {
                alert('failed'+this.getStatus());
            }
        }, {enableHighAccuracy: true});
      },
        listen_poi: function () {
            var me = this;
            var ac = new BMap.Autocomplete({
                "input": "search",
                "location": this.map
            });
            ac.addEventListener("onconfirm", function(e) {
                var _value = e.item.value;
                me.myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
                me.myPoint = {
                    city: _value.city, // 输入地点城市所在的城市
                    district: _value.district.slice(0, -1) // 输入地点所在的市/县/区
                };
                me.set_place();
            });
        },
        set_place: function() {
            var me = this;
            this.map.clearOverlays();
            function myFun() {
                var pp = local.getResults().getPoi(0);
                var marker = new BMap.Marker(pp.point);
                me.map.centerAndZoom(pp.point, 10);
                me.map.addOverlay(marker);
                me.pop_message(marker, pp);
            }
            var local = new BMap.LocalSearch(me.map, {
                onSearchComplete: myFun
            });
            local.search(this.myValue);
        },
        pop_message: function(marker, pp) {
            var sContent = '<iframe scrolling="no" src="https://tianqiapi.com/api.php?style=tp&skin=pitaya&city='+this.myPoint.district+"\""+' frameborder="0" width="160" height="260" allowtransparency="true"></iframe>';
            var opts = {
                width: 160,
                height: 280
            }
            var infoWindow = new BMap.InfoWindow(sContent, opts);

            marker.addEventListener("click", function(){
            this.map.centerAndZoom(pp.point, 20);
            this.map.openInfoWindow(infoWindow, pp.point);
        });
        }
    }
});

app.init_map();
