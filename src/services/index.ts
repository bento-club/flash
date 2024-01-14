import { FileSharingService } from "#src/services/FileSharing";

const services = {
    get fileSharing() {
        return FileSharingService.instance;
    },
};

export default services;
