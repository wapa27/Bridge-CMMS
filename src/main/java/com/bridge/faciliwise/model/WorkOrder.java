package com.bridge.faciliwise.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WorkOrder {
    String title;
    WorkOrderStatus status;    
    UrgencyStatus urgency;
    java.util.Date dueDate;
    java.util.List<UserComment> comments;
    String orderID;
}
