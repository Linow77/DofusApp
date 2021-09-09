import * as fs from "fs";

export default function jsonReader(filepath, cb) {
  fs.readFile(filepath, "utf-8", (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}
