export const labelSelector = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);

export const preDefinedTextsObject = [
  {
    id: '1',
    text: 'Buenos días, en qué puedo ayudarle?',
  },
  {
    id: '2',
    text: 'Hola, buenas tardes, en qué puedo ayudarle?',
  },
  {
    id: '3',
    text: 'Si lo desea puede consultar con un supervisor',
  },
  {
    id: '4',
    text: 'Ya le comunico con mi supervisor',
  },
  {
    id: '5',
    text: 'Muchas gracias, que tenga buen día',
  },
];

export const preDefinedMessages = [
  {
    id: 0,
    category: 'Bienvenida',
    content: {
      section: [
        {
          _id: 0,
          position: 0,
          detail: 'Mensaje de Bienvenida.',
          text: '¡Hola! Gracias por comunicarte con Admisión UDEP. Déjanos tu consulta y la responderemos lo más pronto posible. Te recordamos que nuestro horario de atención es de lunes a viernes de 8 a.m. a 7 p.m.                                     Te recordamos que nuestro horario de atención es de lunes a viernes de 8 a.m. a 7 p.m.',
        },
      ],
    },
  },
  {
    id: 1,
    category: 'Pensiones',
    content: {
      section: [
        {
          _id: 1,
          position: 0,
          detail: 'Pensión',
          text: '¡Hola! Las pensiones para todas las carreras son las mismas; éstas se determinan de acuerdo a una evaluación socioeconómica familiar. Los montos, para el año académico 2022 van desde los 954.00 soles por cuota.',
        },
      ],
    },
  },
  {
    id: 2,
    category: 'Carreras',
    content: {
      section: [
        {
          _id: 2,
          position: 1,
          detail: 'Temario',
          text: 'Puedes obtener el temario en este enlace: https://udep.edu.pe/admision-piura/wp-content/uploads/sites/75/2021/04/TEMARIO-EXAMEN-VIRTUAL.pdf',
        },
      ],
    },
  },
  {
    id: 3,
    category: 'Temario',
    content: {
      section: [
        {
          _id: 3,
          detail: 'Beca de Facultad',
          text: 'Para poder postular a beca de Facultad debes cumplir ciertos requisitos como: estar cursando el segundo año, tener un índice bíperiodo igual o mayor a 14 (no es necesario haber concluido el segundo semestre para calcularlo), no tener sanciones disciplinarias, que la situación económica familiar se haya deteriorado. Una vez ingresado tu expediente de postulación la Facultad evaluará y determinará de acuerdo a sus criterios si se te otorga el beneficio y qué tipo de beneficio obtendrías.',
        },
      ],
    },
  },
  {
    id: 4,
    category: 'Becas',
    content: {
      section: [
        {
          _id: 4,
          detail: 'Concurso de Becas y semibecas UDEP',
          text: 'Este modalidad consigue en otorgar una subvención económica a aquellos postulantes que, contando con las capacidades académicas requeridas para cursar una carrera en nuestra universidad, no cuenten con los recursos suficientes para costearla. Nuestro concurso de becas consta de dos etapas: académica y económica. En la fase académica debes aprobar el proceso de admisión (3 fases) y obtener un orden de mérito que esté dentro de las vacantes ofertadas. Si pasas esa etapa se realizará la evaluación económica, donde se corroboran los datos declarados en la ficha de inscripción y socioeconómica del postulante. De acuerdo a esta última fase se determinará el tipo de beneficio que el alumno obtendrá: Beca total, Semibeca 1 o Semibeca 2. Los beneficios no se asignan de acuerdo al orden de mérito, sino de acuerdo a la situación particular de cada familia.',
        },
        {
          _id: 5,
          detail: 'Becas Pronabec',
          text: 'Para consultas acerca de PRONABEC, y otras Becas del Estado te solicitamos por favor te contactes con el área de Proyectos de la universidad:  whatsapp 942305935 / 952513757 / 989464188 /969520477 / 976239680 o a los correos: jovita.trelles@udep.edu.pe / milagros.mendoza@udep.edu.pe / silvia.rodriguez@udep.edu.pePara consultas acerca de PRONABEC, y otras Becas del Estado te solicitamos por favor te contactes con el área de Proyectos de la universidad:  whatsapp 942305935 / 952513757 / 989464188 /969520477 / 976239680 o a los correos: jovita.trelles@udep.edu.pe / milagros.mendoza@udep.edu.pe / silvia.rodriguez@udep.edu.pe',
        },
        {
          _id: 6,
          detail: 'Trujillo',
          text: 'Contamos con una oficina en la ciudad de Trujillo. Puedes contactarte con la srta. Daniela Bellido al 959526814 o al correo: daniela.belido.g@udep.pe, para que pueda informarte de acerca de las inscripciones del examen de admisión y mensualidades. También puedes acercarte a la oficina previa cita: Av. El golf 1111 Urb. El golf.',
        },
      ],
    },
  },
  {
    id: 5,
    category: 'Oficinas',
    content: {
      section: [
        {
          _id: 7,
          detail: 'Chiclayo',
          text: 'Contamos con una oficina en la ciudad de Chiclayo. Puedes contactarte con la Sra. Maria Paz Bullard al 979547819 o al correo: mariapaz.bullard.g@udep.pe, para que pueda informarte de acerca de las inscripciones del examen de admisión y mensualidades. También puedes acercarte a la oficina previa cita: Manuel Mesones Muro 190 Urb. Patazca.',
        },
        {
          _id: 8,
          detail: 'Facultad de Comunicación',
          text: 'Por favor contacta con secretaría académica de la Facultad de Comunicación: aurelia.reyes@udep.edu.pe',
        },
      ],
    },
  },
  {
    id: 6,
    category: 'SECRETARÍAS ACADÉMICAS',
    content: {
      section: [
        {
          _id: 9,
          detail: 'Facultad de Derecho',
          text: 'Por favor contacta con secretaría académica de la Facultad de Derecho: anamaria.saavedra@udep.edu.pe',
        },
        {
          _id: 10,
          detail: 'Facultad de Empresas',
          text: 'Por favor contacta con secretaría académica de la Facultad de Ciencias Económicas y Empresariales: rosamaria.masias@udep.edu.pe',
        },
        {
          _id: 11,
          detail: 'Facultad de Ingeniería',
          text: 'Por favor contacta con secretaría académica de la Facultad de Educación: maria.calopina@udeo.edu.pe',
        },
        {
          _id: 12,
          detail: 'Facultad de Educación',
          text: 'Por favor contacta con secretaría académica de la Facultad de Humanidades: rocio.chirito@udep.edu.pe',
        },
        {
          _id: 13,
          detail: 'Facultad de Humanidades',
          text: 'Por favor contacta con secretaría académica de la Facultad de Comunicación: aurelia.reyes@udep.edu.pe',
        },
        {
          _id: 14,
          detail: 'Piura',
          text: 'Nuestro horario de atención es: De lunes a viernes de 8:30 a.m. a 6 p.m. y los sábados de 9 a.m. a 12 m.',
        },
      ],
    },
  },
  {
    id: 7,
    category: 'Horarios de atención',
    content: {
      section: [
        {
          _id: 15,
          detail: 'Idiomas',
          text: 'Hola! La información que nos consultas debes solicitarla al centro de idiomas: idiomas@udep.edu.pe',
        },
      ],
    },
  },
  {
    id: 8,
    category: 'Centros',
    content: {
      section: [
        {
          _id: 16,
          detail: 'Proceso de Admisión',
          text: 'Para la admisión durante el año 2022 la Universidad de Piura ha contemplado una propuesta alternativa de admisión, la cual es una modalidad que evalúa: 1. El desempeño académico en la educación secundaria del alumno (notas de colegio).2. Los conocimientos y aptitudes (prueba objetiva en línea). 3. La capacidad de comunicarse, cómo se desenvuelve el alumno y cómo argumenta su vocación (elaboración de un ensayo).',
        },
      ],
    },
  },
  {
    id: 9,
    category: 'Procesos de admisión',
    content: {
      section: [
        {
          _id: 17,
          detail: 'Certificación Udep',
          text: 'La Certificación Udep es un reconocimiento otorgado a los colegios, en mérito al buen desempeño académico que sus egresados hayan demostrado durante su etapa universitaria. Los alumnos que hayan pertenecido al medio superior, durante los últimos tres años de secundaria, podrán quedar exonerados del examen de virtual de conocimientos. Para más información ingresar al siguiente enlace: https://bit.ly/3G99GR3',
        },
      ],
    },
  },
  {
    id: 10,
    category: 'Vacante Ordinaria Modalidad de Admisión(Exoneradas del punto 2)',
    content: {
      section: [
        {
          _id: 18,
          detail: 'Tercio Superior',
          text: 'Los alumnos que hayan pertenecido al tercio superior, durante los últimos tres años de secundaria de colegios certificados o no, podrán quedar exonerados del examen virtual de conocimientos. Para más información ingresar al siguiente enlace: https://bit.ly/3ArMtbc',
        },
        {
          _id: 19,
          detail: 'Premio Excelencia',
          text: 'La exoneración del examen virtual de conocimientos la obtendrá el alumno que haya ocupado, de manera permanente, el primer o segundo puesto de su promoción durante los cinco años de secundaria. Para más información ingresar al siguiente enlace: https://bit.ly/3rMh6o4',
        },
        {
          _id: 20,
          detail: 'Bachillerato Internacional',
          text: 'Los alumnos que cuenten con la constancia de haber cursado el bachillerato internacional podrán quedar exonerados del examen virtual de conocimientos. Para más información ingresar al siguiente enlace: https://bit.ly/3INWu5R',
        },
        {
          _id: 21,
          detail: 'Hijo de diplomático',
          text: 'Esta modalidad de ingreso permite obtener una vacante regular a los hijos de diplomáticos peruanos o extranjeros en actividad.',
        },
        {
          _id: 22,
          detail: 'Test de Aptitud Académica',
          text: 'Examen virtual que mide los conocimientos y aptitudes académicas del postulante y posibilita su acceso a una vacante ordinaria. El límite de edad para postular es 20 años, si superas este límite por favor contactar a la oficina de admisión.  Para más información ingresar al siguiente enlace: https://bit.ly/3rL1LEb',
        },
      ],
    },
  },
  {
    id: 11,
    category: 'Vacante Ordinaria Modalidad de Admisión',
    content: {
      section: [
        {
          _id: 23,
          detail: 'Límite de Edad',
          text: 'Modalidad de ingreso a vacante regular, dirigida a postulantes que han alcanzado el límite de edad, y deseen realizar estudios de pre grado. Podrán postular las personas mayores de veinte (20) años. Por favor contactar a oficina.admisiones@udep.pe',
        },
        {
          _id: 24,
          detail: 'PAE',
          text: 'Evaluación para alumnos de 4to y 5to de secundaria que permitirá al colegio obtener un informe detallado sobre su calidad académica. Los alumnos de 5to de secundaria pueden acceder a una vacante a través de este proceso.',
        },
      ],
    },
  },
  {
    id: 12,
    category: 'Vacante Susvencionada',
    content: {
      section: [
        {
          _id: 25,
          detail: 'Traslado Externo',
          text: 'El requisito por ley para poder realizar un traslado externo es tener 72 créditos aprobados en la universidad de origen. Si cumples con este requisito debes escribir directamente a la Facultad para que puedan guiarte en el proceso.',
        },
      ],
    },
  },
  {
    id: 13,
    category: 'Otros',
    content: {
      section: [
        {
          _id: 26,
          detail: 'Costo del examen',
          text: 'El costo del examen dependerá del colegio de procedencia. Para alumnos provenientes de colegios particulares y parroquiales el examen tendrá un costo de 100.00 soles; para alumnos de colegios nacionales y postulantes que radican fuera de la región Piura, el examen tendrá un costo de 50.00 soles. Si postulas a las carreras de Educación e Historia y Gestión Cultural, el proceso de admisión no tiene costo.',
        },
        {
          _id: 27,
          detail: 'Modalidades de Admisión',
          text: 'Conoce nuestras Modalidades de Admisión en el siguiente enlace: https://www.udep.edu.pe/admision-piura/modalidades-admision/',
        },
        {
          _id: 28,
          detail: 'Examen de Admisión',
          text: '¡Hola! Nuestro próximo examen de admisión es el 8 de febrero. Las inscripciones estarán habilitadas hasta el 31 de enero a las 6:00 p.m. Todas las modalidades estarán disponibles. Puedes realizar tu inscripción en el siguiente enlace para realizar la inscripción: https://admision.udep.edu.pe/cPiura/control/',
        },
        {
          _id: 29,
          detail: 'Carreras',
          text: '¡Hola! Puedes ver nuestra oferta académica en el siguiente enlace: https://udep.edu.pe/admision-piura/',
        },
      ],
    },
  },
];
