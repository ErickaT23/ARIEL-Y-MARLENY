const firebaseConfig = {
  apiKey: "AIzaSyAqOZQ5YFOdhL6dblHI5wIx10m6n4xt2Fg",
  authDomain: "buenosdeseos-twodesign.firebaseapp.com",
  databaseURL: "https://buenosdeseos-twodesign-default-rtdb.firebaseio.com",
  projectId: "buenosdeseos-twodesign",
  storageBucket: "buenosdeseos-twodesign.firebasestorage.app",
  messagingSenderId: "577908051871",
  appId: "1:577908051871:web:27fbd4e06b3d18da14b7aa"
};

const config = {
  event: {
    defaultEventId: "arielymarleny2026",
    databaseURL: firebaseConfig.databaseURL,
    eventIdParam: "eventId",
    dateISO: "2026-11-14T15:00:00-06:00",
    legacyFallback: {
      read: false,
      write: false,
      subscribe: false
    }
  },
  admin: {
    adminKey: "twodesign123",
    keyParam: "key",
    legacyKeyParam: "admin"
  },
  seo: {
    titulo: "Ariel & Marleny | 60 años de vida y 36 años de matrimonio",
    descripcion: "Te invitamos a celebrar los 60 años de vida y 36 años de matrimonio de Ariel de León y Marleny Rodríguez el 14 de noviembre de 2026.",
    autor: "Two Design",
    keywords: "invitación, cumpleaños, aniversario, Ariel de León, Marleny Rodríguez, 60 años, 36 años de matrimonio, San Marcos",
    ogImage: "Images/E2.png"
  },
  pareja: {
    nombres: "Ariel de León & Marleny Rodríguez",
    portadaEtiqueta: "Celebremos juntos",
    anfitrion1: "Ariel",
    anfitrion2: "Marleny",
    fecha: "14-11-2026",
    fechaVisible: "14.11.2026",
    fechaDestacada: "14 . 11 . 2026",
    cierreSubtitulo: "con gratitud y alegría"
  },
  ceremonia: {
    mensaje: "Estamos agradecidos con Dios por darnos la bendición de cumplir 60 años de vida y, a su vez, darnos la oportunidad de compartir nuestras vidas por 36 años.",
    destacado1Titulo: "60 años de vida",
    destacado1Texto: "Ariel de León y Marleny Rodríguez",
    destacado2Titulo: "36 años de matrimonio",
    destacado2Texto: "Una vida compartida con amor y gratitud"
  },
  musica: {
    titulo: "Nuestra Canción",
    archivo: "music.mp3"
  },
  evento: {
    ceremonia: {
      titulo: "Ceremonia",
      lugar: "Iglesia Católica de San Pedro Sacatepéquez, S. M.",
      hora: "15:00 h",
      direccion: "San Pedro Sacatepéquez, San Marcos",
      ubicacionUrl: "https://maps.app.goo.gl/nkYL8T5JcDtT29kS7"
    },
    recepcion: {
      titulo: "Recepción",
      lugar: "Salón de Eventos del Hotel Posada de Don José León",
      hora: "16:30 h",
      direccion: "10.ª avenida 9-62, San Marcos",
      ubicacionUrl: "https://maps.app.goo.gl/KqJHQUi8QoFSuume7"
    },
    calendario: {
      detalle: "Celebración de 60 años de vida y 36 años de matrimonio de Ariel y Marleny.",
      ubicacion: "Iglesia Católica de San Pedro Sacatepéquez, San Marcos"
    }
  },
  itinerario: {
    titulo: "Itinerario",
    items: [
      { icono: "Images/ICONO-1.png", alt: "Misa", hora: "15:00 h", texto: "Misa de acción de gracias" },
      { icono: "Images/ICONO-3.png", alt: "Recepción", hora: "16:00 h", texto: "Recepción" }
    ]
  },
  dressCode: {
    titulo: "Dress Code",
    subtitulo: "Elegante y formal",
    descripcion: "Agradecemos evitar los colores verde, dorado y gris claro.",
    coloresReservados: [
      { nombre: "Verde", color: "#006A4E" },
      { nombre: "Dorado", color: "#D4AF37" },
      { nombre: "Gris claro", color: "#D9DDE0" }
    ]
  },
  playlist: {
    titulo: "Playlist",
    descripcion: "Ayúdanos a crear la banda sonora de esta celebración. Agrega a nuestra playlist esas canciones que no pueden faltar.",
    boton: "Agregar a Spotify",
    url: "https://open.spotify.com/playlist/5sXVKK4YQO88R8TaFWTivj?si=8cb59879a2b14e2b&pt=2534a50a5e2fd11e70dd5ecce8675e89"
  },
  regalo: {
    titulo: "Un detalle especial",
    descripcion: "Tu presencia es nuestro mejor regalo. Si deseas tener un detalle con nosotros, puedes hacerlo en efectivo o por medio de una transferencia bancaria.",
    transferencia: {
      titular: "Ariel de León López",
      medio: "Banrural",
      cuenta: "4680008197",
      tipo: "Cuenta monetaria"
    }
  },
  album: {
    titulo: "Recuerdos para siempre",
    descripcion: "Comparte las fotos que captures durante nuestra celebración para que cada sonrisa y cada instante se vuelvan eternos.",
    qr: "Images/QR-ALBUM.png",
    boton: "Subir fotografías",
    url: "https://drive.google.com/drive/folders/1Cs9UMhF8iITQv_1fgMBkTuhi764EUib5?usp=drive_link"
  },
  textos: {
    mensajeInvitado: "Para nosotros será una alegría compartir contigo este momento tan especial.",
    mensajePases: "Hemos reservado {pases} lugares en su honor",
    fechaLabel: "Nuestra celebración"
  },
  deseos: {
    titulo: "Buenos deseos",
    intro: "Déjanos un mensaje especial para este día tan importante."
  },
  adultos: {
    titulo: "Solo adultos",
    descripcion: "",
    mostrar: false
  },
  rsvp: {
    titulo: "Confirmar asistencia",
    mensaje: "Para nosotros es muy importante que confirmes tu asistencia lo antes posible o que nos indiques si no podrás acompañarnos."
  },
  galeria: {
    portadaPrincipal: "Images/E2.png",
    historia: ["Images/S1.png", "Images/S2.png"],
    celebracion: ["Images/C1.png", "Images/C2.png"],
    pareja: ["Images/F1.png", "Images/F2.png"]
  },
  footer: {
    hashtag: "#ArielYMarleny",
    instagramUrl: "https://www.instagram.com/thetwodesign",
    facebookUrl: "https://www.facebook.com/thetwodesign",
    marcaTexto: "Diseño",
    marcaNombre: "Two Design",
    marcaUrl: "https://twodesign.com"
  }
};

window.config = config;
window.firebaseConfig = firebaseConfig;
