//(function ($) {
//    $.fn.xxx = function () {
//
//    };
//
//    //body...
//})(jQuery)


(function (global) {
    var __INFO__ = {
        plug: "DNmusicPlay", //插件名字
        version: "1.0.1", //版本号 
        author: "czy" //作者
    };
    var defaults = { //定义默认值
        audioUrl: "",
        nodeID: "",
        boxStyle: "", //皮肤痒是
        buttonSrc: "", //按钮图片地址
        htmls: '<audio autoplay loop style="width:0px;"><source src ="" type="audio/mpeg"/></audio><a style="width:24px;height:24px;background:url(data:image/jpeg;base64,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) transparent no-repeat scroll top left;background-size:100% auto; display:inline-block;" href="javascript:;" title="音乐开关"></a><select style="vertical-align:top;"></select>',
        // htmls;界面模板 使用ES6的语法
    };

    //定义插件代码PluCode
    var PluCode = function (options) { //存在用户传参就一定存在默认值defaults
        //缺省值和用户自定义的值进行合并  
        //1)jQquery 用法 $.extends({},defaults,options);
        //2)以下下为JS用法(ES6)
        var settings = Object.assign({}, defaults, options); //Object.assgin不能进行更深层次的copy(如defaults内参数下存在object参数)，只是浅层次的copy(即引用)

        //模板(div)渲染到节点上
        var audioDOM = document.getElementById(settings.nodeID); //id在合并的setting中 //用户传入的
        if (!audioDOM) audioDOM = document.body; //判断用户没有传入值时，自动复制

        //插入到DOM节点  jQuery实现 $(setting.htmls).appendTo(document.body); 
        //JS实现 定义音乐盒子的框(audioBox对象)
        var audioBox = document.createElement('div');
        audioBox.id = "dnmusiccontrol";
        audioBox.style = "opacity:0.5;position:absolute;z-index:2147483646;"+settings.boxStyle; //z-index最大的层级,boxstyle实现样式的定制，覆盖已有的
        audioBox.innerHTML = settings.htmls; //jQuery 加入html使用.html(); 

        //插入文档 找到插入的节点插入
        audioDOM.appendChild(audioBox);

        //获取播放器的内部各对象
        //        var audioButton=audioBox.find('a');   //jQuery获取方式find("a"),js原生方式 querySelectAll("a");获取到一个list对象(节点列表[0]才是获取到的整个a对象)
        var audioButton = audioBox.querySelectorAll("a")[0];
        var audioList = audioBox.querySelectorAll("select")[0];
        var audioTag = audioBox.querySelectorAll("audio")[0];
        //实现按钮图标定制
        console.log(settings.buttonSrc);
        if(settings.buttonSrc)
            audioButton.style.backgroundImage="url("+settings.buttonSrc+")";
         
        //初始化按钮状态
        audioButton.state=true;
        
//        console.log(audioButton);
        
        //判断参数类型，typeof适用于数字，字符等类型，对于数组和对象都返回object使用，应该用jQuery的方法 如下所示
        var _urlType=toString.apply(settings.audioUrl);
        console.log(_urlType);
     
        /*即：{audioUrl:{title:"中国人",source:"music/ccav.mp3"}}[ob,ob]类型转化为[obj,Array]类型
            { audioUrl:[
                {title:"music",source:"music/ccav.mp3"},
                {title:"我爱你",source:"music/mdzz.mp3"}
            ]
        }*/
        if(_urlType==='[object Object]')
        {
            var _temp=[];
            _temp.push(settings.audioUrl);
            settings.audioUrl=_temp;
        }
        //判断音乐地址是否存在
        console.log(settings.audioUrl);
        if(!settings.audioUrl.length){
            console.log(__INFO__.plug+" 因无音乐资源启动失败，请天假音乐资源 audioUrl:");
            return ;
        }
        //判断是数组or字符串
        if(typeof settings.audioUrl==='object'){//添加到list列表中
            console.log("数据对象自动播放音乐");
            audioTag.src=settings.audioUrl[0].source;  //设置默认播放地址
            for(var i=0;i<settings.audioUrl.length;i++){
                var _option=new Option(settings.audioUrl[i].title,settings.audioUrl[i].source);
                audioList.add(_option);
            }
        }else{//字符串文件（一个）
            audioTag.src=settings.audioUrl;
            audioList.style.display="none"; //隐藏掉数组list
        }
        //定义操作方法 点击播放,暂停音乐：
        var audioFN = {
            play: function (url) {
                if(url) audioTag.src=url;
                //修改按钮背景图
                audioButton.style.backgroundPosition="0 0";  //播放时默认为第一个图片代表(左右，上下)
                audioTag.play();
            },
            stop: function () {
                audioButton.style.backgroundPosition="0 100%";  //关闭时图100%意思为第一张图往下移动第一张图的100%距离
                audioTag.pause();
            }
        };

        //按钮绑定事件(使用事件监听：需要判断是手机端还是PC端的事件)
        var _device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())); //ipad返回True
        var clickEvtName = _device ? "touchstart" : "mousedown" //定义绑定事件（手机：pc）
        //按钮绑定事件，jQuery采用audioButton.on()方法;  原生js采用监听事件clickEvtName
        audioButton.addEventListener(clickEvtName, function (e) { //添加按钮监听事件
//            console.log(e.type);
            //判断音乐状态
            console.log(this.state); //首次为undefined,然后为true
            if(this.state){//正在播放，则停止
                this.state=false;//
                audioFN.stop();
            }else{  //否则，播放
                this.state=true;
                audioFN.play();
            }
        });

        audioList.addEventListener("change",function(e){
            var musicName=this.options[this.selectedIndex].value; //获取更改音乐资源地址
            //播放音乐
            audioFN.play(musicName);
            //更改音乐按钮状态(自动播放状态)
            audioButton.state=true;
        });
        
        //实现微信兼容的自动播放
        //确定是不是微信app   .toLowerCase()转成小写，match正则
        if(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)){
            document.addEventListener("WeixinJSBridgeReady",function onBridgeReady(){
                WeixinJSBridge.invoke("getNetworkType",{},function(e){//获取用户的网络，骗过用户实现播放
                    audioFN.play();
                })
            })
        }
    };
    //end PlugCode
    //    global.DNmusicPlay=PluCode; //插件代码放入到window中 //global==window
    global[__INFO__.plug] = PluCode; //采用传参的形式传入
})(typeof window !== "undifined" ? window : this);