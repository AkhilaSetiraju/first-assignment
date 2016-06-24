var gratefultags = gratefultags || {};
gratefultags.cmd = gratefultags.cmd || [];
gratefultags.cmd.push(function() {
  gratefultags.ads().init({
    prebid: true,
    prebidTimeout: 1800,
    autoRefresh: false,
    refreshInterval: 120000,
    // swoop: 'SW-72957175-45425',
    gumgum: 'd8c1e862',
    // gumgum: {
    //   id: 'd8c1e862',
    //   inImageMax: 1
    // },
    ads: {
      'gad-10012': [{
        adunit: '/170923132/a.sallysbakingaddiction',
        // selector: '.top-ad',
        matches: '(min-width: 728px)',
        sizes: [[728,90], [970,250], [970,90]],
        targeting: [['pos', 'atf']],
        bids: [{
          bidder: 'sovrn',
          params: {
            tagid: '350909'
          }
        },{
          bidder: 'yieldbot',
          params: {
            psn: 'PKlB',
            slot: 'leaderboard'
          }
        },{
          bidder: 'rubicon',
          params: {
            accountId: '15038',
            siteId: '89284',
            zoneId: '420232',
            sizes: [2]
          }
        },{
          bidder: 'brealtime',
          params: { placementId: '7892608' }
        }]
      },{
        adunit: '/170923132/a.sallysbakingaddiction',
        // selector: '.top-ad',
        sizes: [[320,50]],
        targeting: [['pos', 'atf']],
        bids: [{
          bidder: 'yieldbot',
          params: {
            psn: '117S',
            slot: 'MLB'
          }
        },{
          bidder: 'rubicon',
          params: {
            accountId: '15038',
            siteId: '89288',
            zoneId: '420248',
            sizes: [43]
          }
        },{
          bidder: 'brealtime',
          params: { placementId: '7896597' }
        }]
      }],
      'gad-sidebar-top': [{
        adunit: '/170923132/a.sallysbakingaddiction',
        selector: '#text-41',
        injectPosition: 'beforeend',
        // selector: '.widget-2',
        matches: '(min-width: 600px)',
        sizes: [[300,1050], [300,600], [300,250]],
        targeting: [['pos','btf']],
        bids: [{
          bidder: 'yieldbot',
          params: {
            psn: 'PKlB',
            slot: 'sb'
          }
        },{
          bidder: 'rubicon',
          params: {
            accountId: '15038',
            siteId: '89284',
            zoneId: '420236',
            sizes: [10,15]
          }
        },{
          bidder: 'sovrn',
          params: { tagid: '350907' }
        // },{
        //   bidder: 'sovrn',
        //   params: { tagid: '350905' }
        },{
          bidder: 'brealtime',
          params: { placementId: '7895043' }
        }]
      },{
        adunit: '/170923132/a.sallysbakingaddiction',
        // selector: '.widget-2',
        sizes: [[300,250]],
        targeting: [['pos','btf']],
        bids: [{
          bidder: 'yieldbot',
          params: {
            psn: '117S',
            slot: 'mobrec'
          }
        },{
          bidder: 'rubicon',
          params: {
            accountId: '15038',
            siteId: '89284',
            zoneId: '420236',
            sizes: [15]
          }
        },{
          bidder: 'sovrn',
          params: { tagid: '350905' }
        }]
      }],
      'gad-sidebar-middle': [{
        adunit: '/170923132/a.sallysbakingaddiction',
        matches: '(min-width: 600px)',
        sizes: [[300,600], [300,250]],
        targeting: [['pos','btf']],
        bids: [{
          bidder: 'yieldbot',
          params: {
            psn: 'PKlB',
            slot: 'rec'
          }
        },{
          bidder: 'rubicon',
          params: {
            accountId: '15038',
            siteId: '89284',
            zoneId: '420236',
            sizes: [10,15]
          }
        },{
          bidder: 'sovrn',
          params: { tagid: '350908' }
        // },{
        //   bidder: 'sovrn',
        //   params: { tagid: '350906' }
        },{
          bidder: 'brealtime',
          params: { placementId: '7895223' }
        }]
      },{
        adunit: '/170923132/a.sallysbakingaddiction',
        // selector: '.widget-2',
        sizes: [[300,250]],
        targeting: [['pos','btf']],
        bids: [{
          bidder: 'yieldbot',
          params: {
            psn: '117S',
            slot: 'mobrec'
          }
        },{
          bidder: 'rubicon',
          params: {
            accountId: '15038',
            siteId: '89288',
            zoneId: '420252',
            sizes: [15]
          }
        },{
          bidder: 'sovrn',
          params: { tagid: '350906' }
        }]
      }],
      'gad-sidebar-video': [{
        adunit: '/170923132/a.sallysbakingaddiction',
        matches: '(min-width: 600px)',
        sizes: [[300,250]],
        targeting: [['type','video']]
      }],
      'gad-sidebar-middle-left': [{
        adunit: '/170923132/a.sallysbakingaddiction',
        selector: '.midsidebar .leftsidebar',
        // injectPosition: 'afterbegin',
        // matches: '(min-width: 600px)',
        sizes: [[160,600],[120,600]],
        targeting: [['pos','btf']],
        bids: [{
          bidder: 'rubicon',
          params: {
            accountId: '15038',
            siteId: '89284',
            zoneId: '420236',
            sizes: [9]
          }
        },{
          bidder: 'sovrn',
          params: { tagid: '350904' }
        }]
      }],
      'gad-sidebar-middle-right': [{
        adunit: '/170923132/a.sallysbakingaddiction',
        selector: '.midsidebar .rightsidebar',
        // injectPosition: 'afterbegin',
        // matches: '(min-width: 600px)',
        sizes: [[160,600],[120,600]],
        targeting: [['pos','btf']],
        bids: [{
          bidder: 'rubicon',
          params: {
            accountId: '15038',
            siteId: '89284',
            zoneId: '420236',
            sizes: [9]
          }
        },{
          bidder: 'sovrn',
          params: { tagid: '358997' }
        }]
      }],
      'gad-incontent-1': {
        selector: '#content .singlepost p:nth-of-type(3)',
        adunit: '/170923132/a.sallysbakingaddiction',
        sizes: [[300,250],[300,100]],
        matches: '(max-width: 600px)',
        targeting: [['pos','btf']],
        bids: [{
          bidder: 'rubicon',
          params: {
            accountId: '15038',
            siteId: '89284',
            zoneId: '420236',
            sizes: [10]
          }
        },{
          bidder: 'sovrn',
          params: { tagid: '360743' }
        },{
          bidder: 'brealtime',
          params: { placementId: '7896244' }
        }]
      },
      'gad-incontent-2': {
        selector: '#content .singlepost p:nth-of-type(8)',
        adunit: '/170923132/a.sallysbakingaddiction',
        sizes: [[300,250],[300,100]],
        matches: '(max-width: 600px)',
        targeting: [['pos','btf']],
        bids: [{
          bidder: 'rubicon',
          params: {
            accountId: '15038',
            siteId: '89284',
            zoneId: '420236',
            sizes: [10]
          }
        },{
          bidder: 'sovrn',
          params: { tagid: '360744' }
        },{
          bidder: 'brealtime',
          params: { placementId: '7896408' }
        }]
      },
      'gad-incontent-3': {
        selector: '#content .singlepost p:nth-of-type(14)',
        adunit: '/170923132/a.sallysbakingaddiction',
        sizes: [[300,250],[300,100]],
        matches: '(max-width: 600px)',
        targeting: [['pos','btf']],
        bids: [{
          bidder: 'rubicon',
          params: {
            accountId: '15038',
            siteId: '89284',
            zoneId: '420236',
            sizes: [10]
          }
        },{
          bidder: 'sovrn',
          params: { tagid: '360745' }
        },{
          bidder: 'brealtime',
          params: { placementId: '7896590' }
        }]
      },
      // 'gad-incontent-1': {
      //   selector: ''
      // },
      'gad-inline-video': {
        selector: 'body',
        injectPosition: 'beforeend',
        matches: function() {
          var tag = document.querySelector('meta[property*="published_time"]');
          if (tag) {
            var dt = new Date(tag.getAttribute('content'));
            if (dt instanceof Date) {
              // at least 14 days old
              return +dt + 1209600000 < Date.now();
            }
          }
          return false;
        },
        adunit: '/170923132/a.sallysbakingaddiction',
        oop: true,
        targeting: [['pos','inline']]
      },
      'gad-mobile-inst': {
        selector: 'body',
        injectPosition: 'beforeend',
        adunit: '/170923132/a.sallysbakingaddiction',
        oop: true,
        targeting: [['pos','interstitial']]
      }
    }
  });
});
(function(d, t) {
  var s, scripts;
  if (document.currentScript) {
    s = document.currentScript;
  } else if (document.readyState === 'loading') {
    scripts = document.getElementsByTagName(t);
    s = scripts[scripts.length - 1];
  } else {
    s = document.getElementsByTagName(t)[0];
  };
  var g = d.createElement(t);
  // g.async = true;
  g.src = '//cdn.grateful.io/alpha/tags.js';
  s.parentNode.insertBefore(g, s);
})(document, 'script');
