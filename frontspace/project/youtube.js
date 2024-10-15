function f01(){
    open("login.html")
}
function f02(){
    
     const badWords = ['존나', '욕설', '나쁜말'];
     const input = document.querySelector("#search").value; 
 
     
     let containsBadWord = false;
     for (let word of badWords) {
         if (input.includes(word)) {
             containsBadWord = true;
             break;
         }
     }
 
     if (containsBadWord) {
         alert('욕설 금지!');
     } 
}
function f03(){
    location.reload()
}
document.querySelector('#search').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('searchBtn').click();
    }
});