$(document).ready(function() {

	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var unanswered = 0;

	var time = 30;

	function timed() {
		setInterval(decrement, 1000);
	}

	function decrement() {
		time--;
		$('#remaining-time').html("Time Remaining: "+time+" Seconds");

	}

	timed();









});