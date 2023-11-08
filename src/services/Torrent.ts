import WebTorrent from "webtorrent";

export const torrenService = new WebTorrent({});

export class TorrentService extends WebTorrent {
    private static _instance: TorrentService;

    activeTorrent?: WebTorrent.Torrent;

    private constructor(options?: WebTorrent.Options) {
        super(options);
    }

    static get instance(): TorrentService {
        if (!TorrentService._instance) {
            TorrentService._instance = new TorrentService();
        }

        return TorrentService._instance;
    }

    private cleanupActiveTorrent() {
        if (!this.activeTorrent) {
            return;
        }

        this.activeTorrent.destroy(
            {
                destroyStore: true,
            },
            (err) => {
                console.error(err);
            },
        );
    }

    upload(file: File): WebTorrent.Torrent {
        this.cleanupActiveTorrent();

        this.activeTorrent = this.seed(file);

        return this.activeTorrent;
    }
}
