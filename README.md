RSS Reader Project
=====================
RSS reader created with Angular and Ionic:

* The left side allows selecting, adding and removing RSS feeds. 
* The right side displays the currently selected RSS feed.

![](https://dl.dropboxusercontent.com/u/27830241/rssreader/www/img/Screenshot%202016-05-02%2009.17.37.png)

To deploy the project, clone the repo to your PC's local file system. The WWW folder contains the index.html file. The project source code has been commented to indicate interesting solution information.
 
## Main screen
1. Header - showing the URL of the feed
1. Content - showing the feed items

The feed items use a directive that displays the title, date, and body.

![](https://dl.dropboxusercontent.com/u/27830241/rssreader/www/img/Screenshot%202016-05-02%2009.17.38.png)

## Sidebar

###String input
RSS URL + submit button 

###URL history list
List of URLs the user viewed

* When submitting an RSS URL, its URL is inserted at the top of the history list in an “active” (selected) state, and the main section should display its feed
* When clicking on an item (URL) from the list, its state is **active** (selected), and the main section displays the selected feed
* When browser back button pressed, the page returns to the previous active URL
* Each item contain an “x” button, that removes it from the list
* The list items should be persistent, should stay on page refresh

![](https://dl.dropboxusercontent.com/u/27830241/rssreader/www/img/Screenshot%202016-05-02%2009.23.22.png) 

## Links
* [Deployed site](http://rssreader.pikr.me). This link access the site's static web content via a URL. The static content is deployed from a dropbox folder. 
* [Project Trello board](https://trello.com/b/pNgWChgV)

 

