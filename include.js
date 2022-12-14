$(document).ready(function(){
	console.log($(document));
	var last_minute = 20;
	var last_second = 0;
	var m = [];
	var s = [];
	for(var i=0; i<4; i++){
	  m[i]=[0, 0, 0, 0];
	  s[i]=[0, 0, 0, 0];
	}  

	function show_time(){
		if(last_minute < 10){
			if(last_second < 10){
				$(".lasttime").html("0"+last_minute+":0"+last_second);
			}
			else{
				$(".lasttime").html("0"+last_minute+":"+last_second);
			}
		}
		else{
			if(last_second < 10){
				$(".lasttime").html(last_minute+":0"+last_second);
			}
			else{
				$(".lasttime").html(last_minute+":"+last_second);
			}
		}
		for(var i=0; i<4; i++){
			for(var j=0; j<4; j++){
				var a = i+1, b = j+1;
				if(m[i][j] < 10){
					if(s[i][j] < 10){
						$(".cardtime"+a+b).html("0"+m[i][j]+":0"+s[i][j]);
					}
					else{
						$(".cardtime"+a+b).html("0"+m[i][j]+":"+s[i][j]);
					}
				}
				else{
					if(s[i][j] < 10){
						$(".cardtime"+a+b).html(m[i][j]+":0"+s[i][j]);
					}
					else{
						$(".cardtime"+a+b).html(m[i][j]+":"+s[i][j]);
					}
				}
			}
		}
	}
	$(".addtime").click(function(){
		last_minute += 5;
		show_time();
	});
	$(".mitime").click(function(){
		if(last_minute >= 5){
			last_minute -= 5;
			show_time();
		}
		else{
			last_minute = 0;
			show_time();
		}
	});
	$(".reset").click(function(){
		last_second = 0;
		last_minute = 0;
		for(var i=0; i<4; i++){
		  m[i]=[0, 0, 0, 0];
		  s[i]=[0, 0, 0, 0];
		}  
		show_time();
	});
	$(".start").click(function(){
		clearInterval(center_time);
		var center_time = setInterval(function(){
			if(last_second != 0){
				show_time();
				last_second --;
			}
			else if(last_minute == 0){
				last_second = 0;
				show_time();
				clearInterval(center_time);
			}
			else{
				show_time();
				last_minute --;
				last_second = 59;
			}
			for(var i=0; i<4; i++){
				for(var j=0; j<4; j++){
					if(s[i][j] != 0){
						show_time();
						s[i][j] --;
					}
					else if(m[i][j] == 0){
						s[i][j] = 0;
						show_time();
					}
					else{
						show_time();
						m[i][j] --;
						s[i][j] = 59;
					}
				}
			}

		}, 1000);		
	});
	var score1 = 0, score2 = 0, score3 = 0, score4 = 0;
	$("#enter1").click(function(){
		var s1 = $("#input1").val();
		$("#input1").val("");
		if(s1[0] == '+'){
 			var s = s1.slice(1);
 			s = parseInt(s);
 			score1 += s;
 			$(".score1").html(score1);
		}
		if(s1[0] == '-'){
			var s = s1.slice(1);
 			s = parseInt(s);
 			score1 -= s;
 			$(".score1").html(score1);
		}
	});


	$(".card11").click(function(){
		m[0][0] += 3;
		show_time();
	});
	$(".reset11").click(function(){
		m[0][0] = 0;
		s[0][0] = 0;
	});

	$(".card12").click(function(){
		m[0][1] += 3;
		show_time();
	});
	$(".reset12").click(function(){
		m[0][1] = 0;
		s[0][1] = 0;
	});

	$(".card13").click(function(){
		m[0][2] += 3;
		show_time();
	});

	$(".reset13").click(function(){
		m[0][2] = 0;
		s[0][2] = 0;
	});

	$(".card14").click(function(){
		m[0][3] += 3;
		show_time();
	});
	$(".reset14").click(function(){
		m[0][3] = 0;
		s[0][3] = 0;
	});


});