({
	getInfo : function(cmp, evt, help) {
		let qs = cmp.get("c.examQs");
        qs.setParams({"examTitle" : "v.examTitle"});
        qs.setCallback(this, function(response){
                       if(response.getState() === "SUCCESS"){
            cmp.set("v.question", response.getReturnValue());
        }
            console.log(qs);
                       });
        $A.enqueueAction(qs);
	},
    submitAns : function(cmp, evt, help){
        let action = cmp.get("c.studAns");
        action.setParams({"sAns" : "v.answer"});
        action.setCallback(this, function(response){
            if(response.getState() === "SUCCESS"){
                let answer = cmp.get("v.answer");
                answer.push(response.getReturnValue());
                cmp.set("v.answer", answer);
            }
        });
        $A.enqueueAction(action);
    }
})