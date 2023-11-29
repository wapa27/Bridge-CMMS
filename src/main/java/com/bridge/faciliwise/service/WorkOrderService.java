package com.bridge.faciliwise.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bridge.faciliwise.dao.WorkOrderDao;
import com.bridge.faciliwise.model.WorkOrder;

@Service
public class WorkOrderService {

    @Autowired
    WorkOrderDao workOrderDao;

    public List<WorkOrder> getWorkOrdersByUserId(String userId) {
        return this.workOrderDao.getWorkOrdersByUserId(userId);
    }
}
