jQuery(function($){
				
				$.supersized({
				
					// Functionality
					slideshow               :   1,			// Slideshow on/off
					autoplay				:	1,			// Slideshow starts playing automatically
					start_slide             :   0,			// Start slide (0 is random)
					stop_loop				:	0,			// Pauses slideshow on last slide
					random					: 	0,			// Randomize slide order (Ignores start slide)
					slide_interval          :   3000,		// Length between transitions
					transition              :   6, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	1000,		// Speed of transition
					new_window				:	0,			// Image links open in new window/tab
					pause_hover             :   0,			// Pause slideshow on hover
					keyboard_nav            :   1,			// Keyboard navigation on/off
					performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
					image_protect			:	1,			// Disables image dragging and right click with Javascript
															   
					// Size & Position						   
					min_width		        :   1110,			// Min width allowed (in pixels)
					min_height		        :   700,			// Min height allowed (in pixels)
					vertical_center         :   0,			// Vertically center background
					horizontal_center       :   0,			// Horizontally center background
					fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
					fit_portrait         	:   1,			// Portrait images will not exceed browser height
					fit_landscape			:   1,			// Landscape images will not exceed browser width
															   
					// Components							
					slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
					thumb_links				:	1,			// Individual thumb links for each slide
					thumbnail_navigation    :   0,			// Thumbnail navigation
					slides 					:  	[			// Slideshow Images
														{image : '../../../resources/bootstrap-site/images/internal/background/photos/gp_1.jpg', title : 'Image Credit: Greg Descantes', thumb : '../../../resources/bootstrap-site/images/internal/background/photos/gp_1_thumb.jpg', url : ''},
														{image : '../../../resources/bootstrap-site/images/internal/background/photos/gp_2.jpg', title : 'Image Credit: Greg Descantes', thumb : '../../../resources/bootstrap-site/images/internal/background/photos/gp_2_thumb.jpg', url : ''},
														{image : '../../../resources/bootstrap-site/images/internal/background/photos/gp_3.jpg', title : 'Image Credit: Peter So', thumb : '../../../resources/bootstrap-site/images/internal/background/photos/gp_3_thumb.jpg', url : ''},
														{image : '../../../resources/bootstrap-site/images/internal/background/photos/gp_4.jpg', title : 'Image Credit: Peter So', thumb : '../../../resources/bootstrap-site/images/internal/background/photos/gp_4_thumb.jpg', url : ''},
														{image : '../../../resources/bootstrap-site/images/internal/background/photos/gp_5.jpg', title : 'Image Credit: Peter So', thumb : '../../../resources/bootstrap-site/images/internal/background/photos/gp_5_thumb.jpg', url : ''},
														{image : '../../../resources/bootstrap-site/images/internal/background/photos/gp_6.jpg', title : 'Image Credit: Scott Roberts', thumb : '../../../resources/bootstrap-site/images/internal/background/photos/gp_6_thumb.jpg', url : ''} ,
														{image : '../../../resources/bootstrap-site/images/internal/background/photos/gp_7.jpg', title : 'Image Credit: Scott Roberts', thumb : '../../../resources/bootstrap-site/images/internal/background/photos/gp_7_thumb.jpg', url : ''} ,
														{image : '../../../resources/bootstrap-site/images/internal/background/photos/gp_8.jpg', title : 'Image Credit: Scott Roberts', thumb : '../../../resources/bootstrap-site/images/internal/background/photos/gp_8_thumb.jpg', url : ''} ,
														{image : '../../../resources/bootstrap-site/images/internal/background/photos/gp_9.jpg', title : 'Image Credit: Hung Mai', thumb : '../../../resources/bootstrap-site/images/internal/background/photos/gp_9_thumb.jpg', url : ''} ,
														{image : '../../../resources/bootstrap-site/images/internal/background/photos/gp_10.jpg', title : 'Image Credit: Hung Mai', thumb : '../../../resources/bootstrap-site/images/internal/background/photos/gp_10_thumb.jpg', url : ''},
														{image : '../../../resources/bootstrap-site/images/internal/background/photos/gp_11.jpg', title : 'Image Credit: Peter So', thumb : '../../../resources/bootstrap-site/images/internal/background/photos/gp_11_thumb.jpg', url : ''},
														{image : '../../../resources/bootstrap-site/images/internal/background/photos/gp_12.jpg', title : 'Image Credit: Peter So', thumb : '../../../resources/bootstrap-site/images/internal/background/photos/gp_12_thumb.jpg', url : ''},
														{image : '../../../resources/bootstrap-site/images/internal/background/photos/gp_13.jpg', title : 'Image Credit: Peter So', thumb : '../../../resources/bootstrap-site/images/internal/background/photos/gp_13_thumb.jpg', url : ''},
														{image : '../../../resources/bootstrap-site/images/internal/background/photos/gp_14.jpg', title : 'Image Credit: Peter So', thumb : '../../../resources/bootstrap-site/images/internal/background/photos/gp_14_thumb.jpg', url : ''},
														{image : '../../../resources/bootstrap-site/images/internal/background/photos/gp_15.jpg', title : 'Image Credit: Peter So', thumb : '../../../resources/bootstrap-site/images/internal/background/photos/gp_15_thumb.jpg', url : ''} 
														
												],
												
					// Theme Options			   
					progress_bar			:	1,			// Timer for each slide							
					mouse_scrub				:	0
					
				});
		    });