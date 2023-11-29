package com.bridge.faciliwise.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.bridge.faciliwise.model.WorkOrder;

@Repository
public class WorkOrderDao {
    public List<WorkOrder> getWorkOrdersByUserId(String userId) {
        List<WorkOrder> workOrders = new ArrayList<>();
        // query MySQL DB
        workOrders.add(new WorkOrder("Workorder 1", null, null, null, null, "11111111"));
        workOrders.add(new WorkOrder("Workorder 2", null, null, null, null, "22222222"));
        workOrders.add(new WorkOrder("Workorder 3", null, null, null, null, "33333333"));
        workOrders.add(new WorkOrder("Workorder 4", null, null, null, null, "44444444"));
        workOrders.add(new WorkOrder("Workorder 5", null, null, null, null, "55555555"));
        return workOrders;
    }
}
