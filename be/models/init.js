var mongoose = require('mongoose');
var db = require('./db');


var _company0 = {
  name: 'CECAP Company',
  nit: 71231901020,
  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
};
var _company = [_company0];

///////////////////////////////////////

var _offices_stc = {
  name: 'Santa Cruz',
  ubicacion: 'Av. Beni, Barrio Hamacas, Calle 9 Este Nº 70 ',
  lat: -17.752208,
  lng: -63.169071,
  phones: '3433678 - 78510744 - 76653990',
  department: 'Santa Cruz',
  company_id: _company0._id,
  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
};
var _offices_cba = {
  name: 'Cochabamba',
  ubicacion: 'Av. Beni, Barrio Hamacas, Calle 9 Este Nº 70 ',
  lat: -17.378085,
  lng: -66.156819,
  phones: '3433678 - 78510744 - 76653990',
  department: 'Cochabamba',
  company_id: _company0._id,
  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
};
var _offices_lp = {
  name: 'La Paz',
  ubicacion: 'Av. Beni, Barrio Hamacas, Calle 9 Este Nº 70 ',
  lat: -16.522738,
  lng: -68.104156,
  phones: '3433678 - 78510744 - 76653990',
  department: 'La Paz',
  company_id: _company0._id,
  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
};
var _offices = [_offices_stc, _offices_cba, _offices_lp];
//////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////

//Accounts
var _rol_admin = {
  name: 'Admin',

  _id: new mongoose.Types.ObjectId
};
var _roles = [_rol_admin];

/////////////////////////////////////////////////////////
var _user_admin = {
  name: 'a',
  active: true,
  password_hash: 'a',
  token: 'ASD@!C$$#Q@34234C$#CR$#C344354',
  rol: _rol_admin._id,

  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
};
var _users = [_user_admin];

//////////////////////////////////////////////////////////////////////////
var _facilitator_1 = {
  name: 'Paola Quintanilla',
  job: 'rrhh',
  review: 'Compartiendo experiencias durante 20 años en el rubro',
  enterprises: ['./assets/logo4.jpg', './assets/logo5.jpg', './assets/logo6.jpg'],
  descriptions: ['Consultoria a Pil 2017-1018', 'Gerente de Segutex, asegurando empresas.'],
  photo: './assets/team-4.jpg',
  background: './assets/fondo.jpg',
  social: ['fb', 'in'],

  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
};
var _facilitator_2 = {
  name: 'Alvaro Garcia',
  job: 'Seguridad',
  review: 'Compartiendo experiencias durante 20 años en el rubro',
  enterprises: ['./assets/logo1.jpg', './assets/logo2.jpg', './assets/logo3.jpg'],
  descriptions: ['Consultoria a Pil 2017-1018', 'Gerente de Reclutex, reclutando talentos.'],
  photo: './assets/team-3.jpg',
  background: './assets/fondo.jpg',
  social: ['fb', 'in'],
  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
};
var _facilitators = [_facilitator_1, _facilitator_2];

