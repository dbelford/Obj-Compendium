#Obj-c Developer Tools
-------

This is a collection of libraries, frameworks and resources for handling common tasks on iOS and OSX.  It prefers tools that are simple, small and modular.

##ViewControllers

###Hamburger Menu

*n.b. - I have not looked into which is best.  Just dumping the popular ones here for now.*

##### Side Panel - *[JASidePanels](https://github.com/gotosleep/JASidePanels)*

>JASidePanels is a UIViewController container designed for presenting a center panel with revealable side panels - one to the left and one to the right. The main inspiration for this project is the menuing system in Path 2.0 and Facebook's iOS apps.

From what I can tell, this is the most actively used and supported side panel.

##### Option 2 - *[PKRevealController](https://github.com/pkluz/PKRevealController)*

>PKRevealController is a delightful view controller container for iOS, enabling you to present multiple controllers on top of one another.

##### Option 3 - *[JTRevealSidebar](https://github.com/mystcolor/JTRevealSidebarDemo)*

>A carefully implemented iOS objective-c library to mimic the sidebar layout of the new Facebook app and Path 2.0 app. (archive)  

*Author notes that this implementation is old and users should generally look for a newer one that takes advantage of technologies in iOS 5 & 6.*


##Views



###Buttons

##### Advanced Button - *[FTWButton](https://github.com/FTW/FTWButton)*

FTWButton is a UIControl subclass that lets you easily set color, gradient, text, shadow, border, and icon properties for various states and animates between them.

##### Blocks for Controls - *[ALActionBlocks](https://github.com/lavoy/ALActionBlocks)*

ALActionBlocks is an Objective-C category on UIControl that allows for handling of control events with blocks.  As opposed to using @selectors.

- Handle control events with blocks
- Remove blocks for control events
- Gives you a weak reference to your control in the block
- Works with all of your existing subclasses of UIControl

###Labels

##### Advanced Label - *[THLabel](https://github.com/MuscleRumble/THLabel)*

>THLabel is a subclass of UILabel, which additionally allows shadow blur, stroke text and fill gradient

###Images

#####Web Images Option 1 - *[SDWebImage](https://github.com/rs/SDWebImage)*

Asynchronous image downloader with cache support with an UIImageView category. This library provides a category for UIImageVIew with support for remote images coming from the web.

This seems to be the current best implementation of fetching and caching images from the web. 

#####Web Images Option 2 - *[EGOImageLoading](https://github.com/enormego/EGOImageLoading)*

