// JavaScript Document
$(function(){
		$('div.menu').fadeTo(1000,1,function(){
			$(this).css({
				'display':'block',
				'margin-top':'0px'
			});
			
			
		});
		$('div.menu ul li').each(function(){
			$(this).hover(function(){
				$(this).stop().animate({
					'margin-top':'-9px',
					'opacity':'1'
					
				},1500,'easeOutElastic');
			},function(){
				$(this).stop().animate({
					'margin-top':'-75px',
					'opacity':'0.5'
					
				},1500,'easeOutElastic');
			});
		
		});
			
		
	});