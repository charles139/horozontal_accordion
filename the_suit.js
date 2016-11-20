jQuery(document).ready(function(){

	var home = jQuery("li#ts_home_tab");

	var cover = jQuery("li#ts_cover");
	var cover_image = jQuery("li#ts_cover img");

	var step1 = jQuery("li#ts_step1");
	var step1_image = jQuery("li#ts_step1 img");
	var label1 = jQuery("#step1_label");
	var step1_open = false;

	var step2 = jQuery("li#ts_step2");
	var step2_image = jQuery("li#ts_step2 img");
	var label2 = jQuery("#step2_label");
	var step2_open = false;

	var step3 = jQuery("li#ts_step3");
	var step3_image = jQuery("li#ts_step3 img");
	var label3 = jQuery("#step3_label");
	var step3_open = false;

	var step4 = jQuery("li#ts_step4");
	var step4_image = jQuery("li#ts_step4 img");
	var label4 = jQuery("#step4_label");
	var step4_open = false;

	function initial_state() {
			cover.stop().animate({left: '0'});

			step1.stop().animate({right: '15%'});
			step1_image.stop().animate({opacity: '0'});
			label1.stop().animate({width: '6%'});
			step1_open = false;

			step2.stop().animate({right: '10%'});
			step2_image.stop().animate({opacity: '0'});
			label2.stop().animate({width: '6%'});
			step2_open = false;

			step3.stop().animate({right: '5%'});
			step3_image.stop().animate({opacity: '0'});
			label3.stop().animate({width: '6%'});
			step3_open = false;

			step4_image.stop().animate({opacity: '0'});
			label4.stop().animate({width: '6%'});
			step4_open = false;
	};
	function current_state_1 () {
		step1.stop().animate({right: '15%'});
		step2_image.stop().animate({opacity: '0'});
		label2.stop().animate({width: '6%'});
	};
	function current_state_2 () {
		step2.stop().animate({right: '10%'});
		step3_image.stop().animate({opacity: '0'});
		label3.stop().animate({width: '6%'});
	};
	function current_state_3 () {
		step3.stop().animate({right: '5%'});
		step4_image.stop().animate({opacity: '0'});
		label4.stop().animate({width: '6%'});
	};

	function hover1() {
		if (step1_open === false) { //checks if click is open
			cover.stop().animate({left: '-3%'});
			step1_image.stop().animate({opacity: '0.2'});
			label1.stop().animate({width: '10%'});
		};
	};
	function hover2() {
		if (step2_open === false && step1_open === true) { //checks if click is open
			step1.stop().animate({right: '18%'});
			step2_image.stop().animate({opacity: '0.2'});
			label2.stop().animate({width: '10%'});
		};
	};
	function hover3() {
		if (step1_open === false && step2_open === true && step3_open === false) { //checks if click is open
			step2.stop().animate({right: '13%'});
			step3_image.stop().animate({opacity: '0.2'});
			label3.stop().animate({width: '10%'});
		};
	};
	function hover4() {
		if (step1_open === false && step2_open === false && step3_open === true && step4_open === false) { //checks if click is open
			step3.stop().animate({right: '8%'});
			step4_image.stop().animate({opacity: '0.2'});
			label4.stop().animate({width: '10%'});
		};
	};

	function click1() {
		cover.stop().animate({left: '-75%'} , function(){
			step1_image.stop().animate({opacity: '1'});
			step1_open = true;
		});
	};
	function click2() {
		if (step1_open === true) {
			step1_image.stop().animate({opacity: '0'});
			label1.css('width' , '6%');
			step1.stop().animate({right: '90%'} , function(){
				step2_image.stop().animate({opacity: '1'});
				step2_open = true;
				step1_open = false;
			});
		};
	};
	function click3 () {
		if (step2_open === true) {
			step2_image.stop().animate({opacity: '0'});
			label2.css('width' , '6%');
			step2.stop().animate({right: '85%'} , function(){
				step3_image.stop().animate({opacity: '1'});
				step3_open = true;
				step2_open = false;
			});
		};
	};
	function click4 () {
		if (step3_open === true) {
			step3_image.stop().animate({opacity: '0'});
			label3.css('width' , '6%');
			step3.stop().animate({right: '80%'} , function(){
				step4_image.stop().animate({opacity: '1'});
				step4_open = true;
				step3_open = false;
				console.log(step1_open , step2_open , step3_open , step4_open);
			});
		};
	};

	// home buttom reset
	home.click(function(){
		if ((step1_open || step2_open || step3_open || step4_open) === true) {
			initial_state();
		};
	});
	// home buttom reset

	// Step Hover before clicking
	step1.mouseover(function(){
		hover1();
	});
	step1.mouseout(function(){
		if (step1_open === false) { //checks if hover is open
			initial_state();
		};
	});

	step2.mouseover(function(){
		hover2();
	});
	step2.mouseout(function(){
		if (step1_open === true && step2_open === false) { //checks if hover is open
			current_state_1();
		};
	});

	step3.mouseover(function(){
		hover3();
	});
	step3.mouseout(function(){
		if (step1_open === false && step2_open === true && step3_open === false) { //checks if hover is open
			current_state_2();
		};
	});

	step4.mouseover(function(){
		hover4();
	});
	step4.mouseout(function(){
		if (step1_open === false && step2_open === false && step3_open === true && step4_open === false) { //checks if hover is open
			current_state_3();
		};
	});

	// Step Hover before clicking

	// Step Clicks
	step1.click(function(){
		click1();
	});
	step2.click(function(){
		click2();
	});
	step3.click(function(){
		click3();
	});
	step4.click(function(){
		click4();
	});

	// Step Clicks
})