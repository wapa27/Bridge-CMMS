import { AnnouncementType } from "./announcementType";

export class Announcement {
    constructor(title: string, announcementType: AnnouncementType, announcementId: string) {
        this.title = title;
        this.announcementType = announcementType;
        this.announcementId = announcementId;
    }

    title: string;
    announcementType: AnnouncementType;
    announcementId: string;
}