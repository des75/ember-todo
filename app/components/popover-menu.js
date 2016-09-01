import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['popover-menu'],
  classNameBindings: ["orientation", "position", "active:active"],
  active: true,

  arrowMargin: 20,

  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
      this.$().append("<div class='arrow-border'></div><div class='arrow'></div>");
      
      var relatedElementPosition = Ember.$(this.get("rel")).offset();
      var relatedElementSize = {
        height: Ember.$(this.get("rel")).outerHeight(),
        width: Ember.$(this.get("rel")).outerWidth()
      };

      var ourSize = {
        height: this.$().outerHeight(),
        width: this.$().outerWidth()
      };
      var position = {};
      var posFix = 0;
      
      if(this.position === "north" || this.position === "south"){
	if(this.position === "north") position["top"] = relatedElementPosition.top - ourSize.height - this.$(".arrow").outerHeight();
	if(this.position === "south") position["top"] = relatedElementPosition.top + relatedElementSize.height + this.$(".arrow").outerHeight();

	posFix = this.arrowMargin + this.$(".arrow").outerWidth()/2;

	if(this.orientation === "left"){
	  position["left"] = relatedElementPosition.left - ourSize.width + relatedElementSize.width/2 + posFix;
          this.$(".arrow, .arrow-border").css("right", this.arrowMargin);
	}
	else if(this.orientation === "right"){
	  position["left"] = relatedElementPosition.left + relatedElementSize.width/2 - posFix;
          this.$(".arrow, .arrow-border").css("left", this.arrowMargin);
	}
	else{
	  position["left"] = relatedElementPosition.left + relatedElementSize.width/2 - ourSize.width/2;
	}
      }
      
      else if(this.position === "west" || this.position === "east"){
	if(this.position === "west")  position["left"] = relatedElementPosition.left - ourSize.width - this.$(".arrow").outerWidth();
	if(this.position === "east") position["left"] = relatedElementPosition.left + relatedElementSize.width + this.$(".arrow").outerWidth();
	
	posFix = this.arrowMargin + this.$(".arrow").outerHeight()/2;
	
	if(this.orientation === "top"){
	  position["top"] = relatedElementPosition.top - ourSize.height + relatedElementSize.height/2 + posFix;
          this.$(".arrow, .arrow-border").css("bottom", this.arrowMargin);
	}
	else if(this.orientation === "bottom"){
	  position["top"] = relatedElementPosition.top + relatedElementSize.height/2 - posFix;
          this.$(".arrow, .arrow-border").css("top", this.arrowMargin);
	}
	else{
	  position["top"] = relatedElementPosition.top + relatedElementSize.height/2 - ourSize.height/2;
	}
      }

      this.$().css(position);
      
    });
  }
});
