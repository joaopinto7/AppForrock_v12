/**
	Contador de dias
	@version - 0.1
*/
montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")

function countup(yr,m,d){
today=new Date()
todayy=today.getYear()
if (todayy < 1000)
todayy+=1900
todaym=today.getMonth()
todayd=today.getDate()
todaystring=montharray[todaym]+" "+todayd+", "+todayy
paststring=montharray[m-1]+" "+d+", "+yr
difference=((Math.round((Date.parse(todaystring)-Date.parse(paststring))/(24*60*60*1000))*1)*-1)
difference+=""
document.write(""+difference+"")

}
//Insira a data no formato Ano/Mes/Dia
countup(2015,06,26)
