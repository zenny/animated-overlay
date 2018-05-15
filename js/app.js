$(document).ready(function() {
	/* Change this to the width you used in css/style.css for
	 * #social-container.
	 */
	var social_container_width = 260;

	social_loop();
	alert_loop(social_container_width);
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

function alert_loop(width) {
	slide_in_follower(width);
}

function slide_in_follower(width) {
	$("#follower").css("display", "block");
	$("#follower-title").css("display", "block");

	$("#follower-content").load("../../most_recent_follower.txt");
	
	$("#alert-container").delay(20000).animate({"left": width + 20}, function() {
		$("#follower-title").delay(5000).fadeOut(500, function() {
			$("#follower-content").delay(500).fadeIn(500, function() {
				$("#alert-container").delay(5000).animate({"left": "20"}, function() {
					$("#follower").css("display", "none");
					$("#follower-content").css("display", "none");
					slide_in_subscriber(width);
				});
			});
		});
	});
}

function slide_in_subscriber(width) {
	$("#subscriber").css("display", "block");
	$("#subscriber-title").css("display", "block");

	$("#subscriber-content").load("../../most_recent_subscriber.txt");
	
	$("#alert-container").delay(10000).animate({"left": width + 20}, function() {
		$("#subscriber-title").delay(5000).fadeOut(500, function() {
			$("#subscriber-content").delay(500).fadeIn(500, function() {
				$("#alert-container").delay(5000).animate({"left": "20"}, function() {
					$("#subscriber").css("display", "none");
					$("#subscriber-content").css("display", "none");
					slide_in_cheer(width);
				});
			});
		});
	});
}

function slide_in_cheer(width) {
	$("#cheer").css("display", "block");
	$("#cheer-title").css("display", "block");

	$("#cheer-content").load("../../most_recent_cheerer.txt");
	
	$("#alert-container").delay(10000).animate({"left": width + 20}, function() {
		$("#cheer-title").delay(5000).fadeOut(500, function() {
			$("#cheer-content").delay(500).fadeIn(500, function() {
				$("#alert-container").delay(5000).animate({"left": "20"}, function() {
					$("#cheer").css("display", "none");
					$("#cheer-content").css("display", "none");
					slide_in_donation(width);
				});
			});
		});
	});
}

function slide_in_donation(width) {
	$("#donation").css("display", "block");
	$("#donation-title").css("display", "block");

	$("#donation-content").load("../../most_recent_donator.txt");

	$("#alert-container").delay(10000).animate({"left": width + 20}, function() {
		$("#donation-title").delay(5000).fadeOut(500, function() {
			$("#donation-content").delay(500).fadeIn(500, function() {
				$("#alert-container").delay(5000).animate({"left": "20"}, function() {
					$("#donation").css("display", "none");
					$("#donation-content").css("display", "none");
					alert_loop(width);
				});
			});
		});
	});
}