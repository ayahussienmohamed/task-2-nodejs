const data10 = require("./data10");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "to add an item ",
  builder: {
    fname: {
      describe: "this is the first name",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "this is the last name",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    // console.log("you already added  an item");
    data10.addperson(x.id, x.fname, x.lname, x.age, x.city);
    // console.log(x.fname, x.lname);
  },
});
// console.log(yargs.argv);

//////////////////////////////////////////
yargs.command({
  command: "delete",
  describe: "to delete an item",
  // builder: {
  //   id: {
  //     describe: "this is the id ",
  //     demandOption: true,
  //     type: "string",
  //   },
  //   fname: {
  //     describe: "this is the first name",
  //     demandOption: true,
  //     type: "string",
  //   },
  //   lname: {
  //     describe: "this is the last name",
  //     demandOption: true,
  //     type: "string",
  //   },
  //   age: {
  //     describe: "this is the age ",
  //     demandOption: true,
  //     type: "string",
  //   },
  // },
  handler: (x) => {
    data10.deleteData(x.id);
  },
});
//////////////////////////
yargs.command({
  command: "read",
  describe: "to read the data to item",
  builder: {
    id: { describe: "this is the id ", demandOption: true, type: "string" },
  },
  handler: (x) => {
    data10.readData(x.id);
  },
});
///////////////////////////////
yargs.command({
  command: "list",
  describe: "to show the data to an item",

  handler: () => {
    data10.listData();
  },
});

yargs.parse();
