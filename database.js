const Database = require("easy-json-database");
const db = new Database("./some-database.json", {
    snapshots: {
        enabled: true,
        interval: 24 * 60 * 60 * 1000,
        folder: './backups/'
    }
});
