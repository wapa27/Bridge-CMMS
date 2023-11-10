import { UserComment } from "./user-comment";

export class Component {
    constructor(id: string, name: string, location: string, 
        maintenanceHistoryIds: string[], scheduledMaintenanceids: string[],
        comments: UserComment[]) {
            this.id = id;
            this.name = name;
            this.location = location;
            this.maintenanceHistoryIds = maintenanceHistoryIds;
            this.scheduledMaintenanceIds = scheduledMaintenanceids;
            this.comments = comments;
        }

    id: string;
    name: string;
    location: string;
    maintenanceHistoryIds: string[];
    scheduledMaintenanceIds: string[];
    comments: UserComment[];
}