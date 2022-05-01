// console.log('hifervservesrvvverer ')
let bn=document.getElementById('bn')
bn.addEventListener('click',myfun)
function myfun(){
    // Event.preventDefault();
    var title=document.getElementById('title').value;
   // console.log(title)
   abc(title)
}

var url='http://www.omdbapi.com/?apikey=f19e44ba&t='
function abc(title){fetch(url+title).then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data)
    var a=document.querySelector('#container');
    a.innerHTML='';
    for(var i in data){
   var b1=document.createElement('p');
   var b2=document.createElement('p');
   var b3=document.createElement('p');
   var b4=document.createElement('p');
   b1.innerText=i+':- '+data[i];
//    b2.innerText='Actors:- '+data.Actors;
//    b3.innerText='Director:- '+data.Director;
//    b4.innerText='Rating:- '+data.imdbRating;
   a.append(b1);
    }
    
}).catch((err)=>{
    console.log('error');
   
})
}

// console.log('hi')
