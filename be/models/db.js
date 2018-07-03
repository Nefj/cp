var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
process.env.TZ = 'America/La_Paz';

module.exports = {
      ///Account
      roles: mongoose.model('roles', new Schema({
            name: String,
            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
      })),
      ////////////////////////////////////////////////////////////////////////////

      users: mongoose.model('users', new Schema({
            name: String,
            active: Boolean,
            password_hash: String,
            // token: String,
            rol: ObjectId,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      ////////////////////////////////////////////////////////////////////////////

      persons: mongoose.model('persons', new Schema({
            first_name: String,
            last_name: String,
            cellphone: Number,
            city: String,
            email: String,
            //////////////
            interes: [
                  {
                        program_id: ObjectId,
                        programName: String,
                        checked: Boolean,
                        state: Number,
                        ////////////
                        //  0 interesados
                        //  1 en duda
                        //  2 confirmados
                        //  3 isncritos
                        //  4 enlinea
                        //  5 proximo evento 
                        //  6 sin interes
                        //////// 
                  }
            ],

            /////////////////////////////////////////////////
            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      ////////////////////////////////////////////////////////////////////////////

      facilitators: mongoose.model('facilitators', new Schema({
            name: String,
            job: String,
            review: String,
            enterprises: [String],
            descriptions: [String],
            photo: String,
            background: String,
            social: [],
            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      ////////////////////////////////////////////////////////////////////////////

      events: mongoose.model('events', new Schema({
            photo: String,
            date_start: Date,
            name: String,
            facilitators: [ObjectId],
            description: String,
            program_id: ObjectId,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      ////////////////////////////////////////////////////////

      workshops: mongoose.model('workshops', new Schema({
            photo: String,
            name: String,
            description: String,
            objective: String,
            benefit: [{
                  photo: String,
                  name: String
            }],
            content: [{
                  name: String,
                  description: String
            }],

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      programs: mongoose.model('programs', new Schema({
            photo: String,
            name: String,
            description: String,
            objective: String,
            benefit: [{
                  photo: String,
                  name: String
            }],
            modules: [{
                  name: String,
                  description: String
            }],

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      consultancies: mongoose.model('consultancies', new Schema({
            photo: String,
            name: String,
            description: String,
            objective: String,
            scopes: [{ // alcance
                  name: String
            }],

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      //////////////////////////////////////////////////////////////////

      offices: mongoose.model('offices', new Schema({
            name: String,
            // nit:String,
            ubicacion: String,
            lat: Number,
            lng: Number,
            phones: String,
            department: String,
            company_id: ObjectId,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } }
      })),

      //////////////////////////////////////////////////////////////////

      company: mongoose.model('company', new Schema({
            name: String,
            nit: String,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } }
      })),

      //////////////////////////////////////////////////////////////////

      pages: mongoose.model('pages', new Schema({
            home: {
                  inicio: {
                        photo: String,
                        line1: String,
                        line2: String,
                        line3: String
                  },
                  services: {
                        tittle: String,
                        services: [{
                              photo: String,
                              tittle: String,
                              number: Number,
                              description: String
                        }]
                  },
                  our: {
                        photo: String,
                        line1: String,
                        line2: String,
                        list: [{
                              photo: String,
                              tittle: String,
                              description: String
                        }]
                  },
                  events: {
                        photo: String,
                        line1: String,
                        line2: String,
                  },
                  team: {
                        tittle: String,
                        member: [{
                              photo: String,
                              charge: String,
                              name: String,
                              social: [String]
                        }]
                  },
                  galery: {
                        tittle: String,
                        photos: [{
                              photo: String,
                              description: String
                        }]
                  },
                  clients: {
                        tittle: String,
                        line: String,
                        list: [{
                              photo: String
                        }],
                  }
            },
            somos: {
                  inicio: {
                        photo: String,
                        line: String
                  },
                  version: {
                        tittle: String,
                        mision: {
                              photo: String,
                              name: String,
                              description: String
                        },
                        vision: {
                              photo: String,
                              name: String,
                              description: String
                        },
                        valores: {
                              photo: String,
                              name: String,
                              description: String
                        }
                  }
            },
            interes: {
                  inicio: {
                        photo: String,
                        line: String
                  },
                  list: [{
                        photo: String,
                        tittle: String,
                        description: String,
                        block: String,
                        block2: {
                              tittle: String,
                              photos: [{ photo: String }]
                        },
                        block3: {
                              tittle: String,
                              photos: [{ photo: String }]
                        },
                        _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
                  }]
            },
            program: {
                  tittle: String,
                  line: String
            },
            taller: {
                  tittle: String,
                  line: String
            },
            consultoria: {
                  tittle: String,
                  line: String
            },
            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } }
      })),

      //////////////////////////////////////////////////////////////////

      //Connection
      connection: function () {
            var db = mongoose.connect('mongodb://localhost:27017/CecapPage',
                  function (err) {
                        if (err) return console.log(err);
                        console.log("MongoDB: connection to database succesful!");
                  }).connection;
      },

      endMongoConnection: function () {
            mongoose.connection.close(function () {
                  // console.log
                  process.exit(0);
            });
      }
};
// var types = {
// 	available: 0,
// 	send: 1,
// 	sold: 2
// }