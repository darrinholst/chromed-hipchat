var Emoticons = function() {
  var staticEmoticons = [
        {shortcut: "allthethings", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/allthethings.png"},
        {shortcut: "android", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/android.png"},
        {shortcut: "areyoukiddingme", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/areyoukiddingme.png"},
        {shortcut: "arrington", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/8071/mike.png"},
        {shortcut: "ashton", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ashton.png"},
        {shortcut: "atlassian", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/atlassian.png"},
        {shortcut: "awthanks", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/awthanks.png"},
        {shortcut: "awyeah", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/awyea.png"},
        {shortcut: "badass", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/badass.png"},
        {shortcut: "badjokeeel", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/badjokeeel-1375463017.png"},
        {shortcut: "badpokerface", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/badpokerface.png"},
        {shortcut: "basket", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/basket.png"},
        {shortcut: "beer", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/beer.png"},
        {shortcut: "bitbucket", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/bitbucket-1349806629.png"},
        {shortcut: "boom", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/boom.gif"},
        {shortcut: "branch", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/branch-1372171579.png"},
        {shortcut: "bumble", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/bumble.png"},
        {shortcut: "bunny", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/bunny.png"},
        {shortcut: "cadbury", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/cadbury.png"},
        {shortcut: "cake", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/cake.png"},
        {shortcut: "candycorn", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/candycorn.png"},
        {shortcut: "caruso", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/caruso.png"},
        {shortcut: "ceilingcat", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ceilingcat.png"},
        {shortcut: "cereal", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/cerealguy.png"},
        {shortcut: "cerealspit", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/cerealspit-1349463282.png"},
        {shortcut: "challengeaccepted", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/challengeaccepted.png"},
        {shortcut: "chewie", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/chewy.png"},
        {shortcut: "chocobunny", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/chocobunny.png"},
        {shortcut: "chompy", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/chompy.gif"},
        {shortcut: "chris", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/chris.png"},
        {shortcut: "chucknorris", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/chucknorris-1342735388.png"},
        {shortcut: "clarence", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/clarence-1369414730.png"},
        {shortcut: "coffee", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/coffee.png"},
        {shortcut: "confluence", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/confluence-1367948832.png"},
        {shortcut: "content", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/content.png"},
        {shortcut: "continue", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/continue-1369948567.png"},
        {shortcut: "cornelius", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/cornelius.png"},
        {shortcut: "dance", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/dance.gif"},
        {shortcut: "dealwithit", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/dealwithit.gif"},
        {shortcut: "derp", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/derp.png"},
        {shortcut: "disapproval", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/disapproval.png"},
        {shortcut: "dosequis", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/dosequis.png"},
        {shortcut: "drevil", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/drevil.png"},
        {shortcut: "ducreux", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ducreux.png"},
        {shortcut: "dumb", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/dumbbitch.png"},
        {shortcut: "embarrassed", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/embarrassed.png"},
        {shortcut: "facepalm", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/facepalm.png"},
        {shortcut: "failed", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/failed-1369948578.png"},
        {shortcut: "fap", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/fap.png"},
        {shortcut: "firstworldproblem", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/firstworldproblem-1342647915.png"},
        {shortcut: "fonzie", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/fonzie-1386958620.png"},
        {shortcut: "foreveralone", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/foreveralone.png"},
        {shortcut: "freddie", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/freddie.png"},
        {shortcut: "fry", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/fry.png"},
        {shortcut: "fuckyeah", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/fuckyeah.png"},
        {shortcut: "fwp", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/fwp-1342647892.png"},
        {shortcut: "gangnamstyle", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/gangnamstyle-1349387710.gif"},
        {shortcut: "garret", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/garret.png"},
        {shortcut: "gates", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/gates.png"},
        {shortcut: "ghost", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ghost.png"},
        {shortcut: "goodnews", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/farnsworth.png"},
        {shortcut: "greenbeer", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/greenbeer.png"},
        {shortcut: "grumpycat", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/grumpycat-1366734534.png"},
        {shortcut: "gtfo", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/gtfo-1381428639.png"},
        {shortcut: "haveaseat", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/haveaseat.png"},
        {shortcut: "heart", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/heart.png"},
        {shortcut: "hipchat", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/hipchat.png"},
        {shortcut: "hipster", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/hipster.png"},
        {shortcut: "huh", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/huh-1381428657.png"},
        {shortcut: "ilied", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ilied.png"},
        {shortcut: "indeed", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/indeed.png"},
        {shortcut: "iseewhatyoudidthere", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/iseewhatyoudidthere-1348262983.png"},
        {shortcut: "itsatrap", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/6/itsatrap.png"},
        {shortcut: "jackie", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/jackie.png"},
        {shortcut: "jira", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/jira-1350074257.png"},
        {shortcut: "jobs", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/jobs.png"},
        {shortcut: "kennypowers", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/10678/kennypowers.png"},
        {shortcut: "krang", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/krang.gif"},
        {shortcut: "kwanzaa", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/kwanzaa.png"},
        {shortcut: "lincoln", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/lincoln.png"},
        {shortcut: "lol", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/lol.png"},
        {shortcut: "lolwut", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/lolwut.png"},
        {shortcut: "megusta", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/megusta.png"},
        {shortcut: "menorah", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/menorah.png"},
        {shortcut: "mindblown", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/mindblown-1374883007.gif"},
        {shortcut: "ninja", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ninja.png"},
        {shortcut: "notbad", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/notbad.png"},
        {shortcut: "nothingtodohere", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/nothingtodohere.png"},
        {shortcut: "notsureif", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/notsureif-1342015652.png"},
        {shortcut: "notsureifgusta", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/notsureifgusta-1346093311.png"},
        {shortcut: "obama", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/obama-1352231289.png"},
        {shortcut: "ohcrap", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ohcrap.png"},
        {shortcut: "ohgodwhy", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ohgodwhy.jpeg"},
        {shortcut: "okay", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/okay.png"},
        {shortcut: "omg", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/omg.png"},
        {shortcut: "oops", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/oops.png"},
        {shortcut: "orly", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/orly.png"},
        {shortcut: "pbr", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/pbr.png"},
        {shortcut: "pete", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/pete.png"},
        {shortcut: "philosoraptor", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/philosoraptor.png"},
        {shortcut: "pingpong", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/pingpong.png"},
        {shortcut: "pirate", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/pirate.gif"},
        {shortcut: "pokerface", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/pokerface.png"},
        {shortcut: "poo", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/poo.png"},
        {shortcut: "present", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/present.png"},
        {shortcut: "pumpkin", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/pumpkin.png"},
        {shortcut: "rageguy", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/rageguy.png"},
        {shortcut: "rebeccablack", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/rebeccablack.png"},
        {shortcut: "reddit", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/reddit.png"},
        {shortcut: "romney", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/romney-1352231355.png"},
        {shortcut: "rudolph", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/rudolph.png"},
        {shortcut: "sadpanda", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/sadpanda.png"},
        {shortcut: "sadtroll", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/sadtroll.png"},
        {shortcut: "samuel", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/samuel.png"},
        {shortcut: "santa", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/santa.png"},
        {shortcut: "scumbag", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/scumbag.png"},
        {shortcut: "seomoz", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/seomoz.png"},
        {shortcut: "shamrock", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/shamrock.png"},
        {shortcut: "shrug", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/shrug-1349463255.png"},
        {shortcut: "skyrim", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/skyrim.png"},
        {shortcut: "stare", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/stare.png"},
        {shortcut: "stash", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/stash-1391127729.png"},
        {shortcut: "success", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/success-1348262443.png"},
        {shortcut: "successful", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/successful-1369948592.png"},
        {shortcut: "sweetjesus", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/sweetjesus.png"},
        {shortcut: "tableflip", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/tableflip-1349463264.png"},
        {shortcut: "taft", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/taft.png"},
        {shortcut: "tea", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/tea.png"},
        {shortcut: "thumbsdown", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/thumbs_down.png"},
        {shortcut: "thumbsup", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/thumbs_up.png"},
        {shortcut: "tree", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/tree.png"},
        {shortcut: "troll", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/troll.png"},
        {shortcut: "truestory", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/truestory.png"},
        {shortcut: "trump", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/trump-1352738237.png"},
        {shortcut: "turkey", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/turkey-1386104992.png"},
        {shortcut: "twss", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/twss-1348262400.png"},
        {shortcut: "unknown", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/unknown-1369948620.png"},
        {shortcut: "washington", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/washington.png"},
        {shortcut: "wat", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/wat.png"},
        {shortcut: "wtf", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/wtf.png"},
        {shortcut: "yey", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/yey.png"},
        {shortcut: "yodawg", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/yodawg.png"},
        {shortcut: "yougotitdude", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/yougotitdude-1368219664.gif"},
        {shortcut: "yuno", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/yuno.png"},
        {shortcut: "zoidberg", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/zoidberg.png"},
        {shortcut: "zzz", url: "https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/zzz.gif"}
      ],

      _fetch = function(authToken, callback, results, url) {
        url = url || "https://api.hipchat.com/v2/emoticon";
        results = results || [];

        $.ajax(url, {
          data: {auth_token: authToken},
          dataType: 'json',

          error: function() {
            //TODO: do something
          },

          success: function(data) {
            if(data.items.length) {
              results = results.concat(data.items);

              if(data.links.next) {
                _fetch(authToken, callback, results, data.links.next);
                return;
              }
            }

            callback(results);
          }
        });
      },

      fetchAll = function(authToken, success) {
        if(authToken) {
          _fetch(authToken, success);
        } else {
          success(staticEmoticons);
        }
      };

    return {
      fetchAll: fetchAll
    }
}
