package com.bridge.faciliwise.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserComment {
    String user;
    java.util.Date date;
    String comment;
}
