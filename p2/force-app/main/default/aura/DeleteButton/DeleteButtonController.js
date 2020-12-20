({
    handleDeleteRecord : function(cmp, evt, help){
        cmp.find("recordHandler").deleteRecord($A.getCallback(function(deleteResult){
            //Note: if you want a specific behavior (an actin or UI behavior) when this action is successful
            //then handle that in a callback (generic logic when when record is changed should be handled in recordUpdated event handler)
            if(deleteResult.state === "SUCCESS" || deleteResult.state === "DRAFT"){
                //the record is deleted
                console.log("Record is deleted");
            } else if(deleteResult.state === "INCOMPLETE"){
                console.log("User is offline, Device doesn't support drafts.");
            } else if(deleteResult.state === "ERROR"){
                console.log('Problem deleting record, error: ' + JSON.stringify(deleteResult.error));
            } else {
                console.log('Unknown problem, state: ' + deleteResult.state + ', error: ' + JSON.stringify(deleteResult.error));
            }
        }));
    },
    handleRecordUpdated : function(component, event, helper) {
        let eventParams = event.getParams();
        if(eventParams.changeType === "CHANGED"){
            //record is changed
        } else if(eventParams.changeType === "LOADED"){
            //record is loaded in the cache
        } else if(eventParams.changeType === "REMOVED"){
            //record is deleted, show a toast UI message
            let resultToast = $A.get("e.force:showToast");
            resultToast.setParams({"title" : "Deleted", "message" : "The record was deleted."});
            resultToast.fire();
        } else if(eventParams.changeType === "ERROR"){
            //these's an error while loading, saving, or deleting a record
        }
    }
})