//////////////////////////////////////////////////////
var _program_seguridad = {
  photo: './assets/programa-cecap-31.jpg',
  line1: 'Programa',
  line2: 'Consultoria en',
  name: 'Seguridad Industrial',
  description: 'para industrias.',
  objective: 'dar las competencias y habilidades necesarias para cumplir los objetivos y llegar a las metas',
  benefit: [{
    photo: './assets/icon-program-60.png',
    name: 'Certificado'
  }, {
    photo: './assets/icon-program-61.png',
    name: 'Cd con material'
  }, {
    photo: './assets/icon-program-62.png',
    name: 'Asesoria'
  }, {
    photo: './assets/icon-program-63.png',
    name: 'Certificado'
  }],
  modules: [{
    name: 'Module I',
    description: "Formulación, diseño y preparación de proyec tos. metodologías de trabajo y/o procesos de la consultoria en entidades publicas ong's y fundaciones."
  }, {
    name: 'Module II',
    description: "Formulación, diseño y preparación de proyec tos. metodologías de trabajo y/o procesos de la consultoria en entidades publicas ong's y fundaciones."
  }, {
    name: 'Module III',
    description: "Formulación, diseño y preparación de proyec tos. metodologías de trabajo y/o procesos de la consultoria en entidades publicas ong's y fundaciones."
  }],

  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
}
var _program_rrhh = {
  photo: './assets/programa-cecap-32.jpg',
  name: 'recursos humanos',
  description: 'para empresas.',
  objective: 'dar las competencias y habilidades necesarias para cumplir los objetivos y llegar a las metas',
  benefit: [{
    photo: './assets/icon-program-60.png',
    name: 'Certificado'
  }, {
    photo: './assets/icon-program-61.png',
    name: 'Cd con material'
  }, {
    photo: './assets/icon-program-62.png',
    name: 'Asesoria'
  }, {
    photo: './assets/icon-program-63.png',
    name: 'Certificado'
  }],
  modules: [{
    name: 'Module I',
    description: "Formulación, diseño y preparación de proyec tos. metodologías de trabajo y/o procesos de la consultoria en entidades publicas ong's y fundaciones."
  }, {
    name: 'Module II',
    description: "Formulación, diseño y preparación de proyec tos. metodologías de trabajo y/o procesos de la consultoria en entidades publicas ong's y fundaciones."
  }, {
    name: 'Module III',
    description: "Formulación, diseño y preparación de proyec tos. metodologías de trabajo y/o procesos de la consultoria en entidades publicas ong's y fundaciones."
  }],

  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
}
var _programs = [_program_seguridad, _program_rrhh];
//////////////////////////////////////////////////////
var workshop_seguridad = {
  photo: './assets/programa-cecap-33.jpg',
  line1: 'Consultoria en',
  name: 'Trabajo en Equipo y liderazgo',
  description: 'para industrias.',
  objective: 'dar las competencias y habilidades necesarias para cumplir los objetivos y llegar a las metas',
  benefit: [{
    photo: './assets/icon-program-60.png',
    name: 'Certificado'
  }, {
    photo: './assets/icon-program-61.png',
    name: 'Cd con material'
  }, {
    photo: './assets/icon-program-62.png',
    name: 'Asesoria'
  }, {
    photo: './assets/icon-program-63.png',
    name: 'Certificado'
  }],
  content: [{
    name: 'Contenido I',
    description: "Formulación, diseño y preparación de proyec tos. metodologías de trabajo y/o procesos de la consultoria en entidades publicas ong's y fundaciones."
  }, {
    name: 'Contenido II',
    description: "Formulación, diseño y preparación de proyec tos. metodologías de trabajo y/o procesos de la consultoria en entidades publicas ong's y fundaciones."
  }, {
    name: 'Contenido III',
    description: "Formulación, diseño y preparación de proyec tos. metodologías de trabajo y/o procesos de la consultoria en entidades publicas ong's y fundaciones."
  }],

  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
}
var workshop_rrhh = {
  photo: './assets/programa-cecap-34.jpg',
  name: 'Sueldos y salarios',
  description: 'para empresas.',
  objective: 'dar las competencias y habilidades necesarias para cumplir los objetivos y llegar a las metas',
  benefit: [{
    photo: './assets/icon-program-60.png',
    name: 'Certificado'
  }, {
    photo: './assets/icon-program-61.png',
    name: 'Cd con material'
  }, {
    photo: './assets/icon-program-62.png',
    name: 'Asesoria'
  }, {
    photo: './assets/icon-program-63.png',
    name: 'Certificado'
  }],
  content: [{
    name: 'Contenido I',
    description: "Formulación, diseño y preparación de proyec tos. metodologías de trabajo y/o procesos de la consultoria en entidades publicas ong's y fundaciones."
  }, {
    name: 'Contenido II',
    description: "Formulación, diseño y preparación de proyec tos. metodologías de trabajo y/o procesos de la consultoria en entidades publicas ong's y fundaciones."
  }, {
    name: 'Contenido III',
    description: "Formulación, diseño y preparación de proyec tos. metodologías de trabajo y/o procesos de la consultoria en entidades publicas ong's y fundaciones."
  }],

  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
}
var _workshops = [workshop_seguridad, workshop_rrhh];
////////////////////////////////////////////


