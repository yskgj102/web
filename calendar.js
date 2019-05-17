function clickBtn1() {
		const color1 = document.form1.color1;
		const month = document.form1.month;
		// 値(数値)を取得
		const num = color1.selectedIndex;
		const num2 = month.selectedIndex;
		//const num = document.form1.color1.selectedIndex;
		// 値(数値)から値(value値)を取得
		const str = color1.options[num].value;
		const str2 = month.options[num2].value;
		//const str = document.form1.color1.options[num].value;
		document.getElementById("span1").textContent = str;
		document.getElementById("span2").textContent = str2;
	}
	function cal(year, month, day) {
		today = new Date();
		if (!year)
			var year = today.getFullYear();
		if (!month)
			var month = today.getMonth();
		else
			month--;
		if (!day)
			var day = today.getDate();
		var leap_year = false;
		if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
			leap_year = true;
		lom = new Array(31, 28 + leap_year, 31, 30, 31, 30, 31, 31, 30, 31, 30,
				31);
		dow = new Array("日", "月", "火", "水", "木", "金", "土");
		var days = 0;
		for (var i = 0; i < month; i++)
			days += lom[i];
		var week = Math.floor((year * 365.2425 + days) % 7);
		var j = 0;
		var when = year + "年 " + (month + 1) + "月";
		var calendar = "<table summary=\""+when+"のカレンダー\">\n";
		calendar += "<caption>" + when + "<\/caption>\n<tr>";
		for (i = 0; i < 7; i++)
			calendar += "<td>" + dow[i] + "<\/td>";
		calendar += "<\/tr>\n<tr>";
		for (i = 0; i < week; i++, j++)
			calendar += "<td><\/td>";
		for (i = 1; i <= lom[month]; i++) {
			calendar += "<td";
			//比較する日付オブジェクトを２つ定義する

			var day1 = new Date(2019, 4, 4);
			var day2 = new Date(year, month, i);
			//差日を求める（86,400,000ミリ秒＝１日）
			var termDay = (Math.floor((day2 - day1) / 86400000));
			if (termDay < 0)
				termDay += 6;
			if (termDay % 6 == 0 || termDay % 6 == 1 || termDay % 6 == 2) {
				if (!(termDay % 6 == 2 && day2.getDay() == 0)) {
					if (!(termDay % 6 == 2 && day2.getDay() == 3)) {
						calendar += " class=\"today\"";
					}
				}
			}
			calendar += ">" + i + "<\/td>";

			j++;
			if (j > 6) {
				calendar += "<\/tr>\n<tr>";
				j = 0;
			}
		}
		for (i = j; i > 6; i++)
			calendar += "<td><\/td>";
		calendar += "<\/tr>\n<\/table>\n";
		return calendar;
	}
// -->
