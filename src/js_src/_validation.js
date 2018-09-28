/*

HOW TO USE THIS:

Code samples below.
Whenever you call this function it clears all errors from the targetted form, then validates the input.
Invalid inputs get a class 'has-error' which can be used for visual feedback in the form.



$box = $('.some-div-where-your-form-is-in');

add "validate" class to any input, textarea, select field that needs to be captured
add "required" class to any input, textarea, select that cannot be 'emtpy'
add "email" class to any input, textarea, select that must be a valid email address
add "repeat_password_1" and "repeast_password_2" class to any inputs that must have the same value in them



//capture the values
var validation_result = doValidation($('.some-div-where-your-form-is-in'));



//check if validation succeeded
if(validation-result.success){
	//validation success!
}
else{
	//validation failed
}



//get an object with all the values, which can be used for AJAX posts
var data = validation_result.data;
$.post(some_url, data, handlerFunction);



*/



function doValidation($target) {
	var result = {};
	var data = {};
	result.success = true;
	result.data = data;

	$target.find('.has-error').removeClass('has-error');
	$target.find('input.validate, textarea.validate, select.validate').each(function(index, item) {
		var $item = $(item);
		var propname = $item.attr('name');
		var value = $item.val();
		value = $.trim(value);
		data[propname] = value;

		if ($item.hasClass('required')) {
			if (value == "") {
				result.success = false;
				$item.addClass('has-error');
			}
		}

		if ($item.hasClass('repeat_password_1')) {
			var $repeat_password_2 = $target.find('.repeat_password_2');
			repeat_password_2 = $repeat_password_2.val()
			repeat_password_2 = $.trim(repeat_password_2);

			if (value != repeat_password_2 && repeat_password_2 != "") {
				result.success = false;
				$repeat_password_2.addClass('has-error');
				$item.addClass('has-error');
			}
		}

		if ($item.hasClass('email')) {
			var email_validator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
			if (!email_validator.test(value)) {
				result.success = false;
				$item.addClass('has-error');
			}
		}
	})

	return result;
}