var _consult_seguridad = {
  photo: './assets/programa-cecap-35.jpg',
  name: 'seguridad industrial',
  description: 'para industrias.',
  objective: 'dar las competencias y habilidades necesarias para cumplir los objetivos y llegar a las metas',
  scopes: [{
    name: 'Elaboración e Implementación de Sistemas de Seguridad y salud en el trabajo (OHSAS 18001).'
  }, {
    name: 'Gestión de salud ocupacional.'
  }, {
    name: 'Diagnostico de línea de base y Concientizaciones  de la importancia de la seguridad industrial.'
  }, {
    name: 'Elaboración de Planes de Emergencia y Contingencia.'
  }, {
    name: 'Realización de simulacros y Capacitación en prevención de incendios uso  de Extintores, primeros auxilios.'
  }],

  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
}
var _consult_rrhh = {
  photo: './assets/programa-cecap-36.jpg',
  name: 'recursos humanos',
  description: 'para empresas.',
  objective: 'dar las competencias y habilidades necesarias para cumplir los objetivos y llegar a las metas',
  scopes: [{
    name: 'Certificado'
  }, {
    name: 'Cd con material'
  }, {
    name: 'Asesoria'
  }, {
    name: 'Certificado'
  }],

  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
}
var _consultancies = [_consult_seguridad, _consult_rrhh];

/////////////////////////////////////////////////////////7
var _person_1 = {
  first_name: 'Jose',
  last_name: 'Gallardo',
  cellphone: 76543218,
  email: 'gallardo@gmail.com',

  interes: [{
    program_id: _program_seguridad._id,
    state: 0
  }],
  city: 'Santa Cruz',

  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
};
var _person_2 = {
  first_name: 'laura',
  last_name: 'estrada',
  cellphone: 79452311,
  email: 'laura@laura.com',

  interes: [{
    program_id: _program_seguridad._id,
    state: 0
  }],
  city: 'Santa Cruz',

  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
};
var _person_3 = {
  first_name: 'juan',
  last_name: 'perez',
  cellphone: 60121234,
  email: 'juan@juan.com',
  interes: [{
    program_id: _program_seguridad._id,
    state: 0
  }],
  city: 'Santa Cruz',

  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
}
var _persons = [_person_1, _person_2, _person_3];
////////////////////////////////////////////
var _event_seg = {
  photo: './assets/test.jpg',
  date_start: '2018-07-27',
  name: 'seguridad industrial',
  facilitators: [_facilitator_1, _facilitator_2],
  description: 'solo para ejecutivos en area petrolera, salud y construccion',
  program_id: _program_seguridad._id,

  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
};
var _event_rrhh = {
  photo: './assets/test.jpg',
  date_start: '2018-07-27',
  name: 'Recursos Humanos',
  facilitators: [_facilitator_1, _facilitator_2],
  description: 'solo para ejecutivos en area de Gerencia y Gestion',
  program_id: _program_rrhh._id,

  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
};

var _events = [_event_seg, _event_rrhh];

////////////////////////////////////////////////////////////////////////////////

