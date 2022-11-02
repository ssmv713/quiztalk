
    function check() {
      var p1 = document.getElementById('password').value;
      var p2 = document.getElementById('re_password').value;
      if( p1 != p2 ) {
        document.getElementById("test-n").style.display = "block";
        document.getElementById("test-y").style.display = "none";
        return false;
      } else{
        document.getElementById("test-y").style.display = "block";
        document.getElementById("test-n").style.display = "none";
        return true;
      }

    }

    // 테스트
    function realtimeCheck(val) {
      document.getElementById("count").innerHTML = val; 
      }
    

   