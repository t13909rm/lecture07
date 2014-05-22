var photoListElement = document.querySelector("#photos");
//photosという関数をphotoListElementと名付ける。
var photoList = [
//photoListの中身は以下の通りである。
    {src: "img/200705.png", title: "7月"},
    {src: "img/200806.png", title: "8月"},
	  {src: "img/200902.png", title: "9月"},
	  {src: "img/201008.png", title: "もう1回8月"},
    {src: "img/front.png", title: "前"},
    {src:	"img/side.png", title: "横"},
    {src: "img/鉄塔とオレ.jpg", title:"鉄塔とおれ"}
];

var isReady = function(){
    return photoListElement != null &&
    //photolistElementの中が空ではなくかつ
        photoList != null &&
        //photoListの中が空ではなくかつ
        photoList.length > 0;
//photoListの長さが0より大きいという条件を返す。
};

var renderPhoto = function(index){
    //indexという引数を呼び出す。
    var photo = photoList[index];
 //htmlでindexというphotoListを表示する。
    var elm = document.createElement("img");
    //imgという引数の要素を作成する。
    elm.setAttribute("src", photo.src);
    //ｓｒｃという要素をphoto.srcという要素に変更する。
    elm.setAttribute("title", photo.title);
    //titleという要素をphoto.titleという要素に変更する。
    return elm;
//elmという値を返す。
};

var showPhotos = function(){
    //以下の関数をshowphotoと名付ける。
    if(isReady()){
        var index = 0;
        while(index < photoList.length){
            //()内が真の場合、{}内の中身をくりかえす
            var elm = renderPhoto(index);
        //html上にindexというphotoListを表示する。
            photoListElement.appendChild(elm);
            index = index + 1;
    　　　　　　//indexに1を足していく

        }
    }
};

var initApp = function(){
    ///intiAppという関数を宣言する。
    var btn = document.querySelector("#startButton");
    //この関数をスタートボタンと名付ける。
    btn.addEventListener("click", showPhotos);
　　　//スタートボタンがクリックされた際に、showphotoという関数を実行する。
};

initApp();