var _page = {
  home: {
    inicio: {
      photo: './assets/fondo.jpg',
      line1: 'Negocios y',
      line2: 'Consultorias',
      line3: 'Lideres en Consultoria'
    },
    services: {
      tittle: 'Nuestros Servicios',
      services: [{
        photo: './assets/serv1.png',
        tittle: 'Programas',
        number: 3,
        description: 'Contamos con un equipo de consultores expertos en las diferentes esferas de la consultoría.'
      }, {
        photo: './assets/serv3.png',
        tittle: 'Talleres',
        number: 4,
        description: 'Contamos con un equipo de consultores expertos en las diferentes esferas de la consultoría.'
      }, {
        photo: './assets/serv2.png',
        tittle: 'Consultorias',
        number: 5,
        description: 'Contamos con un equipo de consultores expertos en las diferentes esferas de la consultoría.'
      }, {
        photo: './assets/serv4.png',
        tittle: 'De Maximo Interes',
        number: 6,
        description: 'Contamos con un equipo de consultores expertos en las diferentes esferas de la consultoría.'
      }]
    },
    our: {
      photo: './assets/cecap-1.jpg',
      line1: 'Lo Nuestro',
      line2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ab',
      list: [{
        photo: './assets/dif1.png',
        tittle: 'Nuestras Relaciones',
        description: 'Contamos con el único centro de Entrenamiento de Consultores y contamos con el aval de prestigiosas Instituciones, universidades, centros de investigación a nivel nacional y del exterior; Como la UNAH de Cuba, ICA-CUBA, Centro de Estudios Para el Perfeccionamiento de la Educación Superior (CEPES), contando para esto con convenios para la Realización de Intercambio de Docentes y Alumnos, Coordinación de Proyectos, Seminarios Internacionales, Diplomados, Maestrías y Doctorados, Asesorías, Consultorías y Publicaciones, las cuales conjuntamente con CECAP, van velando por la calidad de la formación.'
      }, {
        photo: './assets/dif2.png',
        tittle: 'Sede en Bolivia',
        description: 'Estamos en las ciudades mas importantes de Bolivia, nuestra oficina central se encuentra en Santa Cruz de la Sierra, la cual cuenta con oficinas equipadas con la bibliografía y el material necesario que nuestros eventos demanden, un auditorio para eventos IN-HOUSE, garantizando a los participantes el desarrollo de programas orientados a una formación empresarial práctica, donde se combinan las demandas reales de las Empresas con los contenidos académicos.'
      }, {
        photo: './assets/dif3.png',
        tittle: 'Residencia de Consultores',
        description: 'Contamos con una residencia de consultores, la cual esta disponible para todos nuestros consultores de todo el país y el mundo. '
      }]
    },
    events: {
      photo: './assets/cecap-2.jpg',
      line1: 'Entrenamiento de Consultores',
      line2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ab'
    },
    team: {
      tittle: 'Nuestro Equipo',
      member: [{
        photo: './assets/team-1.jpg',
        charge: 'Gerente',
        name: 'MS',
        social: ['fb', 'in']
      }, {
        photo: './assets/team-2.jpg',
        charge: 'Gerente',
        name: 'MS',
        social: ['fb', 'in']
      }, {
        photo: './assets/team-3.jpg',
        charge: 'Gerente',
        name: 'MS',
        social: ['fb', 'in']
      }, {
        photo: './assets/team-4.jpg',
        charge: 'Gerente',
        name: 'MS',
        social: ['fb', 'in']
      }]
    },
    galery: {
      tittle: 'Galeria de Fotos',
      photos: [{
        photo: './assets/galery1.jpg',
        description: 'test'
      }, {
        photo: './assets/galery2.jpg',
        description: 'test'
      }, {
        photo: './assets/galery3.jpg',
        description: 'test'
      }, {
        photo: './assets/galery4.jpg',
        description: 'test'
      }]
    },
    clients: {
      tittle: 'Alugunos de Nuestros Clientes',
      line: 'Nuestros Clientes nos respaldan de la calidad del trabajo que realizamos',
      list: [{
        photo: './assets/logo1.jpg'
      }, {
        photo: './assets/logo2.jpg'
      }, {
        photo: './assets/logo3.jpg'
      }, {
        photo: './assets/logo4.jpg'
      }, {
        photo: './assets/logo5.jpg'
      }, {
        photo: './assets/logo6.jpg'
      }],
    }
  },
  somos: {
    inicio: {
      photo: './assets/somos.jpg',
      line: 'Acerca de Nosotros'
    },
    version: {
      tittle: 'Dando nuestra mejor version',
      mision: {
        photo: './assets/somos1.png',
        name: 'Mision',
        description: 'Líderes e innovadores, emprendedores y facilitadores de nuevas tecnologías competitivas, para el logro de la calidad y excelencia en consultoría '
      },
      vision: {
        photo: './assets/somos2.png',
        name: 'Vision',
        description: 'Líderes e innovadores, emprendedores y facilitadores de nuevas tecnologías competitivas, para el logro de la calidad y excelencia en consultoría '
      },
      valores: {
        photo: './assets/somos3.png',
        name: 'Valores',
        description: 'Líderes e innovadores, emprendedores y facilitadores de nuevas tecnologías competitivas, para el logro de la calidad y excelencia en consultoría '
      }
    }
  },
  interes: {
    inicio: {
      photo: './assets/interes.jpg',
      line: 'De Maximo Interes'
    },
    list: [{
      photo: './assets/interes1.jpg',
      tittle: 'Simposios y Congresos Nacionales e Internacionales',
      description: 'descripcion',
      block: 'testeando',
      block2: {
        tittle: 'Titulo de Prueba',
        photos: [{ photo: './assets/b21.jpg' }, { photo: './assets/b22.jpg' }]
      },
      block3: {
        tittle: 'Titulo de Prueba',
        photos: [{ photo: './assets/b31.jpg' }, { photo: './assets/b32.jpg' }]
      },
      _id: new mongoose.Types.ObjectId,
    }, {
      photo: './assets/interes2.jpg',
      tittle: 'Club de Jovenes Emprendedores',
      description: 'descripcion',
      block: 'CECAP Consulting, como Programa de Responsabilidad Compartida; apoya en la formación de Jóvenes Empresarios mediante el Club de Jóvenes Emprendedores mediante una enseñanza teórica, práctica logrando emprender ideas para formar su primera empresa',
      block2: {
        tittle: 'Titulo de Prueba',
        photos: [{ photo: './assets/b121.jpg' }, { photo: './assets/b122.jpg' }]
      },
      block3: {
        tittle: 'Titulo de Prueba',
        photos: [{ photo: './assets/b131.jpg' }, { photo: './assets/b132.jpg' }]
      },
      _id: new mongoose.Types.ObjectId,
    }, {
      photo: './assets/interes3.jpg',
      tittle: 'Programa de Responsabilidad Social Compartida (Becas)',
      description: 'descripcion',
      block: 'testeando',
      block2: {
        tittle: 'Titulo de Prueba',
        photos: [{ photo: './assets/b221.jpg' }, { photo: './assets/b222.jpg' }]
      },
      block3: {
        tittle: 'Titulo de Prueba',
        photos: [{ photo: './assets/b231.jpg' }, { photo: './assets/b232.jpg' }]
      },
      _id: new mongoose.Types.ObjectId,
    }]
  },
  // list_interes: [{
  //   photo: './assets/test.jpg',
  //   tittle: 'Simposios y Congresos Nacionales e Internacionales',
  //   description: 'descripcion',
  //   
  // }],
  program: {
    tittle: 'Programas',
    line: 'Contamos con un equipo de Consultores Expertos en las diferentes esferas de consultoria'
  },
  taller: {
    tittle: 'Talleres',
    line: 'Contamos con un equipo de Consultores Expertos en las diferentes esferas de consultoria'
  },
  consultoria: {
    tittle: 'Consultorias',
    line: 'Contamos con un equipo de Consultores Expertos en las diferentes esferas de consultoria'
  },

  _id: new mongoose.Types.ObjectId,
  record_date: new Date()
}
var _pages = [_page];

