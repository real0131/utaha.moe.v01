    var element_1 = document.getElementById('index_time_int');

    var element_3 = document.getElementById('utaha_main_pic');

    element_1.style.opacity= 0;    
    element_3.style.opacity= 0;

function getScrollTop(){
    if (typeof pageYOffset != 'undefined') {
        //most browsers except IE before #9
        return pageYOffset;
    } else {
        var B = document.body; //IE 'quirks'
        var D = document.documentElement; //IE with doctype
        D = (D.clientHeight)? D: B;
        return D.scrollTop;
    }
}

document.onscroll = function() {
    var list = document.getElementById('menu_list');
    /*if(getScrollTop <= 64)
    {
     list.style.visibility='visible';
     list.style.position = 'relative';
     list.style.top= 64-;
    }else{list.style.visibility='hidden'}
    */
    if(getScrollTop() !== 0)
    {
            
    }else{}
    list.style.visibility = (getScrollTop() !== 0) ? 'hidden' : 'visible';   
}

function btn_hide_onclick()
{
    var element = document.getElementById('index');
    element.style.display = 'none';
}
var opa=0;
function opacity()
{
    element_1.style.opacity= opa;    

    element_3.style.opacity= opa;


    opa=opa+0.005;
}
setInterval(opacity,1); //0.5s

