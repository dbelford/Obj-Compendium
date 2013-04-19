rebuildMarkdownHTMLAsBootstrap = function( ) {
	var $oldContent = $('body').contents().detach();
    
    var $leftnav = $("<div id='left-nav' class='span3'> </div>");
    
    $leftnav
    	.append("<div class='affix'></div>")
    	.children()
    	.append("<ul id='left-nav-prev' class='nav nav-tabs nav-stacked hidden-phone' />")
    	.append("<ul id='left-nav-content' class='nav nav-tabs nav-stacked hidden-phone' />")
    	.append("<ul id='left-nav-next' class='nav nav-tabs nav-stacked hidden-phone' />");
    
    var $container = $("<div class='container'></div>")
			.append($leftnav)
			.append("<div id='right-content' class='span9'> </div>")
			.wrapInner("<div class='row'></div>");
	
	
	
			 
	var $navBar = $("<div class='navbar navbar-fixed-top'></div>")
			.append("<a class='brand' href='#'></a>")
			.append("<ul class='nav'> </ul>")
			.wrapInner("<div class='navbar-inner' style='padding-left: 30px;'> </div>");
			
	$container.prepend($navBar);
	$('body').append($container);
    
    $('body').attr('data-spy', 'scroll');
    $('body').attr('data-target', '.navbar');

    $('#right-content').append($oldContent);
    
    $('.navbar .brand').text($('title').text());
}

watchTopNavToUpdateLeftNav = function () {
	// Working left nav
    $('body').on('activate', function (e) {
        var idString = $('.navbar li.active').children('a').attr('href');
        var $currentH2 = $(idString);
        var $clonedNavElements = $currentH2.nextUntil('h2', 'h3').clone();
        $('ul.nav-tabs').empty();
        $('#left-nav-content').append($clonedNavElements);
        
        
        
        var $prevH2 = $(idString).prevAll('h2').first().clone();
        var $nextH2 = $(idString).nextAll('h2').first().clone();
        
	    $('#left-nav-prev').append($prevH2);
	    $('#left-nav-next').append($nextH2);
	    

        $clonedNavElements.replaceWith(function() {
            return '<li><a href="#'+$(this).text().replace(/\s+/g, "-") +'" >' + $(this).text() + '</a></li>';
        });
        
        $prevH2.replaceWith(function() {
            return '<li><a href="#'+$(this).text().replace(/\s+/g, "-") +'" >' + $(this).text() + ' <i class="pull-right icon-chevron-up" /></a></li>';
        });
        $nextH2.replaceWith(function() {
            return '<li><a href="#'+$(this).text().replace(/\s+/g, "-") +'" >' + $(this).text() + ' <i class="pull-right icon-chevron-down"/></a></li>';
        });
        
    })
    
}

attachAffixLogic = function () {
	// side bar
    console.log($('h2').length);
	$('h2').each(function (i) {
		var that = this;
		$(this).affix({ offset : {
						top: function(){ return $(that).offset().top + 40; },
						bottom: function(){ return $(that).offset().top + $(that).height()  + 40; }
					}	
			   })
	});
}

$(function(){

	rebuildMarkdownHTMLAsBootstrap();
	watchTopNavToUpdateLeftNav();
/*     attachAffixLogic(); */
        
    // Quick Fix for Header obscure anchors
    // Future fix use JS scroll adjustment https://github.com/twitter/bootstrap/issues/193
    $('h2, h3').css({ "padding-top" : "40px", });
    
    
    var $navs = $('h2, h3').clone();
    
    // Add IDs to the document h2s
    $('h2, h3').attr('id', function(index, attr){
        return $(this).text().replace(/\s+/g, "-");
    });

    // Build left-nav
    //$('#left-nav').append("<ul class='affix nav nav-tabs nav-stacked' style='margin-top:90px;' />");
    $('#left-nav-content').append($navs.filter('h3'));
    $('.navbar ul').append($navs.filter('h2'));
    
    
    $navs.replaceWith(function() {
        return '<li><a href="#'+$(this).text().replace(/\s+/g, "-") +'" >' + $(this).text() + '</a></li>';
    });
        
});