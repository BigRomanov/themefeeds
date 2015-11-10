'use strict';

app.service('Theme', ['$log', '$http', function($log, $http) {
	this.feeds = [
	{
		id: "pokernews",
		title: "PokerNews.com",
		description: "PokerNews.com is the world's leading poker website. Among other things, visitors will find a daily dose of articles with the latest poker news, live reporting from tournaments, exclusive videos, podcasts and so much more.",
		logo: "/img/pokernews_large.jpg" ,
		//logo: "http://www.google.com/s2/favicons?domain=www.pokernews.com",
		url: "http://www.pokernews.com/",
		rssurl: "http://www.pokernews.com/rss"
	},
	{
		id: "pokernews",
		title: "PokerNews.com",
		img: "http://www.pokernews.com/img/pokernews.png" ,
		url: "http://www.pokernews.com/",
		rssurl: "http://www.pokernews.com/rss"
	},
	{
		id: "pokernews",
		title: "PokerNews.com",
		img: "http://www.pokernews.com/img/pokernews.png" ,
		url: "http://www.pokernews.com/",
		rssurl: "http://www.pokernews.com/rss"
	},
	{
		id: "pokernews",
		title: "PokerNews.com",
		img: "http://www.pokernews.com/img/pokernews.png" ,
		url: "http://www.pokernews.com/",
		rssurl: "http://www.pokernews.com/rss"
	},
	{
		id: "pokernews",
		title: "PokerNews.com",
		img: "http://www.pokernews.com/img/pokernews.png" ,
		url: "http://www.pokernews.com/",
		rssurl: "http://www.pokernews.com/rss"
	},
	{
		id: "pokernews",
		title: "PokerNews.com",
		img: "http://www.pokernews.com/img/pokernews.png" ,
		url: "http://www.pokernews.com/",
		rssurl: "http://www.pokernews.com/rss"
	},
	];
}]);