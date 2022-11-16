const p1 = document.getElementById("PASSWORD_CHECK");
const p2 = document.getElementById("PASSWORD_CHECK_IS_SAME");
const $email_warning = document.getElementById("email_warning");
const $code = document.getElementById("code");
const $code_msg = document.getElementById("code_msg");
const $sendcode_btn = document.getElementById("sendcode_btn");
const $codeSent = document.getElementById("codeSent");
const codeBox = document.getElementById("codeBox");
const AuthTimer = new $ComTimer();
// 타이머
function $ComTimer() {
  //prototype extend
}

$ComTimer.prototype = {
  comSecond: "",
  fnCallback: function () {},
  timer: "",
  domId: "",
  fnTimer: function () {
    var m = Math.floor(this.comSecond / 60) + ": " + (this.comSecond % 60); // 남은 시간 계산
    this.comSecond--; // 1초씩 감소
    console.log(m);
    this.domId.innerText = m;
    if (this.comSecond < 0) {
      // 시간이 종료 되었으면..
      clearInterval(this.timer); // 타이머 해제
      $code.disabled = true;
      $sendcode_btn.style.display = "block";
      $codeSent.style.display = "none";
    }
  },
  fnStop: function () {
    clearInterval(this.timer);
  },
};

const timer = () => {
  var m = Math.floor(this.comSecond / 60) + ": " + (this.comSecond % 60); // 남은 시간 계산
  this.comSecond--; // 1초씩 감소
  console.log(m);
  this.domId.innerText = m;
  if (this.comSecond < 0) {
    // 시간이 종료 되었으면..
    clearInterval(this.timer); // 타이머 해제
    $code.disabled = true;
    $sendcode_btn.style.display = "block";
    $codeSent.style.display = "none";
  }
};

// 이메일정규식
const email_regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
const $email = document.getElementById("email");

// 이메일 인증하기 버튼
const toggleBtn1 = () => {
  if (!email_regex.test($email.value)) {
    $email_warning.innerHTML = "이메일 형식을 확인해 주세요.";
    $email_warning.style.color = "red";
  } else {
    $email_warning.style.display = "none";
    $sendcode_btn.disabled = false;
    codeBox.style.display = "inline-block";
    $sendcode_btn.style.display = "none";
    $codeSent.style.display = "block";
    $code.disabled = false;

    const AuthTimer = new $ComTimer();
    AuthTimer.comSecond = 10;
    AuthTimer.timer = setInterval(function () {
      AuthTimer.fnTimer();
    }, 1000);
    AuthTimer.domId = document.getElementById("timer");
  }
};

const confirmCode = () => {
  if ($code.value == "134679") {
    $code_msg.innerHTML = "인증번호가 일치합니다.";
    $code_msg.style.color = "blue";
    $codeSent.value = "인증완료";
    $codeSent.disabled = true;
    $code.disabled = true;
  } else {
    $code_msg.innerHTML = "인증번호가 다릅니다.";
    $code_msg.style.color = "red";
  }
  AuthTimer.fnStop();
};

// 비번테스트
const ps = document.getElementById("PASSWORD_CHECK");
const chk = document.getElementById("PASSWORD_CHECK_IS_SAME");
const same = document.getElementById("same");

const validatePassword = () => {
  if (ps.value == chk.value) {
    same.innerHTML = "비밀번호가 일치합니다.";
    same.style.color = "blue";
  } else {
    same.innerHTML = "비밀번호가 일치하지 않습니다.";
    same.style.color = "red";
  }
};
chk.addEventListener("input", validatePassword);

// syncNicknameLength
const realtimeCheck = (nickname) =>
  (document.getElementById("count").innerHTML = nickname);

//약관동의/////////////////////////

const $checkAllTerms = document.getElementById("a1");
const $terms = [...document.querySelectorAll(".chk")];

// a1.전부 체크가 됐으면 true 하나라도 풀려있으면 false?
// const isCheckedAllTerms = () => {
//   return $terms.every((value) => value.checked);
// };

// a2.개별 체크 컴포넌트 클릭시
$terms.forEach(($it) => {
  $it.addEventListener("click", () => {
    $checkAllTerms.checked = $terms.every((value) => value.checked);
  });
});

////////////////////////////////////////////////

// b1.전부 체크하기
const checkAllTerms = (isChecked) => {
  $terms.forEach((value) => {
    value.checked = isChecked;
  });
};

// b2.전체 체크 컴포넌트 클릭시
$checkAllTerms.addEventListener("click", (event) => {
  if (event.target.checked) return checkAllTerms(true);

  checkAllTerms(false);
});

///////////////////////////////////
// 숫자카운팅
const checkNumber = () => {
  if (key === "." || key === "-" || (key >= 0 && key <= 10)) {
    return true;
  }
  return false;
};
const numberMaxLength = (e) => {
  const maxLength = 10;

  if (e.value.length > e.maxLength) {
    e.value = e.value.slice(0, maxLength);
  }
  return false;
};

const signin = () => {
  const name = document.getElementById("name");
  const nickname = document.getElementById("nickname");
  const female = document.getElementById("female");
  const male = document.getElementById("male");
  const agree = document.getElementById("a1");

  if (!email.value) {
    alert("이메일을 입력해주세요.");
    $email.focus();
    return false;
  }
  if (!p1.value) {
    alert("비밀번호를 입력하세요.");
    p1.focus();
    return false;
  }
  if (p2.value !== p1.value) {
    alert("비밀번호가 일치하지 않습니다..");
    p2.focus();
    return false;
  }
  if (!name.value) {
    alert("이름을 입력하세요.");
    name.focus();
    return false;
  }
  if (!nickname.value) {
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
};

console.log($email.value);
