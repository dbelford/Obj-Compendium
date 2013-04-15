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

// Working left nav
/*
        $('body').on('activate', function (e) {
            var idString = $('.navbar li.active').children('a').attr('href');
            var $currentH2 = $(idString);
            var $clonedNavElements = $currentH2.nextUntil('h2', 'h3').clone();
            $('ul.nav-tabs').empty();
            $('ul.nav-tabs').append($clonedNavElements);

            $clonedNavElements.replaceWith(function() {
                return '<li><a href="#'+$(this).text().replace(/\s+/g, "-") +'" >' + $(this).text() + '</a></li>';
            });
        })
        
*/
        
        
        
/*
        {
	        offset: {
	          top: function (e) { 
	          	  console.log(that);
	          	  console.log(e);
		          return $(this).offset().top;
	          }
	        , bottom: function () { return $(this).offset().top + $(this).height(); }
	        }
	      }
*/
        
        $('#right-content').append($oldContent);
        
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
        
        
        
        // Quick Fix for Header obscure anchors
        // Future fix use JS scroll adjustment https://github.com/twitter/bootstrap/issues/193
        $('h2, h3').css({ "padding-top" : "40px", });
        
        
        var $navs = $('h2, h3').clone();
        
        
        // Add IDs to the document h2s
        $('h2, h3').attr('id', function(index, attr){
            return $(this).text().replace(/\s+/g, "-");
        });

        // Build left-nav
        $('#left-nav').append("<ul class='affix nav nav-tabs nav-stacked' style='margin-top:90px;' />");
        $('#left-nav ul').append($navs.filter('h3'));
        $('.navbar ul').append($navs.filter('h2'));
        $('.navbar .brand').text($('title').text());
        
        $navs.replaceWith(function() {
            return '<li><a href="#'+$(this).text().replace(/\s+/g, "-") +'" >' + $(this).text() + '</a></li>';
        });
        
    });