jQuery(document).ready(function(){
	jQuery("input").focus(function() {
  											jQuery("label[for='" + this.id + "']").addClass("focus-label");
  											jQuery(this).addClass("focus-input");
											});
	jQuery("form :input").blur(function() {
  											jQuery("label").removeClass("focus-label");
  											jQuery(this).removeClass("focus-input");
											});
	jQuery("#phone-code, #phone-number").focus(function() {
  											jQuery("label[for=\"phone-country\"]").addClass("focus-label");
  											jQuery(this).addClass("focus-input");
											});
	jQuery("#phone-code, #phone-number").blur(function() {
  											jQuery("label[for=\"phone-country\"]").removeClass("focus-label");
  											jQuery(this).removeClass("focus-input");
											});
	jQuery("textarea").focus(function() {
  											jQuery("label[for='" + this.id + "']").addClass("focus-label");
  											jQuery(this).addClass("focus-input");
											});
	jQuery("textarea").blur(function() {
  											jQuery("label").removeClass("focus-label");
  											jQuery(this).removeClass("focus-input");
											});
	jQuery("#organization").focus(function() {
  											jQuery(".organization-field span").css("color","#fff");
  										});
	jQuery("#organization").blur(function() {
  											jQuery(".organization-field span").css("color","rgba(255,255,255, 0.15)");
  										});
})