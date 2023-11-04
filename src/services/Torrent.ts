import WebTorrent from "webtorrent";

export const torrenService = new WebTorrent({});

export class TorrentService extends WebTorrent {
    private static _instance: TorrentService;

    private constructor(options?: WebTorrent.Options) {
        super(options);
    }

    static get instance(): TorrentService {
        if (!TorrentService._instance) {
            TorrentService._instance = new TorrentService();
        }

        return TorrentService._instance;
    }
}
