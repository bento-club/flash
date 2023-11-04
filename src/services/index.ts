import { TorrentService } from "#src/services/Torrent";

const services = {
    get torrent() {
        return TorrentService.instance;
    },
};

export default services;
