jQuery(document).ready(function($) {
	'use strict';
	console.log("MPESA PLUGIN Loaded");
	
	function checkoutExists() {
		var order_id = $("#wc-kb-mpesa-pay-btn").data("order-id");
		if (order_id) {
			$.post(wc_kb_mpesa_ajax.order_checkout.ajax_url, {
				_ajax_nonce: wc_kb_mpesa_ajax.order_checkout.nonce,
				action: wc_kb_mpesa_ajax.order_checkout.action,
				order_id: order_id
			}, function (data) {
				if (data.status === 'INPROGRESS') {
					processCheckout();
				}
			}).fail(function (response) {
			
			});
		}
	}

	checkoutExists();

	/**
	 * Handle mpesa checkout process
	 */
	var processingPayment = false;
	$("#wc-kb-mpesa-pay-btn").click(function () { 
		processCheckout();	
		event.preventDefault();
	});

	/**
	 * 
	 * Process Checkout
	 * 
	 */
	function processCheckout() {
		if (processingPayment === false) {
			processingPayment = true;
			showLoader();
			hideNotice();
			var this2 = this;
			$.post(wc_kb_mpesa_ajax.stk_push.ajax_url, {        
				_ajax_nonce: wc_kb_mpesa_ajax.stk_push.nonce,    
				action: wc_kb_mpesa_ajax.stk_push.action,           
				order_id: $("#wc-kb-mpesa-pay-btn").data("order-id")                
				}, function(data) {        
					console.log(data);
					if (data.status === 'INPROGRESS') {
						addNotice("Please enter your MPESA PIN to the prompt we have sent to your mobile phone.", "info");
					}
					pollPaymentStatus(data);
				}
			).fail(function (response) {
				let data = response.responseJSON.data;
				showLoader();
				addNotice(data.message, "error");
				processingPayment = false;
			});
		}
	}

	function showLoader() {
		$("#wc-kb-mpesa-loader-wrap").toggle();
		$("#wc-kb-mpesa-pay-text").toggle();
	}

	function pollPaymentStatus(data) {
		var timeInterval = setInterval(function () {
			$.post(wc_kb_mpesa_ajax.stk_push_status.ajax_url, {
				_ajax_nonce: wc_kb_mpesa_ajax.stk_push_status.nonce,
				action: wc_kb_mpesa_ajax.stk_push_status.action,
				...data
			}, function (data) {
				console.log(data);
				if (data.status !== 'INPROGRESS') {
					// Redirect to thank you page.
					clearInterval(timeInterval);
					processingPayment = false;
					showLoader();
					if (data.status === 'PROCESSED') {
						// Redirect to thank you page
						$(window).attr('location', $("#wc-kb-mpesa-pay-btn").data("order-thankyou-url"));
					} else {
						// Should show an alternative way of paying.
						addNotice(data.description, "warning");
					}
				}
			}
			).fail(function (response) {
				let data = response.responseJSON.data;
				console.log(data);
			});
		}, 15000);
	}

	function addNotice(message,type) {
		$("#wc-kb-mpesa-notices").removeClass (function (index, className) {
			return (className.match (/(^|\s)wc-kb-mpesa-notices-\S+/g) || []).join(' ');
		}).addClass("wc-kb-mpesa-notices-"+type).html(message).show();
	}

	function hideNotice() {
		$("#wc-kb-mpesa-notices").hide();
	}
});


