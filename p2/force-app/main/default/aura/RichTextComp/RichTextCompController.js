({
    init : function(component, event, helper) {
        component.set('v.field', '<p><script>alert(this)</script></p><p>hi!</p>');
    }
})