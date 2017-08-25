$(document).ready(function() {

	$('#time').hide();
	$('#questions').hide();

	$('#start-button').click(function(){
		var correctAnswers = 0;
		var incorrectAnswers = 0;
		var unanswered = 0;

		var time = 30;

		$('#start-button').hide();
		$('#time').show();
		$('#questions').show();


		function timed() {
			setInterval(decrement, 1000);
		}

		function decrement() {
			time--;
			$('#remaining-time').html(time+" Seconds");
			if (time == 0) {
				result();
			}
		}

		function result() {
			$('#time').hide();
			$('#questions').hide();
			$('#result').show();

			// check for correct answers
			if ($('input[name=question1]:checked').length > 0) {
				if ($("input[name=question1]:checked").val() == 'b') {
					correctAnswers++;
				} else {
					incorrectAnswers++;
				}
			}
			else {
				unanswered++;
			}

			if ($('input[name=question2]:checked').length > 0) {
				if ($("input[name=question2]:checked").val() == 'a') {
					correctAnswers++;
				} else {
					incorrectAnswers++;
				}
			}
			else {
				unanswered++;
			}

			if ($('input[name=question3]:checked').length > 0) {
				if ($("input[name=question3]:checked").val() == 'c') {
					correctAnswers++;
				} else {
					incorrectAnswers++;
				}
			}
			else {
				unanswered++;
			}

			$('#result').html("Correct answers : " + correctAnswers + "<br>Incorrect Answers : " + incorrectAnswers + "<br>Unanswered : " + unanswered);

		};

		timed();

	});
});