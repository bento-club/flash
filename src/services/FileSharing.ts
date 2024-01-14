import {} from "hyperdrive";
export class FileSharingService {
    private static _instance: FileSharingService;

    drive: HyperDrive;

    private constructor() {}

    static get instance(): FileSharingService {
        if (!FileSharingService._instance) {
            FileSharingService._instance = new FileSharingService();
        }

        return FileSharingService._instance;
    }
}
