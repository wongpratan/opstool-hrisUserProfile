
steal(
        // List your Controller's dependencies here:
        'appdev',
        '//opstools/HrisUserProfile/views/UserSummary/UserSummary.ejs',
function(){


    AD.Control.extend('opstools.HrisUserProfile.UserSummary', { 


        init: function( element, options ) {
            var self = this;
            this.options = AD.defaults({
                    templateDOM: '//opstools/HrisUserProfile/views/UserSummary/UserSummary.ejs'
            }, options);

            this.initDOM();

			this.element.find('#idOfPassportDiv').hide();

			// listen for resize notifications
            AD.comm.hub.subscribe('opsportal.resize', function (key, data) {

				self.element.find(".opsportal-stage-container").css("height", data.height + "px");
				
            });

        },


        initDOM: function() {
            var self = this;

            // insert our base DOM with the Column contents: objectlist, and bottom elements
            this.element.html(can.view(this.options.templateDOM, {} ));
        },
        

		'.opsportal-filter-tag click':function($el, ev) {
			var self = this,
				myFilter = self.element.find($el).data('hris-filter');
			
			if (self.element.find($el).hasClass('filter-on')) {
				self.element.find($el).removeClass('filter-on');
				$('#'+myFilter).hide();
			} else {
				self.element.find($el).addClass('filter-on');
				$('#'+myFilter).show();
			}
				
			ev.preventDefault();
		}

    });


});