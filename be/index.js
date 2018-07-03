"use strict";
const http = require("http") // CHANGE http2
const fs = require("fs")
const qs = require("querystring")

var readline = require('readline');
// var google = require('googleapis');
// var googleAuth = require('google-auth-library');


// console.log(new Date(1499200683623).toUTCString())

var excel = ['']
var server = http.createServer(function (request, response) {
    let url = request.url;
    console.log(url)
    if (url == '/') url = './pages/index.html'
    else if (url == '/quienes-somos') url = './pages/somos.html'
    else if (url == '/programas') url = './pages/programas.html'
    else if (url == '/consultorias') url = './pages/consultorias.html'
    else if (url == '/de-maximo-interes') url = './pages/interes.html'
    else if (url == '/contactanos') url = './pages/contactanos.html'
    //    else if (url == '/form') {
    //       if (request.method == 'POST') {
    //          console.log('entro al form')
    //          var body = [];
    //          request.on('data', (data) => {
    //             body.push(data);
    //          }).on('end', () => {
    //             body = Buffer.concat(body).toString();
    //             body = JSON.parse(body);
    //             excel = [new Date().toLocaleDateString()]
    //             for (var prop in body) {
    //                excel.push(body[prop])
    //             }
    //             // console.log(excel)
    //             response.end(JSON.stringify({ val: 'test' }));
    //             submitSheet()
    //          });
    //       }
    //    }else if (url == '/forme') {
    //       if (request.method == 'POST') {
    //          console.log('entro al forme')
    //          var body = [];
    //          request.on('data', (data) => {
    //             body.push(data);
    //          }).on('end', () => {
    //             body = Buffer.concat(body).toString();
    //             excel = ['', '','','']
    //             excel.push(body);
    //             // console.log(excel)
    //             response.end(JSON.stringify({ val: 'test' }));
    //             submitSheet()
    //          });
    //       }
    //    }
    // else url = url.replace('/', '\\')
    fs.readFile(`${__dirname}/public/${url}`, function (err, data) {
        response.end(data)
    })
});
var port = process.env.PORT || 3000;
server.listen(port);
console.log(`servidor iniciado en el puerto ${port}`)
function l(txt) {
    console.log(txt)
}
// function bodyParse(post) {
//    var ob = JSON.stringify(post).split('"')
//    var obj = ''
//    for (var i = 1; i < ob.length - 3; i++) {/// cambiar el split  \\ por / para linux
//       if (ob[i].split('\\')[0] != '{' && ob[i].split('\\')[0] != '}' && ob[i].split('\\')[0] != ':' && ob[i].split('\\')[0] != ',')
//          obj += `"${ob[i].split('\\')[0]}"`
//       else
//          obj += ob[i].split('\\')[0]
//    }
//    obj = JSON.parse(obj)
//    return obj
// }




// // console.log(new Date().toUTCString())

// // If modifying these scopes, delete your previously saved credentials
// // at ~/.credentials/sheets.googleapis.com-nodejs-quickstart.json
// var SCOPES = [
//    'https://www.googleapis.com/auth/spreadsheets',
//    // 'https://www.googleapis.com/auth/drive',
//    // 'https://www.googleapis.com/auth/drive.file'
// ];
// // var test = google.sheets('v4')
// var sheets = google.sheets('v4');

// // // var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
// // //    process.env.USERPROFILE) + '\\.credentials\\';
// var TOKEN_DIR = `${__dirname}/credentials/`
// var TOKEN_PATH = TOKEN_DIR + 'sheets.googleapis.com-nodejs-quickstart.json';

// // // Load client secrets from a local file.
// function submitSheet() {
//    fs.readFile('client_secret.json', function processClientSecrets(err, content) {
//       if (err) {
//          console.log('Error loading client secret file: ' + err);
//          return;
//       }
//       console.log('entro');
//       // Authorize a client with the loaded credentials, then call the
//       // Google Sheets API.
//       // authorize(JSON.parse(content), listMajors);
//       authorize(JSON.parse(content), append);
//    });
// }

