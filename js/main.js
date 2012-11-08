$(document).ready( function() {
	"use strict";

	$('.btn_del_project').avgrund({
	    width: 220, // max is 640px
	    height: 220, // max is 350px
	    showClose: false, // switch to 'true' for enabling close button 
	    showCloseText: '', // type your text for close button
	    closeByEscape: true, // enables closing popup by 'Esc'..
	    closeByDocument: true, // ..and by clicking document itself
	    holderClass: '', // lets you name custom class for popin holder..
	    overlayClass: '', // ..and overlay block
	    enableStackAnimation: false, // enables different type of popin's animation
	    onBlurContainer: '', // enables blur filter for specified block
	    openOnEvent: true, // set to 'false' to init on load
	    setEvent: 'click', // use your event like 'mouseover', 'touchmove', etc.
	    template: '<p>포르젝트의 모든 내용이 삭제되며 구성원들에게 전달됩니다. 진짜 삭제 하시겠습니까?</p><a href="#" class="btn btn-danger ">삭제 확인</a><a href="#" class="btn btn-danger ">취소</a>' // or function() { ... }
	});

});

