#Obj-Compendium
-------

This is a collection of libraries, frameworks and resources for handling common tasks on iOS and OSX.  It prefers tools that are simple, small and modular.

##ViewControllers

###Grids

Current best practice might be to use the Apple provided [UICollectionView](http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UICollectionView_class/Reference/Reference.html) for iOS 6+

##### Grid View - *[GMGridView](https://github.com/gmoledina/GMGridView)* 

>A performant Grid-View for iOS (iPhone/iPad) that allows sorting of views with gestures (the user can move the items with his finger to sort them) and pinching/rotating/panning gestures allow the user to play with the view and toggle from the cellview to a fullsize display.

<github user="gmoldina" repo="GMGridView"> </github>

#####Masonry View - *[IIIThumbFlow](https://github.com/sehone/IIIThumbFlow)*

IIIThumbFlow is a simple iOS view component for presenting images in a vertical flow style. It supports both local and web images. It's optimized in various aspects, you can load unlimited images in IIIThumbFlow.  This looks alot like a masonry/pinterest view component.


<github user="sehone" repo="IIIThumbFlow"> </github>

#####Masonry View Option 2 - *[CHGridView](https://github.com/camh/CHGridView)*

>Objective-C reusable scrollable grid view for Cocoa Touch modeled after UITableView.

<github user="camh" repo="CHGridView"> </github>

###Hamburger Menu

*n.b. - I have not looked into which is best.  Just dumping the popular ones here for now.*

##### Side Panel - *[JASidePanels](https://github.com/gotosleep/JASidePanels)*

>JASidePanels is a UIViewController container designed for presenting a center panel with revealable side panels - one to the left and one to the right. The main inspiration for this project is the menuing system in Path 2.0 and Facebook's iOS apps.

From what I can tell, this is the most actively used and supported side panel.

<github user="gotosleep" repo="JASidePanels"> </github>

##### Option 2 - *[PKRevealController](https://github.com/pkluz/PKRevealController)*

>PKRevealController is a delightful view controller container for iOS, enabling you to present multiple controllers on top of one another.

<github user="pkluz" repo="PKRevealController"> </github>

##### Option 3 - *[JTRevealSidebar](https://github.com/mystcolor/JTRevealSidebarDemo)*

>A carefully implemented iOS objective-c library to mimic the sidebar layout of the new Facebook app and Path 2.0 app. (archive)  

*Author notes that this implementation is old and users should generally look for a newer one that takes advantage of technologies in iOS 5 & 6.*


<github user="mystcolor" repo="JTRevealSidebarDemo"> </github>

##Views



###Buttons

##### Advanced Button - *[FTWButton](https://github.com/FTW/FTWButton)*

FTWButton is a UIControl subclass that lets you easily set color, gradient, text, shadow, border, and icon properties for various states and animates between them.


<github user="FTW" repo="FTWButton"> </github>

##### Blocks for Controls - *[ALActionBlocks](https://github.com/lavoy/ALActionBlocks)*

ALActionBlocks is an Objective-C category on UIControl that allows for handling of control events with blocks.  As opposed to using @selectors.

- Handle control events with blocks
- Remove blocks for control events
- Gives you a weak reference to your control in the block
- Works with all of your existing subclasses of UIControl

<github user="lavoy" repo="ALActionBlocks"> </github>

##### Segmented Controls - *[HMSegmentedControl](https://github.com/HeshamMegid/HMSegmentedControl)*

>A drop-in replacement for UISegmentedControl mimicking the style of the segmented control used in Google Currents and various other Google products.

###Labels

##### Replacement Label - *[TTTAttributedLabel](https://github.com/mattt/TTTAttributedLabel)*

>A drop-in replacement for UILabel that supports attributes, data detectors, links, and more

<github user="mattt" repo="TTTAttributedLabel"> </github>

##### Replacement Label 2 - *[OHAttributedLabel](https://github.com/AliSoftware/OHAttributedLabel)*

>UILabel that supports NSAttributedString

Not sure how this differs from TTTAttributedLabel, but TTTAttributedLabel credits this so my intuition is to prefer TTTAttrributedLabel

<github user="AliSoftware" repo="OHAttributedLabel"> </github>

##### Advanced Label - *[THLabel](https://github.com/MuscleRumble/THLabel)*

>THLabel is a subclass of UILabel, which additionally allows shadow blur, stroke text and fill gradient

<github user="MuscleRumble" repo="THLabel"> </github>

###Images

#####Web Images Option 1 - *[SDWebImage](https://github.com/rs/SDWebImage)*

>Asynchronous image downloader with cache support with an UIImageView category. 

This library provides a category for UIImageVIew with support for remote images coming from the web. This seems to be the current best implementation of fetching and caching images from the web. 

<github user="rs" repo="SDWebImage"> </github>

#####Web Images Option 2 - *[EGOImageLoading](https://github.com/enormego/EGOImageLoading)*

