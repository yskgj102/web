<script type="text/javascript"><!--
function cal(year,month,day) {
 today=new Date();
 if (!year) var year=today.getFullYear();
 if (!month) var month=today.getMonth();
 else month--;
 if (!day) var day=today.getDate();
 var leap_year=false;
 if ((year%4 == 0 && year%100 != 0) || (year%400 == 0)) leap_year=true;
 lom=new Array(31,28+leap_year,31,30,31,30,31,31,30,31,30,31);
 dow=new Array("日","月","火","水","木","金","土");
 var days=0;
 for (var i=0; i < month; i++) days+=lom[i];
 var week=Math.floor((year*365.2425+days)%7);
 var j=0;
 var when=year+"年 "+(month+1)+"月";
 var calendar="<table summary=\""+when+"のカレンダー\">\n";
 calendar+="<caption>"+when+"<\/caption>\n<tr>";
 for (i=0; i < 7; i++) calendar+="<td>"+dow[i]+"<\/td>";
 calendar+="<\/tr>\n<tr>";
 for (i=0; i < week; i++,j++) calendar+="<td><\/td>";
 for (i=1; i <= lom[month]; i++) {
  calendar+="<td";
  if (day == i) calendar+=" class=\"today\"";
  calendar+=">"+i+"<\/td>";
  j++;
  if (j > 6) { 
   calendar+="<\/tr>\n<tr>";
   j=0;
  }
 }
 for (i=j; i > 6; i++) calendar+="<td><\/td>";
 calendar+="<\/tr>\n<\/table>\n";
 return calendar;
}
// -->
</script>
