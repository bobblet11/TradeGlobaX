import {app} from "./app.js"


const port = '8888';

//curl http://127.0.0.1:8888


app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});