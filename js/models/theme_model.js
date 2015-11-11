'use strict';

app.service('Theme', ['$log', '$http', function($log, $http) {
  this.feeds = [{
    id: "pokernews",
    title: "PokerNews.com",
    description: "PokerNews.com is the world's leading poker website. Among other things, visitors will find a daily dose of articles with the latest poker news, live reporting from tournaments, exclusive videos, podcasts and so much more.",
    logo: "/img/pokernews_large.jpg",
    //logo: "http://www.google.com/s2/favicons?domain=www.pokernews.com",
    url: "http://www.pokernews.com/",
    rssurl: "http://www.pokernews.com/rss"
  }, {
    id: "pokerlistings",
    title: "PokerListings.com",
    description: "PokerListings.com is the world's largest and most trusted online  poker guide, offering the best online poker bonus deals guaranteed, over  $1m in exclusive freerolls every year and the most free poker content  available on the Web.",
    logo: "/img/pokerlistings.png",
    url: "http://www.pokerlistings.com/",
    rssurl: "http://www.pokerlistings.com/feed/news"
  }, {
    id: "cardplayer",
    title: "CardPlayer.com",
    description: "CardPlayer.com is the world's oldest and most well respected poker magazine and online poker guide. Since 1988, CardPlayer has provided poker players with poker strategy, poker news, and poker results. Today, CardPlayer.com is the best poker information portal for free poker content, offering online poker site reviews and exclusive online poker bonus deals. \
We offer daily poker news, poker professionals' blogs and tweets, exclusive poker videos, thousands of free poker articles, as well as coverage from all major poker tournaments in the world. You can also find here poker player profiles, tournament poker results, poker rules, poker strategy articles, poker books, poker magazines, poker tools and poker training resources. \
Ever wonder who is the best poker player in the world? Check out our Poker Player of the Year race, as well as years of data of poker player results and casino poker tournament pay-outs.",
    logo: "/img/cardplayer.png",
    url: "http://www.cardplayer.com/",
    rssurl: "http://www.cardplayer.com/poker-news.rss"
  }, {
    id: "wptblog",
    title: "WPT Blog",
    description: "ClubWPT is the official membership site of the World Poker Tour. All members can play unlimited poker for fun and excitement. Eligible VIP Members can play for over $100,000 in cash and prizes* each month, including seats to WPT events.",
    logo: "/img/wpt-logo.jpg",
    url: "http://blog.worldpokertour.com/",
    rssurl: "http://blog.worldpokertour.com/tag/clubwpt/feed/"
  }, {
    id: "pokerjunkie",
    title: "PokerJunkie.com",
    description: "Online poker is a genuine pursuit, whether as a pastime, hobby or work. It deserves to be treated as a legitimate field of interest: with respect. Curiosity. Commitment. Love, if you like. \
The Poker Junkie editorial team always walks the extra mile to give you the best in online poker. Best bonus offers, best blogs, best poker forum. It’s our goal to build really helpful resources for learning poker strategy, poker theory and poker math. \
Our knowledgeable poker editors have been “on the road” in online poker for a long time. They see it as a mission to share their knowledge of today’s online poker scene. Where are the best bonuses? Where are the best tournaments? Which cash games are the easiest to beat right now? \
Whether you’re on the hunt for a good poker site or looking for a place to share your joy and frustrations after the latest tourney, we hope that Poker Junkie can be your home in online poker. Come in from the cold!",
    logo: "/img/pokerjunkie.jpg",
    url: "http://www.pokerjunkie.com/",
    rssurl: "http://blog.pokerjunkie.com/feed"
  }, {
    id: "pokerstarts",
    title: "PokerStars.net",
    description: "PokerStars.net - the world's biggest play money only online poker room",
    logo: "/img/pokerstars-logo.png",
    url: "http://www.pokerstars.net",
    rssurl: "http://www.pokerstars.net/blog/news/rss"
  }, ];

  this.loadFeeds = function(feedType, callback) {

  	// var req = {
 		// 	method: 'GET',
   // 		url: 'https://feed2mail.com/be/be.asmx/GetSuggested?feedType=' + feedType,
   // 		headers: {
   //   		'Content-Type': 'application/json; charset=utf-8'
   // 		}
 		// }

 		var url = 'https://feed2mail.com/be/be.asmx/GetSuggested?feedType=' + feedType;
 		console.log(url);
  	var req = {
    	method : 'GET',
    	url: url,
    	data: {},
    	headers: {
      	'Accept': 'application/json, text/javascript, */*; q=0.01',
      	'Content-Type': 'application/json; charset=utf-8'
    	}
    };

    $http(req).then(function(res) {
      console.log(res);
			callback(res.data.d);      
    }, function(res) {
      console.log("Error retrieving feeds", res);
      callback(null);
    });
  }
}]);
