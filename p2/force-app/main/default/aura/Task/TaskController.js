({
    doInit: function(component, event, helper) {
    var action = component.get("c.loadTasks");
    var whatId = component.get("v.recordId");
    action.setParams({
        "recordId":whatId
    });
    action.setCallback(this,function(response){
        var state = response.getState();
        if(component.isValid() && state === "SUCCESS"){
            component.set("v.tasks",response.getReturnValue());
        }
        else{
            console.log("Failed with state "+state);
        }
    });
    $A.enqueueAction(action);

    component.set("v.newTask.WhatId",component.get("v.recordId"));
},
createNewTask : function(component, event, helper) {
    var action = component.get("c.saveTask");
    var newTask = component.get("v.newTask");
    action.setParams({
        "task": newTask
    });
 
    action.setCallback(this,function(response){
        var state = response.getState();
        if(component.isValid() && state === "SUCCESS"){
            var items = component.get("v.tasks");
            items.push(response.getReturnValue());
            component.set("v.tasks",items);
        }
        else{
            console.log("Failed with state "+state);
        }
    });
    $A.enqueueAction(action);
}
})