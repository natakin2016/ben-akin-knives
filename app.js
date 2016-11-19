var quotes=["Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.","May your trails be crooked, winding, lonesome, dangerous, leading to the most amazing view. May your mountains rise into and above the clouds. -Edward Abbey"]

function quoteshuffle(arr){
    
    for(var i=-1; i<=arr.length; i++){
        
        var quote=Math.floor((Math.random() * i));
        console.log(i)
    }
    console.log(arr[quote])
    
    $("#quote").text(arr[quote])
}

quoteshuffle(quotes)