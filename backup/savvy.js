(function($) {
 "use strict"; // Start of use strict
 // jQuery for page scrolling feature - requires jQuery Easing plugin
 $(document).on('click', 'a.page-scroll', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
   scrollTop: ($($anchor.attr('href')).offset().top - 50)
  }, 1250, 'easeInOutExpo');
  event.preventDefault();
 });
 // Highlight the top nav as scrolling occurs
 $('body').scrollspy({
  target: '.navbar-fixed-top',
  offset: 51
 });
 // Closes the Responsive Menu on Menu Item Click
 $('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
 });
 // Offset for Main Navigation
 $('#mainNav').affix({
  offset: {
   top: 100
  }
 })
 // Initialize and Configure Scroll Reveal Animation
 window.sr = ScrollReveal();
 sr.reveal('.sr-icons', {
  duration: 600,
  scale: 0.3,
  distance: '0px'
 }, 200);
 sr.reveal('.sr-button', {
  duration: 1000,
  delay: 200
 });
 sr.reveal('.sr-contact', {
  duration: 600,
  scale: 0.3,
  distance: '0px'
 }, 300);
 // Initialize and Configure Magnific Popup Lightbox Plugin
 $('.popup-gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
   enabled: true,
   navigateByImgClick: true,
   preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
  },
  image: {
   tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
  }
 });
})(jQuery); // End of use strict


var d1 = [ 231.795, 231.916, 232.374, 232.889, 233.323, 233.632, 233.718, 234.121, 234.723, 235.385, 235.672, 235.978, 236.471, 236.832, 237.029, 237.424, 237.256, 237.486, 237.506, 237.118, 236.29, 234.913, 235.489, 235.989, 236.201, 236.891, 237.419, 237.876, 237.811, 237.467, 237.792, ];
var d2 = [ 238, 238.9, 239.3, 239.6, 239.4, 239.2, 239.1, 239.3, 238.9, 238.7, 237.371251678199, 238.31611082172, 238.053363957529, 239.074469927267, 238.645154510462, 238.453961906011, 238.249103843579, 238.597426996334, 238.171137665666, 238.08485787316, ];
var d4 = [ 237.792, 238.153, 237.846, 238.106, 237.808, 238.078, 238.908, 239.362, 239.842, 239.898, 240.389, 241.006, 241.694, 242.199, 242.821, 244.158, 244.456, 243.752, 244.158, 243.846, ];

var with_s    = [];
var without_s = [];
var d = new Date();
for (var i = 0; i < d1.length + d2.length; i++) {
var n1 = i < d1.length ? d1[i] : d2[i - d1.length];
var n2 = i < d1.length ? d1[i] : d4[i - d1.length];
with_s.push({
	date:    d,
	n:       n1,
	n2:      n1,
	n3:      n1,
	ci_up:   n1*1.002,
	ci_down: n1*0.998,
});
without_s.push({
	date:    d,
	n:       n2,
	n2:      n2,
	n3:      n2,
	ci_up:   n2*1.002,
	ci_down: n2*0.998,
});
d = new Date(d.getTime() + 1000*60*60*24);
}

var chart = d3.timeseries()
//.addSerie(without_s,
		//{ x:'date', y:'n' },
		//{ interpolate:'linear', color:"black", label:"actual" })
.addSerie(without_s,
		{ x:'date', y:'n3', ci_up:'ci_up', ci_down:'ci_down' },
		{ interpolate:'monotone', color:"black", label:"without SavvyAdjustment" })
.addSerie(with_s.slice(10),
		{ x:'date', y:'n3', ci_up:'ci_up', ci_down:'ci_down' },
		{ interpolate:'monotone', dashed:true, color:"#662277", label:"with SavvyAdjustment" })
.width(800);
chart('#chart1');
