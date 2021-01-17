({
    getInfo : function(cmp, evt, help) {
		let qs = cmp.get("c.examQs");
        qs.setParams({"examTitle" : cmp.get("v.examNumber")});
        qs.setCallback(this, function(response){
                       if(response.getState() === "SUCCESS"){
            cmp.set("v.examqs", response.getReturnValue());
        }
            console.log(response.getReturnValue().length);
                       });
        $A.enqueueAction(qs);
	},
    
    
    submitans : function(cmp, evt, help){
        let appEvent = $A.get("e.c:SubmitAnswerEvent");
        appEvent.fire();
    },
    
    handleCompEvent : function(cmp, evt, help){
    let ansList = evt.getParam("ansList");
        let finalList = cmp.get("v.selection")
        finalList.push(ansList);
        cmp.set("v.selection", finalList);
        console.log(finalList);
        if(finalList.length == cmp.get("v.examqs").length){
            /*for(let i = 0; i < ansList.length; i++){
                cmp.set({"v.selection": ansList})
            }*/
            help.submit(cmp, evt, help);
        } else {
            console.log("Answers not submitted")
        }
}
})