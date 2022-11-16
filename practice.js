const btn1 = document.getElementById("btn1");

//이메일 인증하기 버튼
const toggleBtn1 = () => {
  if (btn1.style.display == "none") {
    btn1.style.display = "inline-block";
  } else {
    btn1.style.display = "inline-block";
  }
};

// 비번테스트
const ps = document.getElementById("PASSWORD_CHECK");
const chk = document.getElementById("PASSWORD_CHECK_IS_SAME");
const same = document.getElementById("same");
const PasswordIsSame = () => {
  chk.addEventListener("input", (e) => {
    if (ps.value == chk.value) {
      same.innerHTML = "비밀번호가 일치합니다.";
      same.style.color = "blue";
    } else {
      same.innerHTML = "비밀번호가 일치하지 않습니다.";
      same.style.color = "red";
    }
  });
};

// 닉네임 카운팅
const realtimeCheck = (val) =>
  (document.getElementById("count").innerHTML = val);

// 전체동의
window.onload = function () {
  const checkAll = document.getElementById("a1");
  const chks = document.querySelectorAll(".chk");
  const chkBoxLength = chks.length;

  checkAll.addEventListener("click", function (event) {
    if (event.target.checked) {
      chks.forEach(function (value) {
        value.checked = true;
      });
    } else {
      chks.forEach((value) => !value.checked);
    }
  });
  for (chk of chks) {
    chk.addEventListener("click", function () {
      let count = 0;
      chks.forEach(function (value) {
        if (value.checked == true) {
          count++;
        }
      });
      if (count !== chkBoxLength) {
        checkAll.checked = false;
      } else {
        checkAll.checked = true;
      }
    });
  }
};
//숫자카운팅
function checkNumber(event) {
  if (
    event.key === "." ||
    event.key === "-" ||
    (event.key >= 0 && event.key <= 10)
  ) {
    return true;
  }

  return false;
}
//숫자카운팅
function numberMaxLength(e) {
  if (e.value.length > e.maxLength) {
    e.value = e.value.slice(0, e.maxLength);
  }
  return false;
}
// 유효성검사
function signin() {
  var email = document.getElementById("quiztalk");
  var p1 = document.getElementById("PASSWORD_CHECK");
  var p2 = document.getElementById("PASSWORD_CHECK_IS_SAME");
  var name = document.getElementById("name");
  var nickname = document.getElementById("nickname");
  var female = document.getElementById("female");
  var male = document.getElementById("male");

  var agree = document.getElementById("a1");

  if (email.value == "") {
    //해당 입력값이 없을 경우 같은말: if(!uid.value)
    alert("이메일을 입력해주세요.");
    email.focus(); //focus(): 커서가 깜빡이는 현상, blur(): 커서가 사라지는 현상
    return false; //return: 반환하다 return false:  아무것도 반환하지 말아라 아래 코드부터 아무것도 진행하지 말것
  }
  if (p1.value == "") {
    alert("비밀번호를 입력하세요.");
    p1.focus();
    return false;
  }
  if (p2.value !== p1.value) {
    alert("비밀번호가 일치하지 않습니다..");
    p2.focus();
    return false;
  }
  if (name.value == "") {
    alert("이름을 입력하세요.");
    name.focus();
    return false;
  }
  if (nickname.value == "") {
    //해당 입력값이 없을 경우 같은말: if(!uid.value)
    alert("닉네임을 입력해주세요.");
    nickname.focus(); //focus(): 커서가 깜빡이는 현상, blur(): 커서가 사라지는 현상
    return false; //return: 반환하다 return false:  아무것도 반환하지 말아라 아래 코드부터 아무것도 진행하지 말것
  }
  if (!female.checked && !male.checked) {
    alert("성별을 선택해 주세요.");
    female.focus();
    return false;
  }
  if (signin_form.location.value == "none") {
    alert("지역이없음.");
    location.focus();
    return false;
  }
  document.signin_form.submit();
  if (!agree.checked) {
    //체크박스 미체크시
    alert("약관 동의를 체크하세요.");
    agree.focus();
    return false;
  }

  document.signin_form.submit();
}
