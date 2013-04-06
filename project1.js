// JavaScript Document
/* check the username and password in the login page*/
function checkLogin() {
	var usrname = document.getElementById("usernametxt").value;
	var pass = document.getElementById("passwordtxt").value;
	if (usrname == "" || pass == "") {
		var hinttip = document.getElementsByClassName("hinttip").item(0);
		hinttip.innerHTML = "账号或密码不能为空！";
		hinttip.className += " warnningtip";
		return false;
	} else {
		return true;
	}
};

/* add link to the button */
function clickReg() {
	document.location.href="register.html";
}

/* add link to the button */
function clickLogin() {
	document.location.href="login.html";
}

/* check username in the register page */
function checkUsrname() {
	var username = document.getElementById("username").value;
	var war = document.getElementsByClassName("regwarning").item(0);
	var patt = new RegExp("^[a-zA-Z]");
	if (username == "") {
		war.innerHTML = "账号不能为空！";
		war.style.visibility = "visible";
	} else if (!patt.test(username)) {
		war.innerHTML = "账号首字母必须是英文！";
		war.style.visibility = "visible";
	} else if (username.length < 4 || username.length > 16) {
		war.innerHTML = "账号长度必须为4-16字符！";
		war.style.visibility = "visible";
	} else {
		war.innerHTML = "";
		war.style.visibility = "hidden";
	}
}

/* check nick name in the register page */
function checkNickname() {
	var nickname = document.getElementById("nickname").value;
	var war = document.getElementsByClassName("regwarning").item(1);
	if (nickname == "") {
		war.innerHTML = "昵称不能为空！";
		war.style.visibility = "visible";
	} else if (nickname.length < 2 || nickname.length > 16) {
		war.innerHTML = "昵称长度必须为2-16字符！";
		war.style.visibility = "visible";
	} else {
		war.innerHTML = "";
		war.style.visibility = "hidden";
	}
}

/* check password in the register page */
function checkPassword1() {
	var password = document.getElementById("pass").value;
	var war = document.getElementsByClassName("regwarning").item(2);
	var patt1 = new RegExp("^[!-~]*$");
	var patt2 = new RegExp("^[0-9]*$");
	if (password == "") {
		war.innerHTML = "密码不能为空！";
		war.style.visibility = "visible";
	} else if (!patt1.test(password)) {
		war.innerHTML = "密码只能是英文数字符号！";
		war.style.visibility = "visible";
	} else if (password.length < 6 || password.length > 16) {
		war.innerHTML = "密码长度必须6-16字符！";
		war.style.visibility = "visible";
	} else if (patt2.test(password)) {
		war.innerHTML = "密码不能为纯数字！";
		war.style.visibility = "visible";
	} else {
		war.innerHTML = "";
		war.style.visibility = "hidden";
	}
}

/* check password again in the register page*/
function checkPassword2() {
	var password1 = document.getElementById("pass").value;
	var password2 = document.getElementById("repass").value;
	var war = document.getElementsByClassName("regwarning").item(3);
	if (password1 != password2) {
		war.innerHTML = "两次密码输入不一致！";
		war.style.visibility = "visible";
	} else {
		war.innerHTML = "";
		war.style.visibility = "hidden";
	}
}

/* check come from in the register page*/
function checkCome() {
	var input = document.getElementById("come").value;
	var war = document.getElementsByClassName("regwarning").item(4);
	if (input == "") {
		war.innerHTML = "请填写您来自哪里！";
		war.style.visibility = "visible";
	} else {
		war.innerHTML = "";
		war.style.visibility = "hidden";
	}
}

/* check real name in the register page*/
function checkName() {
	var input = document.getElementById("tname").value;
	var war = document.getElementsByClassName("regwarning").item(5);
	if (input == "") {
		war.innerHTML = "请填写您的真是姓名！";
		war.style.visibility = "visible";
	} else {
		war.innerHTML = "";
		war.style.visibility = "hidden";
	}
}

/* check identity card number in the register page*/
function checkID() {
	var input = document.getElementById("cardnum").value;
	var war = document.getElementsByClassName("regwarning").item(6);
	if (input == "") {
		war.innerHTML = "请填写您的身份证号！";
		war.style.visibility = "visible";
	} else {
		war.innerHTML = "";
		war.style.visibility = "hidden";
	}
}

/* check how many words written in the weibo */
function checkInCount() {
	var inputEle= document.getElementById("wbwrite");
	var input = inputEle.value;
	var count = getCount(input);
	var output = document.getElementById("wordcount");
	var number = Math.floor((292 - count) / 2);
	var first = Math.floor(number / 10);
	var second = number % 10;
	if (count > 292) {
		inputEle.value = input.substring(0, i - 1);
	} else {
		output.innerHTML = "还可输入 " + first + "<strong>" + second + "</strong> 字";
	}
}

/* count words */
function getCount(input) {
	var count = 0;
	i = 0;
	for (; i < input.length && count <= 292; i++) {
		if (input.charCodeAt(i) > 0 && input.charCodeAt(i) < 128) {
			count++;
		} else {
			count += 2;
		}
	}
	return count;
}