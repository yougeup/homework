function daum(){
    const familyName = document.querySelector("#inputFamilyName").value;
    const name  = document.querySelector("#inputName").value;

    const familyNameRegex01 = /^[a-z]{3,}$/i;
    const familyNameRegex02 = /^[가-힣]{1,}$/;
    const nameRegex01 = /^[a-z]{3,}$/i;
    const nameRegex02 = /^[가-힣]{1,}$/;

    if (!((familyNameRegex01.test(familyName) && nameRegex01.test(name)) ||
    (familyNameRegex02.test(familyName) && nameRegex02.test(name)))) {
    alert("올바르지 않은 형식입니다. 성과 이름은 같은 언어로 입력해야 합니다.");
    return false;  
}

return f01(); 
}
document.querySelector('#inputName').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.querySelector('#btn02').click(); 
    }
});

function f01(){
    location.assign("join02.html")
}
