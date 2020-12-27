public class ExamQController {

    @AuraEnabled
    public static list<Exam_Question__c> examQs(string examTitle){
        list<Exam_Question__c> qList = [SELECT Question__r.Question_Body__c, Id FROM Exam_Question__c WHERE Exam__r.Name = :examTitle];
        return qList;
    }
    @AuraEnabled
    public static void studAns(list<Student_Answer__c> sAns){
        /*system.debug(sAns);
        Student_Answer__c response = new Student_Answer__c(Answer__c = sAns, Exam_Question__c = examId);
        list<Student_Answer__c> response = new list<Student_Answer__c>();
        for(Student_Answer__c sa: sAns){
        Student_Answer__c sa = new Student_Answer__c(Answer__c = sAns, Exam_Question__c = examId); 
        }*/
        insert sAns;
    }
}