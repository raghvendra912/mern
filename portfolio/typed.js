var ele=document.querySelector('#typed');
var qualified_link=document.querySelector('#qualification_link');
var qualification_container=document.querySelector('.qualification_container');
var info_container=document.querySelector('.info_container');
var download_container=document.querySelector('.download_container');
var download_link=document.querySelector('#download_link');
var info_link=document.querySelector('#info_link');
qualified_link.addEventListener('click',
function(){
console.log("qualify link clicked");
info_container.style.display='none';
download_container.style.display='none';
qualification_container.style.display='block';
qualified_link.style.fontSize='190%';
qualified_link.style.color='red';
qualification_container.setAttribute('style','background-color:red;display:flex;');
});

download_link.addEventListener('click',
function(){
console.log("download link clicked");
info_container.style.display='none';
download_container.style.display='block';
qualification_container.style.display='none';
download_link.style.fontSize='190%';
download_link.style.color='red';
});

info_link.addEventListener('click',
function(){
console.log("info link clicked");
info_container.style.display='block';
download_container.style.display='none';
qualification_container.style.display='none';
info_link.style.fontSize='190%';
info_link.style.color='red';
});

console.dir(qualified_link);

var start="";
var end="Raghvendra Verma";


var idx=1;
var pointer=0;
setInterval(function()
{
    if(pointer==(end.length)||pointer == -1)
    {
        idx =idx * -1;
    }
    start=end.substring(0,pointer);
    ele.textContent=start;
    pointer=pointer+idx;
},50);


