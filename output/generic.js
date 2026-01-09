// generic is reusable block of code
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({ name: 'shaikh al nahian', age: 23, country: "fsl" });
// console.log(user);
// interface a generic er babohar
var RType;
(function (RType) {
    RType[RType["Success"] = 0] = "Success";
    RType[RType["Failure"] = 1] = "Failure";
    RType[RType["Auathenicated"] = 2] = "Auathenicated";
    RType[RType["Forbidden"] = 3] = "Forbidden";
})(RType || (RType = {}));
const response = {
    status: 200,
    type: RType.Success,
    data: {
        name: "test",
        smothing: 'ok'
    }
};
// enum er babohar
const response1 = {
    status: 200,
    type: RType.Success,
    data: "test"
};
// console.log(response1)
// tupples
let a = [3, "hello", { p: 3 }];
a[1] = 1;
// console.log(a)
let b = ["nahian", 4, { p: 2 }];
b[1] = 1;
export {};
// console.log(b)
//# sourceMappingURL=generic.js.map