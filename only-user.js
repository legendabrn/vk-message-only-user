var div = document.getElementsByClassName('im-page--dialogs _im_page_dialogs page_block');
var lis = div[0].querySelectorAll('li');
for(var i=0; li=lis[i]; i++) 
{
    var getName = li.getAttribute('data-list-id');
    if(getName && (getName.length == 10 || getName.substr(1, 1) == "-")) li.parentNode.removeChild(li);
}
