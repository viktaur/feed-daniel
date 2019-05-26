$(document).ready(function() {
	$(emojiArr).each(function(i) {
		var toAppend =
			"<li class='food-item'><span>" +
			emojiArr[i].icon +
			"</span><span>" +
			emojiArr[i].name +
			"</span>" +
			"</li>";
		$(".food-choices").append(toAppend);
	});
});

$(".food-choices").on("click", ".food-item", function() {
	var item = $(this).find("span:first-child");
	$(".chosen-items li:empty:first").text(item.text());
});

$(".chosen-items li").on("click", function() {
	$(this).text("");
});

$(".js-feed").on("click", function() {
	var score = 0;
	$(".chosen-items li:not(:empty)").each(function() {
		var text = $(this).text();
		$.grep(emojiArr, function(e, i) {
			if (e.icon === text) {
				score = score + parseInt(emojiArr[i].score);
			}
		});
	});
	
	var randomNumber = Math.floor(Math.random() * 4);

	var positive = [
		"Wooooow!",
		"Yaaay, such yummy things.",
		"Thaaanks.",
		"Wow, what do you want? A medal?"
	];
	var neutral = [
		"We need to get foodings.",
		"You just about made it.",
		"Oh nooooo.",
		"Tough."
	];
	var negative = [
		"Why do you feed me such disgusting things?",
		"So terrible you are.",
		"Bad luck.",
		"Why is life so cruel to the young, handsome Daniel?"
	];

	if (score > 5) {
		$(".response").html("🎉 The human is satisfied! 🎉");
		$(".response-dialog").html(positive[randomNumber]);
		$(".avatar__mouth").attr("class", "avatar__mouth happy");
	} else if (score <= 5 && score > 0) {
		$(".response").html("Daniel barely ate 😔");
		$(".response-dialog").html(neutral[randomNumber]);
		$(".avatar__mouth").attr("class", "avatar__mouth neutral");
	} else if (score <= 0) {
		$(".response").html("Daniel is starving ☠️");
		$(".response-dialog").html(negative[randomNumber]);
		$(".avatar__mouth").attr("class", "avatar__mouth sad");
	}
});

$(".js-reset").on("click", function() {
	$(".chosen-items li, h5").text("");
	$(".response-dialog").html('Feed me!');
	$(".avatar__mouth").attr("class", "avatar__mouth");
});


/**




IF YOU SCROLL ANY FURTHER
YOU WILL GET THE ANSWER KEY





**/

var emojiArr = [
	{ icon: "🍚", score: "4", name: "Rice" },
	{ icon: "🍕", score: "2", name: "Pizza" },
	{ icon: "🍔", score: "3", name: "Burger" },
	{ icon: "🍣", score: "-4", name: "Sushi" },
	{ icon: "🍟", score: "6", name: "Fries" },
	{ icon: "🌭", score: "1", name: "Hotdog" },
	{ icon: "🥓", score: "-3", name: "Bacon" },
	{ icon: "🥚", score: "4", name: "Eggs" },
	{ icon: "🥞", score: "-3", name: "Pancakes" },
	{ icon: "🍞", score: "2", name: "Bread" },
	{ icon: "🥨", score: "-4", name: "Pretzel" },
	{ icon: "🧀", score: "3", name: "Cheese" },
	{ icon: "🥗", score: "-5", name: "Salad" },
	{ icon: "🥙", score: "-6", name: "Burito" },
	{ icon: "🥪", score: "-3", name: "Egg Sandwich" },
	{ icon: "🌮", score: "1", name: "Taco" },
	{ icon: "🍖", score: "3", name: "Pork" },
	{ icon: "🍗", score: "4", name: "Chicken" },
	{ icon: "🥩", score: "8", name: "Steak" },
	{ icon: "🦐", score: "-5", name: "Shrimp" },
	{ icon: "🐟", score: "-5", name: "Fish" },
	{ icon: "🦀", score: "-6", name: "Crab" },
	{ icon: "🐙", score: "-7", name: "Octopus" },
	{ icon: "🦑", score: "-7", name: "Squid" },
	{ icon: "🍅", score: "-2", name: "Tomatoes" },
	{ icon: "🍄", score: "-10", name: "Mushrooms" },
	{ icon: "🌽", score: "1", name: "Corn" },
	{ icon: "🥒", score: "-3", name: "Cucumber" },
	{ icon: "🍆", score: "-5", name: "Eggplant" },
	{ icon: "🥑", score: "-5", name: "Avocado" },
	{ icon: "🥔", score: "8", name: "Potatoes" },
	{ icon: "🥦", score: "-6", name: "Broccoli" },
	{ icon: "🥕", score: "3", name: "Carrots" },
	{ icon: "🥡", score: "1", name: "Noodles" },
	{ icon: "🍱", score: "1", name: "Bento Box" },
	{ icon: "🍙", score: "-2", name: "Riceball" },
	{ icon: "🍛", score: "4", name: "Curry with Rice" },
	{ icon: "🍜", score: "4", name: "Ramen" },
	{ icon: "🥟", score: "1", name: "Dumpling" },
	{ icon: "🍲", score: "-6", name: "Mushroom Soup" },
	{ icon: "🍝", score: "4", name: "Pasta" },
	{ icon: "🥘", score: "-3", name: "Paella" },
	{ icon: "🥣", score: "2", name: "Cereal" },
	{ icon: "🥜", score: "2", name: "Peanuts" },
	{ icon: "🍿", score: "2", name: "Salted Popcorn" },
	{ icon: "🥧", score: "-3", name: "Pie" },
	{ icon: "🍦", score: "3", name: "Ice-cream" },
	{ icon: "🍩", score: "3", name: "Krispy Kreme" },
	{ icon: "🍪", score: "-2", name: "Chips Ahoy" },
	{ icon: "🎂", score: "5", name: "Chocolate Cake" },
	{ icon: "🍰", score: "-5", name: "Strawberry Shortcake" },
	{ icon: "🍫", score: "3", name: "Chocolate" },
	{ icon: "🍬", score: "4", name: "Sweeties" },
	{ icon: "🍮", score: "-1", name: "Pudding" },
	{ icon: "🥝", score: "-3", name: "Kiwi" },
	{ icon: "🍇", score: "3", name: "Grapes" },
	{ icon: "🍉", score: "0", name: "Watermelon" },
	{ icon: "🍊", score: "2", name: "Oranges" },
	{ icon: "🍌", score: "5", name: "Bananas" },
	{ icon: "🍍", score: "1", name: "Pineapples" },
	{ icon: "🍎", score: "2", name: "Apples" },
	{ icon: "🍓", score: "4", name: "Strawberries" },
	{ icon: "🍑", score: "-3", name: "Peaches" },
	{ icon: "🍐", score: "3", name: "Pears" },
	{ icon: "🍒", score: "-2", name: "Cherries" },
	{ icon: "🥛", score: "1", name: "Milk" },
	{ icon: "☕", score: "-5", name: "Coffee" },
	{ icon: "🍵", score: "-3", name: "Tea" },
	{ icon: "🥤", score: "6", name: "Coke" },
	{ icon: "🍺", score: "-3", name: "Beer" },
	{ icon: "🍷", score: "-4", name: "Wine" },
	{ icon: "🍾", score: "4", name: "Apple Cider" }
];