Anything involving images pulled from the web should be handled asynchronously.  This is a powerful, modular set of classes for handling web images simply.  There are base classes to build UIButtons and UIImageViews on.  The image caching is handled by a separate cache ([EGOCache](https://github.com/enormego/EGOCache) by default)

It has a nice convenience in that it also caches processed images.  So you might have one URL and a few different sizes cached for it.

#####Icon Views - *[MOOMaskedIconView](https://github.com/peyton/MOOMaskedIconView)*

Photoshop layer styles for iOS icons. Stop maintaining a separate file for each color, resolution, and style. MOOMaskedIconView is a UIView subclass that uses black-and-white masks to draw icons of different styles at any size or resolution. It's like Photoshop layer styles, using the same technique as UITabBar to generate various effects from a single icon mask.

#####Misc - *[KOAProgressBar](https://github.com/mperovic/KOAProgressBar)*

A UIView progress bar that has a fairly full set of styling features.

*Author - [Miroslav Perovic](https://github.com/mperovic)*

###Components & Controls

#####Calendar - *[TimesSquare](https://github.com/square/objc-TimesSquare)*

TimesSquare is an Objective-C calendar view for apps.

#####Masonry View - *[IIIThumbFlow](https://github.com/sehone/IIIThumbFlow)*

IIIThumbFlow is a simple iOS view component for presenting images in a vertical flow style. It supports both local and web images. It's optimized in various aspects, you can load unlimited images in IIIThumbFlow.  This looks alot like a masonry/pinterest view component.

#####Time Scroller - *[TimeScroller](https://github.com/andrewroycarter/TimeScroller)*

A UI Element that hovers beside the scroll bar of a UITableView (Mimicking the Path app).

#####Introduction Controller - *[iPhone-Introduction](https://github.com/MatthewYork/iPhone-IntroductionTutorial)*

A "drop-in" solution for building stylish app introductions and tutorials. Now supports left-to-right and right-to-left languages.

#####DC Switch - *[DCRoundSwitch](https://github.com/domesticcatsoftware/DCRoundSwitch)*

#####Awesome Menu - *[QuadCurveMenu](https://github.com/burtlo/QuadCurveMenu)*

##Animation

#####Bouncing Animation - *[SKBounceAnimation](https://github.com/khanlou/SKBounceAnimation)*

A CAKeyframeAnimation subclass that lets you quickly and easily set a number of bounces, and start and end values, and creates an animation for you. 

SKBounceAnimation is a CAKeyframeAnimation subclass that creates an animation for you based on start and end values and a number of bounces. It’s based on the math and technology in this [blogpost](khanlou.com/2012/01/cakeyframeanimation-make-it-bounce/)  which in turn was based partially on [Matt Gallagher’s work](cocoawithlove.com/2008/09/parametric-acceleration-curves-in-core.html).

##Data Types



###Strings

#####NLP Date & Time Parser - *[Moment](https://github.com/kmussel/Moment)*

Natural Language Date/Time Parser Using Lex/Yacc/C

Moment handles simple and complex expressions. Because it's written in C, it can easily be transferred to many other languages.

###Dates

#####Date Formatting - *[NSDateHelper](https://github.com/billymeltdown/nsdate-helper)*

An NSDate category for turning NSDates into plain english NSStrings.

*Author - [Billy Meltdown](https://github.com/billymeltdown)*

#####Date Calculations - *[DateCalculations](https://github.com/oscardelben/DateCalculations)*

An NSDate category for creating and manipulating dates with plain English method names (eg. [NSDate endOfWeek], [NSDate yesterday]).

*Author - [Oscar Del Ben](https://github.com/oscardelben)*

##General


###Higher Order Methods

###Misc

#####Routes & App State - *[Routable](https://github.com/usepropeller/routable-ios)*

Routable, an in-app native URL router, for iOS

<br/>

<link href='http://fonts.googleapis.com/css?family=Ropa+Sans' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Arvo:400,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.no-icons.min.css" >
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css" ></p>

<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js" type="text/javascript"></script>
<script src="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.js" type="text/javascript"></script>

<script>
    $(function(){
        
        // Add Bootstrap Boilerplate
        var $oldContent = $('body').contents().detach();
        $('body').css('padding-top', '90px');
        $('body').append("<div class='container'><div class='row'><div id='left-nav' class=' span3'> </div><div id='right-content' class='span9'> </div></div></div>");
        
        $('.container').prepend("<div class='navbar navbar-fixed-top'><div class='navbar-inner' style='padding-left: 30px;'><a class='brand' href='#'></a> <ul class='nav'> </ul></div></div>");
        
        $('body').attr('data-spy', 'scroll');
        $('body').attr('data-target', '.navbar');
/*         $('.navbar').scrollspy(); */
/* $('.navbar ul').append($navBarElements); */
			$('body').on('activate', function (e) {
/*         $('.navbar li').on('activate', function (e) { */
	        var idString = $('.navbar li.active').children('a').attr('href');
	        var $currentH2 = $(idString);
        	var $clonedNavElements = $currentH2.nextUntil('h2', 'h3').clone();
        	$('ul.nav-tabs').empty();
        	$('ul.nav-tabs').append($clonedNavElements);

        	$clonedNavElements.replaceWith(function() {
	            return '<li><a href="#'+$(this).text().replace(/\s+/g, "-") +'" >' + $(this).text() + '</a></li>';
	        });
		})
        
        
        
        $('#right-content').append($oldContent);
        
        
        // Quick Fix for Header obscure anchors
        // Future fix use JS scroll adjustment https://github.com/twitter/bootstrap/issues/193
        $('h2, h3').css({ "padding-top"	: "40px", });
        
        // Grab H2s
        var $navBarElements = $('h2').clone();
        var $navElements = $('h3').clone();
        
        // Add IDs to the document h2s
        $('h2, h3').attr('id', function(index, attr){
            return $(this).text().replace(/\s+/g, "-");
        });
  
// Affix Attempt 1      
/*
$('h2').attr('data-offset-top', function(index, attr){
            return $(this).offset().top;
        });
        $('h2').attr('data-offset-bottom', function(index, attr){
            return $(this).offset().top + $(this).height();
        });
*/
/*      $('h2').attr('data-spy', 'affix-top'); */

// Affix Attempt 2
/*
$('h2').affix({
            offsetTop : function () { return $(this).offset().top; },
            offsetBottom : function () {return $(this).offset().top + $(this); }
        });
*/
        

        // Build left-nav
        $('#left-nav').append("<ul class='affix nav nav-tabs nav-stacked' style='margin-top:90px;' />");
        $('#left-nav ul').append($navElements);
        $('.navbar ul').append($navBarElements);
        $('.navbar .brand').text($('title').text());
        
        // Reformat the cloned H2s for display in left-nav
        $navElements.replaceWith(function() {
            return '<li><a href="#'+$(this).text().replace(/\s+/g, "-") +'" >' + $(this).text() + '</a></li>';
        });
        $navBarElements.replaceWith(function() {
            return '<li><a href="#'+$(this).text().replace(/\s+/g, "-") +'" >' + $(this).text() + '</a></li>';
        });
        
    });
</script>
<style>
	#left-nav a {
		font-family: 'arvo', 'sans';
		font-weight: 700;
	}
	
	.navbar a {
		font-family: 'arvo', 'sans';
		font-weight: 700;
	}

</style>