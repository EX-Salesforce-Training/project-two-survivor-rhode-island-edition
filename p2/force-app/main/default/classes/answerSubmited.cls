public class answerSubmited {
    public static void newResult(){
        list<Student_Answer__c> studlist = new list<Student_Answer__c>();
        list<Correct_Answer__c> cans = [SELECT ID FROM Correct_Answer__c];
    }
}