Anything involving images pulled from the web should be handled asynchronously.  This is a powerful, modular set of classes for handling web images simply.  There are base classes to build UIButtons and UIImageViews on.  The image caching is handled by a separate cache ([EGOCache](https://github.com/enormego/EGOCache) by default)

It has a nice convenience in that it also caches processed images.  So you might have one URL and a few different sizes cached for it.

<github user="enormego" repo="EGOImageLoading"> </github>

#####Icon Views - *[MOOMaskedIconView](https://github.com/peyton/MOOMaskedIconView)*

>MOOMaskedIconView is a UIView subclass that uses black-and-white masks to draw icons of different styles at any size or resolution. It's like Photoshop layer styles, using the same technique as UITabBar to generate various effects from a single icon mask. 

Photoshop layer styles for iOS icons. Stop maintaining a separate file for each color, resolution, and style. MOOMaskedIconView is a UIView subclass that uses black-and-white masks to draw icons of different styles at any size or resolution. It's like Photoshop layer styles, using the same technique as UITabBar to generate various effects from a single icon mask.

<github user="peyton" repo="MOOMaskedIconView"> </github>

###Modals & Overlays

#####Blurred Modal - *[RNBlurModalView](https://github.com/rnystrom/RNBlurModalView)*

>RNBlurModal adds depth to the traditional modal/alert view. Calling the view is incredibly similar to setting up and showing a UIAlertView. You can also setup your own custom views and display them with a blurry background. The goal is to truly draw the user's focus directly to your alert using natural effects. This project works on all iOS devices at all orientations with ARC.

<github user="rnystrom" repo="RNBlurModalView"> </github>

#####Action Sheets - *[BlockAlertsAnd-ActionSheets](https://github.com/gpambrozio/BlockAlertsAnd-ActionSheets)*

>Beautifully done UIAlertView and UIActionSheet replacements inspired by TweetBot

<github user="gpambrozio" repo="BlockAlertsAnd-ActionSheets"> </github>

#####Notification - *[YRDropdownView](https://github.com/onemightyroar/YRDropdownView)*

>YRDropdownView is a view library for displaying stylish alerts, warnings, and errors.

<github user="onemightyroar" repo="YRDropdownView"> </github>

#####??? - *[MKInfoPanelDemo](https://github.com/MugunthKumar/MKInfoPanelDemo)*

>Non-modal, non-intrusive Info Panel implementation as seen on some "popular" apps

Not certain one this one looks like because I haven't downloaded.

<github user="MugunthKumar" repo="MKInfoPanelDemo"> </github>

###Progress Views

#####Progress Hud - [MBProgressHUD](https://github.com/jdg/MBProgressHUD)

>MBProgressHUD is an iOS drop-in class that displays a translucent HUD with an indicator and/or labels while work is being done in a background thread. The HUD is meant as a replacement for the undocumented, private UIKit UIProgressHUD with some additional features.

<github user="jdg" repo="MBProgressHUD"> </github>

#####Progress HUD Option 2 - [SVProgressHUD](https://github.com/samvermette/SVProgressHUD)

>SVProgressHUD is a clean and easy-to-use HUD meant to display the progress of an ongoing task.

<github user="samvermette" repo="SVProgressHUD"> </github>

#####Alert View - *[MBAlertView](https://github.com/mobitar/MBAlertView)*

>Simple block-based alerts and huds for iPhone apps.

<github user="mobitar" repo="MBAlertView"> </github>

#####Progress Bar - *[KOAProgressBar](https://github.com/mperovic/KOAProgressBar)* **WARNING**

>The KOAProgressBar is a custom progress bar for iOS 5.0+ with a full controll over animation.

A UIView progress bar that has a fairly full set of styling features.

**WARNING: This code looks to be "All rights reserved" & not freely usable.**

<github user="mperovic" repo="KOAProgressBar"> </github>

###Components & Controls

#####Calendar - *[TimesSquare](https://github.com/square/objc-TimesSquare)*

TimesSquare is an Objective-C calendar view for apps.

<github user="square" repo="objc-TimesSquare"> </github>

#####Time Scroller - *[TimeScroller](https://github.com/andrewroycarter/TimeScroller)*

A UI Element that hovers beside the scroll bar of a UITableView (Mimicking the Path app).

<github user="andrewroycarter" repo="TimeScroller"> </github>

#####Introduction Controller - *[iPhone-Introduction](https://github.com/MatthewYork/iPhone-IntroductionTutorial)*

A "drop-in" solution for building stylish app introductions and tutorials. Now supports left-to-right and right-to-left languages.

<github user="MatthewYork" repo="iPhone-IntroductionTutorial"> </github>

#####DC Switch - *[DCRoundSwitch](https://github.com/domesticcatsoftware/DCRoundSwitch)*

<github user="domesticcatsoftware" repo="DCRoundSwitch"> </github>

#####Awesome Menu - *[QuadCurveMenu](https://github.com/burtlo/QuadCurveMenu)*


<github user="burtlo" repo="QuadCurveMenu"> </github>


##Animation

###Animate UIViews

#####Bouncing Animation - *[SKBounceAnimation](https://github.com/khanlou/SKBounceAnimation)*

A CAKeyframeAnimation subclass that lets you quickly and easily set a number of bounces, and start and end values, and creates an animation for you. 

SKBounceAnimation is a CAKeyframeAnimation subclass that creates an animation for you based on start and end values and a number of bounces. It’s based on the math and technology in this [blogpost](khanlou.com/2012/01/cakeyframeanimation-make-it-bounce/)  which in turn was based partially on [Matt Gallagher’s work](cocoawithlove.com/2008/09/parametric-acceleration-curves-in-core.html).

<github user="khanlou" repo="SKBounceAnimation"> </github>

#####Multi-step Animation - *[CPAnimationSequence](https://github.com/yangmeyer/CPAnimationSequence)*

>Describe multi-step UIView animation sequences declaratively.

##Data Types



###Strings

#####NLP Date & Time Parser - *[Moment](https://github.com/kmussel/Moment)*

Natural Language Date/Time Parser Using Lex/Yacc/C

Moment handles simple and complex expressions. Because it's written in C, it can easily be transferred to many other languages.

<github user="kmussel" repo="Moment"> </github>

#####NSFormatters - *[FormatterKit](https://github.com/mattt/FormatterKit)*

>FormatterKit is a collection of well-crafted NSFormatter subclasses for things like units of information, distance, and relative time intervals. Each formatter abstracts away the complex business logic of their respective domain, so that you can focus on the more important aspects of your application.

<github user="mattt" repo="FormatterKit"> </github>

###Dates

#####Date Formatting - *[NSDateHelper](https://github.com/billymeltdown/nsdate-helper)*

An NSDate category for turning NSDates into plain english NSStrings.

<github user="camh" repo="CHGridView"> </github>

#####Date Calculations - *[DateCalculations](https://github.com/oscardelben/DateCalculations)*

An NSDate category for creating and manipulating dates with plain English method names (eg. [NSDate endOfWeek], [NSDate yesterday]).

<github user="oscardelben" repo="DateCalculations"> </github>

##General

###Networking

#####NSURL & JSON - *[AFNetworking](https://github.com/AFNetworking/AFNetworking)*

>A delightful iOS and OS X networking framework 

<github user="AFNetworking" repo="AFNetworking"> </github>

#####RESTful Web - *[Restkit](https://github.com/RestKit/RestKit/)*

>RestKit is a framework for consuming and modeling RESTful web resources on iOS and OS X

<github user="Restkit" repo="RestKit"> </github>

###Toolkits

#####Toolkits - *[SSToolkit](https://github.com/soffes/sstoolkit)*

>SSToolkit makes life easier. It is made up of various view controllers, views, and categories that I use in all of my apps. Feel free to fork the repo and make it better.

<github user="soffes" repo="sstoolkit"> </github>

#####Toolkits - *[ShareKit](https://github.com/ShareKit/ShareKit)*

>Drop in sharing features for all iPhone and iPad apps

<github user="ShareKit" repo="ShareKit"> </github>

###Routes

#####Routes & App State - *[Routable](https://github.com/usepropeller/routable-ios)*

Routable, an in-app native URL router, for iOS

<github user="usepropeller" repo="routable-ios"> </github>

###Higher Order Methods

###Misc


<br/>

<style>
	#left-nav a {
		font-family: 'arvo', 'sans';
		font-weight: 700;
	}
	
	.navbar a {
		font-family: 'arvo', 'sans';
		font-weight: 700;
	}
	
	h2.affix {
		top: 40px;
		position: fixed;
	}

</style>

<link href='http://fonts.googleapis.com/css?family=Ropa+Sans' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Arvo:400,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.no-icons.min.css" >
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css" ></p>

<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js" type="text/javascript"></script>
<script src="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.js" type="text/javascript"></script>
<script src="http://dbelford.github.io/Obj-Compendium/js/Application.js" type="text/javascript"> </script>


<script>

	makeGithubButtons = function() {
        var user = $(this).attr("user");
            var repo = $(this).attr("repo");
            $(this).replaceWith(function (){
                var userButton = '<iframe src="http://ghbtns.com/github-btn.html?user='+ user + '&type=follow" allowtransparency="true" frameborder="0" scrolling="0" width="133" height="20"></iframe>';
                var starButton = '<iframe src="http://ghbtns.com/github-btn.html?user='+ user +'&repo='+ repo +'&type=watch&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>';
                
                return userButton + starButton; 

            });
    }

	$(function(){
		$('github').each( makeGithubButtons );
		
		//setTimeout(function() {
		//	$('github').each( makeGithubButtons );
		//}, 300000);
	});
	
</script>