////////////////////////////////////////////////////////////////////////////////

function saveData(collection, schema) {
  for (var i = 0; i < collection.length; i++) {
    collection[i].record_date = new Date();
  }

  collection.forEach(function (data) { (new schema(data)).save(); });

  schema.find(function (err, data) {
    if (err) return console.error(err);
    console.log(data);
  });
}

function clearCollections(schema) {
  schema.collection.drop();
}


module.exports = {
  initializer: function () {
    saveData(_roles, db.roles);
    saveData(_users, db.users);
    saveData(_company, db.company);
    saveData(_programs, db.programs);
    saveData(_facilitators, db.facilitators);
    saveData(_offices, db.offices);
    saveData(_events, db.events);
    saveData(_persons, db.persons);
    saveData(_consultancies, db.consultancies);
    saveData(_workshops, db.workshops);
    saveData(_pages, db.pages);
  },

  clearCollections: function () {
    clearCollections(db.roles);
    clearCollections(db.users);
    clearCollections(db.programs);
    clearCollections(db.events);
    clearCollections(db.persons);
    clearCollections(db.offices);
    clearCollections(db.company);
    clearCollections(db.facilitators);
    clearCollections(db.pages);
    clearCollections(db.consultancies);
    clearCollections(db.workshops);
  }
};