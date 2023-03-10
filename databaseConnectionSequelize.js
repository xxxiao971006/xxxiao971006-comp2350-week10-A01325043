const is_qoddi = process.env.IS_QODDI || false;
const dbConfigQoddi = "mysql://freedb_2350_main.:Dr%2ARW6%235b%25%26u6Cf@sql.freedb.tech:3306/freedb_comp2350-week2-A01325043";
const dbConfigLocal = "mysql://root:Zxx53625140%40@localhost/person_pet";
if (is_qoddi) {
    var databaseConnectionString = dbConfigQoddi;
}
else {
    var databaseConnectionString = dbConfigLocal;
}
module.exports = databaseConnectionString;