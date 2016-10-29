var oUl = document.getElementById('num');
var aLi = oUl.children;
for (var i = 0; i < aLi.length; i++) {
    aLi[i] = index;
    aLi[i].onclick = function () {
        var oSub= this.children[1];
        oSub.style.display='block';
    }

}


