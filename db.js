var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,{ useNewUrlParser: true },function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

MongoClient.connect(url,{ useNewUrlParser: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = {State:"AA",StateName:"Armed Forces America",Country: "US",CountryName:"United  States of America",
State:"AE",StateName:"Armed Forces",Country: "US",CountryName:"United  States of America",
State:"AP",StateName:"Armed Forces Pacific",Country: "US",CountryName:"United  States of America",
State:"AK",StateName:"Alaska",Country: "US",CountryName:"United  States of America",
State:"AL",StateName:"Alabama",Country: "US",CountryName:"United  States of America",
State:"AR",StateName:"Arkansas",Country: "US",CountryName:"United  States of America",
State:"AZ",StateName:"Arizona",Country: "US",CountryName:"United  States of America",
State:"CA",StateName:"California",Country: "US",CountryName:"United  States of America",
State:"CO",StateName:"Colorado",Country: "US",CountryName:"United  States of America",
State:"CT",StateName:"Connecticut",Country: "US",CountryName:"United  States of America",
State:"DC ",StateName:"Washington DC",Country: "US",CountryName:"United  States of America",
State:"DE",StateName:"Delaware",Country: "US",CountryName:"United  States of America",
State:"FL",StateName:"Florida",Country: "US",CountryName:"United  States of America",
State:"GA",StateName:"Georgia",Country: "US",CountryName:"United  States of America",
State:"GU",StateName:"Guam",Country: "US",CountryName:"United  States of America",
State:"HI",StateName:"Hawaii",Country: "US",CountryName:"United  States of America",
State:"IA",StateName:"Iowa",Country: "US",CountryName:"United  States of America",
State:"ID",StateName:"Idaho",Country: "US",CountryName:"United  States of America",
State:"IL",StateName:"Illinois",Country: "US",CountryName:"United  States of America",
State:"IN",StateName:"Indiana",Country: "US",CountryName:"United  States of America",
State:"KS",StateName:"Kansas",Country: "US",CountryName:"United  States of America",
State:"KY",StateName:"Kentucky",Country: "US",CountryName:"United  States of America",
State:"LA",StateName:"Louisiana",Country: "US",CountryName:"United  States of America",
State:"MA",StateName:"Massachusetts",Country: "US",CountryName:"United  States of America",
State:"MD",StateName:"Maryland",Country: "US",CountryName:"United  States of America",
State:"ME",StateName:"Maine",Country: "US",CountryName:"United  States of America",
State:"MI",StateName:"Michigan",Country: "US",CountryName:"United  States of America",
State:"MN",StateName:"Minnesota",Country: "US",CountryName:"United  States of America",
State:"MO",StateName:"Missouri",Country: "US",CountryName:"United  States of America",
State:"MS",StateName:"Mississippi",Country: "US",CountryName:"United  States of America",
State:"MT",StateName:"Montana",Country: "US",CountryName:"United  States of America",
State:"NC",StateName:"North Carolina",Country: "US",CountryName:"United  States of America",
State:"ND",StateName:"North Dakota",Country: "US",CountryName:"United  States of America",
State:"NE",StateName:"Nebraska",Country: "US",CountryName:"United  States of America",
State:"NH",StateName:"New Hampshire",Country: "US",CountryName:"United  States of America",
State:"NJ",StateName:"New Jersey",Country: "US",CountryName:"United  States of America",
State:"NM",StateName:"New Mexico",Country: "US",CountryName:"United  States of America",
State:"NV",StateName:"Nevada",Country: "US",CountryName:"United  States of America",
State:"NY",StateName:"New York",Country: "US",CountryName:"United  States of America",
State:"OH",StateName:"Ohio",Country: "US",CountryName:"United  States of America",
State:"OK",StateName:"Oklahoma",Country: "US",CountryName:"United  States of America",
State:"OR",StateName:"Oregon",Country: "US",CountryName:"United  States of America",
State:"PA",StateName:"Pennsylvania",Country: "US",CountryName:"United  States of America",
State:"PR",StateName:"Puerto Rico",Country: "US",CountryName:"United  States of America",
State:"RI",StateName:"Rhode Island",Country: "US",CountryName:"United  States of America",
State:"SC",StateName:"South Carolina",Country: "US",CountryName:"United  States of America",
State:"SD",StateName:"South Dakota",Country: "US",CountryName:"United  States of America",
State:"TN",StateName:"Tennessee",Country: "US",CountryName:"United  States of America",
State:"TX",StateName:"Texas",Country: "US",CountryName:"United  States of America",
State:"UT",StateName:"Utah",Country: "US",CountryName:"United  States of America",
State:"VA",StateName:"Virginia",Country: "US",CountryName:"United  States of America",
State:"VI",StateName:"Virgin Islands",Country: "US",CountryName:"United  States of America",
State:"VT",StateName:"Vermont",Country: "US",CountryName:"United  States of America",
State:"WA",StateName:"Washington",Country: "US",CountryName:"United  States of America",
State:"WI",StateName:"Wisconsin",Country: "US",CountryName:"United  States of America",
State:"WV",StateName:"West Virginia",Country: "US",CountryName:"United  States of America",
State:"WY",StateName:"Wyoming",Country: "US",CountryName:"United  States of America",
State:"AB",StateName:"Alberta",Country: "CA",CountryName:"Canada",
State:"BC",StateName:"British Columbia",Country: "CA",CountryName:"Canada",
State:"MB",StateName:"Manitoba",Country: "CA",CountryName:"Canada",
State:"NB",StateName:"New Brunswick",Country: "CA",CountryName:"Canada",
State:"NL",StateName:"Newfoundland and Labrador",Country: "CA",CountryName:"Canada",
State:"NS",StateName:"Nova Scotia",Country: "CA",CountryName:"Canada",
State:"NT",StateName:"Northwest Territories",Country: "CA",CountryName:"Canada",
State:"NU",StateName:"Nunavut",Country: "CA",CountryName:"Canada",
State:"ON",StateName:"Ontario",Country: "CA",CountryName:"Canada",
State:"PE",StateName:"Prince Edward Island",Country: "CA",CountryName:"Canada",
State:"QC",StateName:"Quebec",Country: "CA",CountryName:"Canada",
State:"SK",StateName:"Saskatchewan",Country: "CA",CountryName:"Canada",
State:"YT",StateName:"Yukon",Country: "CA",CountryName:"Canada",
State:"AN",StateName:"Andaman and Nicobar Islands",Country: "IN",CountryName:"India",
State:"AP",StateName:"Andhra Pradesh",Country: "IN",CountryName:"India",
State:"AR",StateName:"Arunachal Pradesh",Country: "IN",CountryName:"India",
State:"AS",StateName:"Assam",Country: "IN",CountryName:"India",
State:"BR",StateName:"Bihar",Country: "IN",CountryName:"India",
State:"CH",StateName:"Chandigarh",Country: "IN",CountryName:"India",
State:"CT",StateName:"Chhattisgarh",Country: "IN",CountryName:"India",
State:"DN",StateName:"Dadra and Nagar Haveli",Country: "IN",CountryName:"India",
State:"DD",StateName:"Daman and Diu",Country: "IN",CountryName:"India",
State:"DL",StateName:"Delhi",Country: "IN",CountryName:"India",
State:"GA",StateName:"Goa",Country: "IN",CountryName:"India",
State:"GJ",StateName:"Gujarat",Country: "IN",CountryName:"India",
State:"HR",StateName:"Haryana",Country: "IN",CountryName:"India",
State:"HP",StateName:"Himachal Pradesh",Country: "IN",CountryName:"India",
State:"JK",StateName:"Jammu and Kashmir",Country: "IN",CountryName:"India",
State:"JH",StateName:"Jharkhand",Country: "IN",CountryName:"India",
State:"KA",StateName:"Karnataka",Country: "IN",CountryName:"India",
State:"KL",StateName:"Kerala",Country: "IN",CountryName:"India",
State:"LD",StateName:"Lakshadweep",Country: "IN",CountryName:"India",
State:"MP",StateName:"Madhya Pradesh",Country: "IN",CountryName:"India",
State:"MH",StateName:"Maharashtra",Country: "IN",CountryName:"India",
State:"MN",StateName:"Manipur",Country: "IN",CountryName:"India",
State:"ML",StateName:"Meghalaya",Country: "IN",CountryName:"India",
State:"MZ",StateName:"Mizoram",Country: "IN",CountryName:"India",
State:"NL",StateName:"Nagaland",Country: "IN",CountryName:"India",
State:"OR",StateName:"Odisha, Orissa",Country: "IN",CountryName:"India",
State:"PY",StateName:"Puducherry",Country: "IN",CountryName:"India",
State:"PB",StateName:"Punjab",Country: "IN",CountryName:"India",
State:"RJ",StateName:"Rajasthan",Country: "IN",CountryName:"India",
State:"SK",StateName:"Sikkim",Country: "IN",CountryName:"India",
State:"TN",StateName:"Tamil Nadu",Country: "IN",CountryName:"India",
State:"TG",StateName:"Telangana",Country: "IN",CountryName:"India",
State:"TR",StateName:"Tripura",Country: "IN",CountryName:"India",
State:"UP",StateName:"Uttar Pradesh",Country: "IN",CountryName:"India",
State:"UT",StateName:"Uttarakhand,Uttaranchal",Country: "IN",CountryName:"India",
State:"WB",StateName:"West Bengal",Country: "IN",CountryName:"India"
};
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

MongoClient.connect(url,{ useNewUrlParser: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").findOne({StateName:"West Bengal"}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});
