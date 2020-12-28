({
    doInit : function(component, event, helper) {
		console.log("doinit get called!!");
	},
    handleStartClick : function(component, event, helper) {
		console.log("start button clicked!!");
        helper.setStartTimeOnUI(component);
	},
    handleStopClick : function(component, event, helper) {
		console.log("stop button clicked!!");
        helper.setStopTimeOnUI(component);
	}
  
})