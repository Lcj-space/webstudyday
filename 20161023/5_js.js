var oUl=document.getElementById('mun');
var aLi=oUl.getElementsByTagName('li');
for(var i=0;i<aLi.length;i++){
    aLi[i].onclick=function () {
         var oBl=this.getElementsByTagName('ul');
        oBl.style.display='block';

    }
}