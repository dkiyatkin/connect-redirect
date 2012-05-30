var regRedirection = function(regexp, newSubStr, type) {
	return function(req, res, next) {
		if (reg_urls.double_slash.test(req.url_parse.pathname)) {
			var loc = req.url_parse.pathname.replace(reg_urls.double_slash, newSubStr) + req.url_parse.search;
			console.log(newSubStr+'-redirect: ', req.url, loc);
			if (type == 'p') {
				res.moved(loc);
			} else {
				res.redirect(loc);
			}
		} else { next(); }
	};
};
