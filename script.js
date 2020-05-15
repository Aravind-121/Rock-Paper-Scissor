alert("Are u viewing this site on a mobile?..Only a empty space appears?Dont worry Just Turn Your Device to Landscape Mode!")

var name=prompt("Enter Your Name:")
$('#name').html(name+"'s score: <span id='ps'>0</span>");

var imgs=["rock.png","paper.png","scissors.png"]
var ps=$('#ps');
var cs=$('#cs');
P1=0
CE=0
var winning_score=5;
var over=false;
$('#r').click(function(){
	if(over==false){
		$('#ph').attr("src","rock.png");
		var s=(Math.floor(Math.random()*imgs.length))
		var x=$('#ch').attr("src",imgs[s]);
		var L=$('#ph').attr("src");
		var R=$('#ch').attr("src");
		if((L==="rock.png" && R==="scissors.png")){
			P1++;
			ps.text(P1);
			if(P1==winning_score){
				over=true;
				$('p').text("Congragulations!! You Have Won!!!");
			}
		}
		else if((R==="paper.png"&&L==="rock.png")){
			CE++;
			cs.text(CE);
			if(CE==winning_score){
				over=true;
				$('p').text("HaHaHa! Better Luck Next Time :)");
			}
		}
	}
});

$('#p').click(function(){
	if(over==false){
		$('#ph').attr("src","paper.png");
		var s=(Math.floor(Math.random()*imgs.length))
		var x=$('#ch').attr("src",imgs[s]);
		var L=$('#ph').attr("src");
		var R=$('#ch').attr("src");
		if((L==="paper.png" && R==="rock.png")){
			P1++;
			ps.text(P1);
			if(P1==winning_score){
				over=true;
				$('p').text("Congragulations!! You Have Won!!!");
			}
		}
		else if((R==="scissors.png"&& L==="paper.png")){
			CE++;
			cs.text(CE);
			if(CE==winning_score){
				over=true;
				$('p').text("HaHaHa! Better Luck Next Time :)");
			}
		}
	}
});

$('#s').click(function(){
	if(over==false){
		$('#ph').attr("src","scissors.png");
		var s=(Math.floor(Math.random()*imgs.length))
		var x=$('#ch').attr("src",imgs[s]);
		var L=$('#ph').attr("src");
		var R=$('#ch').attr("src");
		if((L==="scissors.png"&& R==="paper.png")){
			P1++;
			ps.text(P1);
			if(P1==winning_score){
				over=true;
				$('p').text("Congragulations!! You Have Won!!!");
			}
		}
		else if((R==="rock.png" && L==="scissors.png")){
			CE++;
			cs.text(CE);
			if(CE==winning_score){
				over=true;
				$('p').text("HaHaHa! Better Luck Next Time :)");
			}
		}
	}
});
$('#reset').click(function(){
	$('p').text("");
	P1=0;
	CE=0;
	over=false;
	ps.text(0);
	cs.text(0);
	$('#ph').attr("src","paper.png");
	$('#ch').attr("src","paper.png");
});

$('input').change(function(){
	if(over==true){
		over=false;
	}
	winning_score=$('input').val();
	$('p').text("")
	P1=0;
	ps.text(P1);
	CE=0;
	cs.text(CE);
})