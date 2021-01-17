({
	handleChange : function(cmp, evt, help) {
		let selectedOptionValue = evt.getParam("value");
        cmp.set("v.StudRec.Answer__c", selectedOptionValue.join(";"));
	},
    handleEvent : function(cmp, evt, help){
        let appEvent = cmp.getEvent("StudentAnswer");
        cmp.set("v.StudRec.Exam_Question__c", cmp.get("v.studId"));
        appEvent.setParam("ansList", cmp.get("v.StudRec"));
        appEvent.fire();
    }
})