function daum(){
    const min = 5;
    const max = 20;
    const koreanRegex = /[가-힣]/g;
    const emailRegex = /^[a-z0-9]{1,}@[a-z]{3,}\.[a-z]{2,4}/i;
    const phoneNum = /^[0-9]{11}/;

    const input = document.querySelector("#inp").value;
    if(koreanRegex.test(input)){
        alert("한글은 사용할 수 없습니다.");
        return false;
     }else if (!(emailRegex.test(input) || phoneNum.test(input))) {
         alert(`이메일이나 전화번호 형식으로 입력해주세요.`);
         return false;
    }else {
        alert('성공? 아직 만드는중...');
    }
}

document.querySelector('#inp').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.querySelector('#btn02').click(); // 버튼 클릭
    }
});
function join(){
    location.assign("join01.html")
}