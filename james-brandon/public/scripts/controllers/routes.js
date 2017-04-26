'use strict';

// :D:D:D:D TODO: Configure routes for this app with page.js, by registering each URL your app can handle,
// linked to a a single controller function to handle it:

page('/', articleController.init);
page('/new', newView.init);
page('admin', adminView.init);
page('/about', aboutController.init);

// :D:D:D:D TODO: What function do you call to activate page.js? Fire it off now, to execute
page();