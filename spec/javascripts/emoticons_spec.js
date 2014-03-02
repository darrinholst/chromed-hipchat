describe('Emoticons', function() {
  beforeEach(function() {
    jasmine.Ajax.install();
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  it('returns a static list if auth token is not given', function(done) {
    new ChromedHipchatExtension.Emoticons().fetchAll(null, function(emoticons) {
      expect(emoticons.length).toEqual(146);
      done();
    });
  });

  it('makes a call to the api to get the list if an auth token is given', function(done) {
    jasmine.Ajax.stubRequest('https://api.hipchat.com/v2/emoticon?auth_token=authToken').andReturn({
      'responseText': JSON.stringify({links: {}, items: [{url: 'url1', shortcut: 'shortcut1'}, {url: 'url2', shortcut: 'shortcut2'}, {url: 'url3', shortcut: 'shortcut3'}]})
    });

    new ChromedHipchatExtension.Emoticons().fetchAll('authToken', function(emoticons) {
      expect(emoticons.length).toEqual(3);
      done();
    });
  });

  it('makes all the paginated requests', function(done) {
    jasmine.Ajax.stubRequest('https://api.hipchat.com/v2/emoticon?auth_token=authToken').andReturn({
      'responseText': JSON.stringify({links: {next: 'nextUrl'}, items: [{url: 'url1', shortcut: 'shortcut1'}, {url: 'url2', shortcut: 'shortcut2'}, {url: 'url3', shortcut: 'shortcut3'}]})
    });

    jasmine.Ajax.stubRequest('nextUrl?auth_token=authToken').andReturn({
      'responseText': JSON.stringify({links: {}, items: [{url: 'url1', shortcut: 'shortcut1'}, {url: 'url2', shortcut: 'shortcut2'}, {url: 'url3', shortcut: 'shortcut3'}]})
    });

    new ChromedHipchatExtension.Emoticons().fetchAll('authToken', function(emoticons) {
      expect(emoticons.length).toEqual(6);
      done();
    });
  });
});

