document.getElementById('submitBtn').addEventListener('click', function () {
    const genderOptions = document.getElementsByName('gender');
    let selectedGender = '';

    for (const option of genderOptions) {
        if (option.checked) {
            selectedGender = option.value;
            break;
        }
    }

    if (selectedGender) {
        document.getElementById('result').textContent = `선택된 성별: ${selectedGender}`;
    } else {
        document.getElementById('result').textContent = '성별을 선택하세요.';
    }
});