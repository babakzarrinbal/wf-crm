const exp = {};
const db = {
  customers: {
    data: [],
    lastId: 1,
    sortBy: "nextServiceDate",
    sortOrder: "asc",
  },
  services: {
    data: [],
    lastId: 1,
    sortBy: "serviceDate",
    sortOrder: "desc",
  },
};

const jmoment = require("moment-jalaali");
var writeDateToPersistans;

// const storageMode = "browser"; // filesystem

if (process.env.IS_ELECTRON) {
  const datapath = "c:/wf-crm/";
  const fs = require("fs");
  fs.mkdirSync(datapath, { recursive: true });
  for (let en in db) {
    try {
      db[en] = JSON.parse(fs.readFileSync(datapath + en + ".json"));
    } catch (e) {
      console.error("-".repeat(40) + `error in getting entity${en}: \n`, e);
    }
  }
  writeDateToPersistans = (entityName) =>
    fs.writeFileSync(
      datapath + entityName + ".json",
      JSON.stringify(db[entityName])
    );
} else {
  let prefix = "wf-crm_";
  for (let en in db) {
    try {
      if (window.localStorage.getItem(prefix + en)) {
        let entity = JSON.parse(window.localStorage.getItem(prefix + en));
        db[en] = entity;
      }
    } catch (e) {
      console.error(`error in getting entity${en}: \n`, e);
    }
  }
  writeDateToPersistans = (entityName) =>
    window.localStorage.setItem(
      prefix + entityName,
      JSON.stringify(db[entityName])
    );
}

exp.getList = async (entityName, options = {}) => {
  let data;

  options.active = options.active || false;
  let filt = options.active ? d=>d.active : d=>!d.active
  let tempd = ((db[entityName] || {}).data || []).filter(filt);
  if (options.search) {
    tempd = [];
    let i = 0;
    for (let d of (db[entityName] || {}).data || []) {
      let approved;
      for (let sf of options.searchFields) {
        if ((d[sf] || "").toString().includes(options.search)) {
          approved = true;
          break;
        }
      }
      if (approved) tempd[i++] = d;
    }
  }
  data = JSON.parse(
    JSON.stringify(tempd.slice(options.start || 0, options.end || 50))
  );

  if (options.populate) {
    if (!Array.isArray(options.populate)) options.populate = [options.populate];
    data.forEach((d) => {
      options.populate.forEach((p) => {
        d[p] = ((db[p] || {}).data || []).filter((da) => d[p].includes(da.id));
      });
    });
  }
  return data;
};

exp.getById = (entityName, id, options = {}) =>
  new Promise((resolve, reject) => {
    try {
      let entity = db[entityName];
      let data = JSON.parse(
        JSON.stringify(entity.data.find((e) => e.id == id))
      );
      if (options.populate) {
        if (!Array.isArray(options.populate))
          options.populate = [options.populate];
        options.populate.forEach((p) => {
          data[p] = ((db[p] || {}).data || []).filter((d) =>
            data[p].includes(d.id)
          );
        });
      }
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });

exp.post = (entityName, data) =>
  new Promise((resolve, reject) => {
    try {
      let entity = db[entityName];
      if (data.id != "new") {
        entity.data[entity.data.findIndex((e) => e.id == data.id)] = data;
      } else {
        data.id = entity.lastId++;
        entity.data.unshift(data);
      }
      exp.sort(entityName, db[entityName].sortBy, db[entityName].sortOrder);
      writeDateToPersistans(entityName);
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });

exp.sort = async (entityName, field = "date", order = "desc") => {
  if (order == "asc") {
    db[entityName].data.sort((a, b) =>
      jmoment(a[field], 'jYYYY/jM/jD').toDate() > jmoment(b[field], 'jYYYY/jM/jD').toDate() ? 1 : -1
    );
  } else {
    db[entityName].data.sort((a, b) =>
      jmoment(a[field], "jYYYY/jM/jD").toDate() > jmoment(b[field]).toDate()
        ? -1
        : 1
    );
  }
};

exp.deleteByIds = async (entityName, ids) =>
  new Promise((resolve, reject) => {
    try {
      let entity = db[entityName];
      if (!Array.isArray(ids)) ids = [ids];
      entity.data = entity.data.filter((d) => !ids.includes(d.id));
      writeDateToPersistans(entityName);
      resolve("success");
    } catch (e) {
      reject(e);
    }
  });

export default exp;
