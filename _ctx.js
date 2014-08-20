ctx = {
    linkResolver: function(ctx, doc) {
        if(doc.isBroken) return;

        var maybeToken = ctx.api.accessToken ? '#access_token=' + ctx.api.accessToken : '',
            maybeRef = ctx.ref != ctx.api.data.master.ref ? '?ref=' + ctx.ref : '';

        if(doc.id == ctx.api.bookmarks.about) {
            return '/about.html' + maybeRef + maybeToken;
        }
        if(doc.id == ctx.api.bookmarks.faq) {
            return '/faq.html' + maybeRef + maybeToken;
        }
        if(doc.id == ctx.api.bookmarks.homepage) {
            return '/homepage.html' + maybeRef + maybeToken;
        }
        if(doc.id == ctx.api.bookmarks.pricing) {
            return '/pricing.html' + maybeRef + maybeToken;
        }
        if(doc.id == ctx.api.bookmarks.tour) {
            return '/tour.html' + maybeRef + maybeToken;
        }
        if(doc.type == 'blog') {
            return '/blogpost.html' + maybeRef + (maybeRef ? '&' : '?') + 'id='+ doc.id +'&slug='+ doc.slug + maybeToken;
        }
    }
};