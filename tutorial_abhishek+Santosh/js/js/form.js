var Form = {
	emailValidate: function (email) {
		var pattern =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var edata = $.trim($(email).val());
		if(edata.match(pattern)){
			$(email).removeClass('invalid');
			$(email).addClass('valid');
			return true;
		}
		else{
			$(email).removeClass('valid');
			$(email).addClass('invalid');
			return false;
		}

	},
	passValidate: function (pass) {
		var edata = $.trim($(pass).val());

		if(edata=="" || edata== null){
			return false;
		}

	},
	formSumbit: function (event, obj) {
		event.preventDefault();
		this.emailValidate('#exampleInputEmail1');
		this.passValidate('#exampleInputPassword1');
		var invalidLength = $(obj).parents('form').find('.invalid').length;
		
		if(invalidLength > 0){
			alert('Your form is invalid');
			return true;

		}
		else{
			alert('Your form is successfully submit');
			return false;
		}
	}

}