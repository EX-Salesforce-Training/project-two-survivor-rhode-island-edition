({
	submit : function(cmp, evt, help){
        let action = cmp.get("c.studAns");
        console.log("submit action: " + action);
        action.setParams({"sAns" : cmp.get("v.selection")});
        action.setCallback(this, function(response){
            if(response.getState() === "SUCCESS"){
                console.log("inside if response");
                let answer = cmp.get("v.selection");
                answer.push(response.getReturnValue());
                console.log("value of response:" + response);
                cmp.set("v.selection", answer);
                
            }
        });
        $A.enqueueAction(action);
    },
})