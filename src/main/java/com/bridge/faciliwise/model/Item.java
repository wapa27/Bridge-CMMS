package com.bridge.faciliwise.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Item {
    String id;
    String name;
    String location;
    java.util.List<String> maintenanceHistoryIds;
    java.util.List<String> scheduledMaintenanceIds;
    java.util.List<UserComment> comments;
}
