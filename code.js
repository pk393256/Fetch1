// console.log('hifervservesrvvverer ')

fetch('http://www.omdbapi.com/?i=tt3896198&apikey=f19e44ba').then((response)=>{
    return response.json();
}).then((data)=>{
    // console.log(data)
    var a=document.querySelector('#container');
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


// console.log('hi')