console.log("starting");

//chrome.tabs.onUpdated.addListener(function(id,info,tab){
//  if(info.status=='complete'){
//    var script='var z=document.all;for(var i=0;i<z.length;i++){z[i].style.backgroundColor="black";z[i].style.color="green";}';
 //   chrome.tabs.executeScript({code:script});
//  }
//});

document.addEventListener('DOMContentLoaded', () => {

  var script='var z=document.all;for(var i=0;i<z.length;i++){z[i].style.backgroundColor="black";z[i].style.color="green";}';
 chrome.tabs.executeScript({code:script});


});

