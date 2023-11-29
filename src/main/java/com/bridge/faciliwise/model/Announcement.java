package com.bridge.faciliwise.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Announcement {
    String title;
    AnnouncementType announcementType;
    String announcementId;
}
