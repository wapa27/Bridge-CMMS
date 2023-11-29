package com.bridge.faciliwise.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobProcedureTask {
    TaskType taskType;
    String taskName;
    TaskStatus taskStatus;
    java.util.List<UserComment> comments;
}
