const fs = require("fs");
const allData = require("./allData");

const addperson = (id, fname, lname, age, city) => {
  const allData = loadData();

  const duplicateddata = allData.filter((obj) => {
    return obj.id === id;
  });
  if (duplicateddata.length == 0) {
    allData.push({
      id: id,
      fname: fname,
      lname: lname,
      age: age,
      city: city,
    });
    saveAllData(allData);
  } else {
    console.log("Error the id is repeated");
  }
};
const loadData = () => {
  try {
    const datajson = fs.readFileSync("Data10.json").toString();
    return JSON.parse(datajson);
  } catch {
    return [];
  }
};

const saveAllData = (allData) => {
  const saveAlldatajson = JSON.stringify(allData);
  fs.writeFileSync("Data10.json", saveAlldatajson);
};

const deleteData = (id) => {
  const allData = loadData();

  const Datatokeep = allData.filter((obj) => {
    return obj.id != id;
  });
  console.log(Datatokeep);
  saveAllData(Datatokeep);
};

const readData = (id) => {
  const allData = loadData();
  const itemneeded = allData.find((obj) => {
    return obj.id == id;
  });

  console.log(itemneeded);
};

const listData = () => {
  const allData = loadData();
  allData.forEach((obj) => {
    console.log(obj.fname, obj.lname, obj.city);
  });
};

module.exports = {
  addperson,
  deleteData,
  readData,
  listData,
};
