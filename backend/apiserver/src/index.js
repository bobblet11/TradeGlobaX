import {app} from "./app.js"
import {startAPIFetcher} from "./apiFetcher.js"
import {logToFile} from "./logger.js";

const port = '8888';

//curl http://127.0.0.1:8888

logToFile(`\n\n\n\nSTART`);
app.listen(port, () => {
  logToFile(`Server is listening on port ${port}...`);
});

startAPIFetcher();