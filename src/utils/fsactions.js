const child = require('child_process');
const fs = require('fs');
const path = require('fs');

export function getDrives(){return new Promise((resolve,reject)=>{
  if(process.platform == "win32"){
    child.exec('wmic logicaldisk get Caption,VolumeName,FreeSpace,size', (error, stdout) => {
      if(error) return reject(error);
      return resolve(stdout.split('\r\r\n').reduce((cu,c,i)=>{
        if(!i || !c) return cu;
        let r = c.split(" ").filter(r=>r);
        let drive = r.shift();
        let freeSize = (Number(r.shift())/(1024*1024*1024)).round(2);
        let size = (Number(r.shift())/(1024*1024*1024)).round(2);
        let volumName = r.join(" ");
        cu.push({
          drive,size,freeSize,volumName
        })
        return cu;
      },[]));
    });
  }else{
    return reject('this platform is not included');
  }
});
}

/**
 * listing files with given address
 * @param {string} folderpath main folder path
 * @param {object} options options for listing methods
 * @param {boolean} options.format array or comma seperated string of acceptable file formats
 * @param {RegExp} options.ignore regexpression to ignore file and folders defult=> ^(_|\.)
 * @param {RegExp} options.accept regexpression to accept file and folders defult=>null (all)
 * @param {boolean} options.recursive to list subfolders also default=>true
 */
export function listFiles(folderpath, options = {}) {
  folderpath = path.resolve(folderpath).replace(/\\/g, "/");
  let rfiles = internalwalk(folderpath, options);
  rfiles.forEach((f) => (f.relativePath = f.fullPath.replace(folderpath, "")));
  return rfiles;
}

/**
 * listing files with given address
 * @param {string} folderpath main folder path
 * @param {object} options options for listing methods
 * @param {boolean} options.format array or comma seperated string of acceptable file formats
 * @param {RegExp} options.ignore regexpression to ignore file and folders defult=> ^(_|\.)
 * @param {RegExp} options.accept regexpression to accept file and folders defult=>null (all)
 * @param {boolean} options.recursive to list subfolders also default=>true
 */
let internalwalk = function internalwalk(folderpath, options) {
  options.ignore = options.ignore || /^(_|\.)/;
  options.recursive = options.recursive != undefined ? options.recursive : true;
  if (options.format)
    options.format = Array.isArray(options.format)
      ? options.format
      : options.format.split(",");
    
  let resultFiles = [];
  let files = fs.readdirSync(folderpath);
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    if (
      file.match(options.ignore) ||
      (options.accept && !file.match(options.ignore))
    )
      continue;
    let address = path.resolve(folderpath, file);
    if (!fs.statSync(address).isDirectory()) {
      let name = file.split(".");
      let format = name.length > 1 ? name.pop() : "";
      if (options.format && !options.format.includes(format)) continue;
      let fullPath = address.replace(/\\/g, "/");
      let directory = fullPath.includes("/")
        ? fullPath.slice(0, fullPath.lastIndexOf("/") + 1)
        : "";
      resultFiles.push({
        name: name.join("."),
        format,
        fileName: file,
        directory,
        fullPath,
      });
    } else if (options.recursive) {
      resultFiles.push(...internalwalk(address, options));
    }
  }
  return resultFiles;
};
 
export function listfolders(folderpath, options={}){
  
}
// export listFiles;