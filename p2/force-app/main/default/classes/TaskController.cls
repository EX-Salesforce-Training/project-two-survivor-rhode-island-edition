public with sharing class TaskController {
    @AuraEnabled
    public static List<Task> loadTasks(Id recordId){
      return[SELECT Subject, ActivityDate FROM Task WHERE WhatId=:recordId];
    }
    @AuraEnabled
    public static Task saveTask(Task task){
      upsert task;
      return task;
     }
  }