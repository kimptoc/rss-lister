$(function() {

    console.log("loading...");

    var rss_feed = "http://feeds.pinboard.in/rss/secret:9a854780513e93dfab88/u:kimptoc/t:mysites/";

    RSSParser.parseURL(rss_feed, function(err, parsed) {
      console.log(parsed.feed.title);
      parsed.feed.entries.forEach(function(entry) {
        console.log(entry.title + ':' + entry.link);
      })
    })

});