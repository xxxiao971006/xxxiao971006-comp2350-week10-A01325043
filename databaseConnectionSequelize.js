const is_qoddi = process.env.IS_QODDI || false;
const dbConfigQoddi = "mysql://freedb_main_2350:E%26Vj97Da7NS6%25c8@sql.freedb.tech:3306/freedb_comp2350-week2-A01332658";
const dbConfigLocal = "mysql://root:Zxx53625140%40@localhost/person_pet";
if (is_qoddi) {
    var databaseConnectionString = dbConfigQoddi;
}
else {
    var databaseConnectionString = dbConfigLocal;
}
module.exports = databaseConnectionString;