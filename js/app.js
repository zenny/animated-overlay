$(document).ready(function() {
	social_loop();
	alert_loop();
});

function social_loop() {
	$("#twitch-name").delay(15000).fadeOut(500, function() {
		$("#twitter-name").delay(500).fadeIn(500, function() {
			$("#twitter-name").delay(15000).fadeOut(500, function() {
				$("#twitch-name").delay(500).fadeIn(500, function() {
					social_loop();
				});
			});
		});
	});
}

function alert_loop() {
	slide_in_follower();
}

function slide_in_follower() {
	$("#follower").css("display", "block");
	$("#follower-title").css("display", "block");

	$("#follower-content").load("../../most_recent_follower.txt");
	
	$("#alert-container").delay(20000).animate({"left": "280"}, function() {
		$("#follower-title").delay(5000).fadeOut(500, function() {
			$("#follower-content").delay(500).fadeIn(500, function() {
				$("#alert-container").delay(5000).animate({"left": "20"}, function() {
					$("#follower").css("display", "none");
					$("#follower-content").css("display", "none");
					slide_in_subscriber();
				});
			});
		});
	});
}

function slide_in_subscriber() {
	$("#subscriber").css("display", "block");
	$("#subscriber-title").css("display", "block");

	$("#subscriber-content").load("../../most_recent_subscriber.txt");
	
	$("#alert-container").delay(10000).animate({"left": "280"}, function() {
		$("#subscriber-title").delay(5000).fadeOut(500, function() {
			$("#subscriber-content").delay(500).fadeIn(500, function() {
				$("#alert-container").delay(5000).animate({"left": "20"}, function() {
					$("#subscriber").css("display", "none");
					$("#subscriber-content").css("display", "none");
					slide_in_cheer();
				});
			});
		});
	});
}

function slide_in_cheer() {
	$("#cheer").css("display", "block");
	$("#cheer-title").css("display", "block");

	$("#cheer-content").load("most_recent_cheerer.txt");
	
	$("#alert-container").delay(10000).animate({"left": "280"}, function() {
		$("#cheer-title").delay(5000).fadeOut(500, function() {
			$("#cheer-content").delay(500).fadeIn(500, function() {
				$("#alertlatest-container").delay(5000).animate({"left": "20"}, function() {
					$("#cheer").css("display", "none");
					$("#cheer-content").css("display", "none");
					slide_in_donation();
				});
			});
		});
	});
}

function slide_in_donation() {
	$("#donation").css("display", "block");
	$("#donation-title").css("display", "block");

	$("#donation-content").load("most_recent_donator.txt");

	$("#alert-container").delay(10000).animate({"left": "280"}, function() {
		$("#donation-title").delay(5000).fadeOut(500, function() {
			$("#donation-content").delay(500).fadeIn(500, function() {
				$("#alert-container").delay(5000).animate({"left": "20"}, function() {
					$("#donation").css("display", "none");
					$("#donation-content").css("display", "none");
					alert_loop();
				});
			});
		});
	});
}