// // /**
// //  * Create an OAuth2 client with the given credentials, and then execute the
// //  * given callback function.
// //  *
// //  * @param {Object} credentials The authorization client credentials.
// //  * @param {function} callback The callback to call with the authorized client.
// //  */
// function authorize(credentials, callback) {
//    var clientSecret = credentials.installed.client_secret;
//    var clientId = credentials.installed.client_id;
//    var redirectUrl = credentials.installed.redirect_uris[0];
//    var auth = new googleAuth();
//    var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

//    // Check if we have previously stored a token.
//    fs.readFile(TOKEN_PATH, function (err, token) {
//       if (err) {
//          getNewToken(oauth2Client, callback);
//       } else {
//          oauth2Client.credentials = JSON.parse(token);
//          callback(oauth2Client);
//       }
//    });
// }

// // /**
// //  * Get and store new token after prompting for user authorization, and then
// //  * execute the given callback with the authorized OAuth2 client.
// //  *
// //  * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
// //  * @param {getEventsCallback} callback The callback to call with the authorized
// //  *     client.
// //  */
// function getNewToken(oauth2Client, callback) {
//    var authUrl = oauth2Client.generateAuthUrl({
//       access_type: 'offline',
//       scope: SCOPES
//    });
//    console.log('Authorize this app by visiting this url: ', authUrl);
//    var rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//    });
//    rl.question('Enter the code from that page here: ', function (code) {
//       rl.close();
//       oauth2Client.getToken(code, function (err, token) {
//          if (err) {
//             console.log('Error while trying to retrieve access token', err);
//             return;
//          }
//          oauth2Client.credentials = token;
//          storeToken(token);
//          callback(oauth2Client);
//       });
//    });
// }

// // /**
// //  * Store token to disk be used in later program executions.
// //  *
// //  * @param {Object} token The token to store to disk.
// //  */
// function storeToken(token) {
//    try {
//       fs.mkdirSync(TOKEN_DIR);
//    } catch (err) {
//       if (err.code != 'EEXIST') {
//          throw err;
//       }
//    }
//    fs.writeFile(TOKEN_PATH, JSON.stringify(token));
//    console.log('Token stored to ' + TOKEN_PATH);
// }

// // /**
// //  * Print the names and majors of students in a sample spreadsheet:
// //  * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
// //  */
// function listMajors(auth) {
//    sheets.spreadsheets.values.get({
//       auth: auth,
//       spreadsheetId: '16YcearpRJSLTn01hR8hIfMbk9FL2fwgWBbw9odH_jLs',
//       range: 'A1:G',
//    }, function (err, response) {
//       if (err) {
//          console.log('The API returned an error: ' + err);
//          return;
//       }
//       var rows = response.values;
//       if (rows.length == 0) {
//          console.log('No data found.');
//       } else {
//          console.log('Name, Major:');
//          for (var i = 0; i < rows.length; i++) {
//             // var row = rows[i];
//             // Print columns A and E, which correspond to indices 0 and 4.
//             // console.log('%s, %s', row[0], row[4]);
//             console.log(rows[i])
//          }
//       }
//    });
// }
// function append(auth) {
//    var request = {
//       auth: auth,
//       // The ID of the spreadsheet to update.
//       spreadsheetId: '16YcearpRJSLTn01hR8hIfMbk9FL2fwgWBbw9odH_jLs',  // TODO: Update placeholder value.

//       // The A1 notation of a range to search for a logical table of data.
//       // Values will be appended after the last row of the table.
//       range: '1. Respuestas',  // TODO: Update placeholder value.

//       // How the input data should be interpreted.
//       valueInputOption: 'RAW',  // TODO: Update placeholder value.

//       // How the input data should be inserted.
//       insertDataOption: 'INSERT_ROWS',  // TODO: Update placeholder value.

//       alt: 'json',

//       resource: {
//          // TODO: Add desired properties to the request body.
//          values: [excel]
//       },
//    };
//    sheets.spreadsheets.values.append(request, function (err, response) {
//       if (err) {
//          console.error(err);
//          return;
//       }
//       // TODO: Change code below to process the `response` object:
//       console.log(JSON.stringify(response, null, 2));
//    });
// }