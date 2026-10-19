// ===================== LOADS.JS =====================
// 1) Lista de invitados
const guests = [
  { id: "1", name: "Dr. Frank Helmut Bode Fuentes y Sra.", passes: 2 },
  { id: "2", name: "Lic. Henry Gonzalez y Sra.", passes: 2 },
  { id: "3", name: "Lcda. Mirna Rafael", passes: 1 },
  { id: "4", name: "Lic. Daniel de León", passes: 1 },
  { id: "5", name: "Lic. Edy Roblero y Sra.", passes: 2 },
  { id: "6", name: "Dr. Elfego Castañon y Sra.", passes: 2 },
  { id: "7", name: "Lic. Douglas Roblero", passes: 1 },
  { id: "8", name: "Lic. Ever Roblero", passes: 1 },
  { id: "9", name: "Lic. Ebert Fuentes", passes: 1 },
  { id: "10", name: "Licda. Ingrid Escobar", passes: 1 },
  { id: "11", name: "Lic. Estuardo Scot", passes: 1 },
  { id: "12", name: "Lic. Gilmer Matias", passes: 1 },
  { id: "13", name: "Ing. Duvalier Castañon y Sra.", passes: 2 },
  { id: "14", name: "Ing. Armando Mazariegos y Sra.", passes: 2 },
  { id: "15", name: "Sr. Guadalberto Guzmán y Sra.", passes: 2 },
  { id: "16", name: "Sra. Claudia Fuentes e Hijas", passes: 3 },
  { id: "17", name: "Sra. Cristina Miranda", passes: 1 },
  { id: "18", name: "E.P. Leonardo Pérez", passes: 1 },
  { id: "19", name: "Licda. Brenda Navarro", passes: 2 },
  { id: "20", name: "Lic. Julio Orozco y Sra.", passes: 2 },
  { id: "21", name: "Sr. Juan Godínez y Sra.", passes: 2 },
  { id: "22", name: "Lic. José Munguía y Sra.", passes: 2 },
  { id: "23", name: "Srita. Ana Laura López", passes: 2 },
  { id: "24", name: "Prof. Daniel Chilel y Sra.", passes: 2 },
  { id: "25", name: "Lic. Klussman Sanchez y Sra.", passes: 2 },
  { id: "26", name: "Lic. Hugo López y Sra.", passes: 2 },
  { id: "27", name: "Lic. Luis Emilio Morales", passes: 1 },
  { id: "28", name: "Lcda. Veronica Velásquez", passes: 1 },
  { id: "29", name: "Srita. Bianca Miranda", passes: 1 },
  { id: "30", name: "Sr. Miguel Fuentes y Sra.", passes: 2 },
  { id: "31", name: "Lic. Angel Mendez y Sra.", passes: 2 },
  { id: "32", name: "Lcda. Fabiola López", passes: 1 },
  { id: "33", name: "Lcda. Olga Fuentes Laparra", passes: 2 },
  { id: "34", name: "Prof. Horacio Ramos y Sra.", passes: 2 },
  { id: "35", name: "Ing. Rony Chilel y Sra.", passes: 2 },
  { id: "36", name: "Prof. Alejandro Mazariegos y Sra.", passes: 2 },
  { id: "37", name: "Lcda. Yadira Fuentes y Esposo", passes: 2 },
  { id: "38", name: "Arq. Melvin Reyes", passes: 1 },
  { id: "39", name: "Sr. Wilfrido Maldonado y Sra.", passes: 2 },
  { id: "40", name: "Sr. Heberto Barrios y Sra.", passes: 2 },
  { id: "41", name: "Sr. Enrique Barrios y Sra", passes: 2 },
  { id: "42", name: "Sr. Saul Gonzalez y Sra.", passes: 2 },
  { id: "43", name: "Lic. Cesar Maldonado y Sra.", passes: 2 },
  { id: "44", name: "Lic. Jamie López y Sra.", passes: 2 },
  { id: "45", name: "Lcda. Yesenia Bautista", passes: 1 },
  { id: "46", name: "Lcda. Silvia Temaj", passes: 1 },
  { id: "47", name: "Lic. Edgar Ovil Ixcot y Fam.", passes: 3 },
  { id: "48", name: "Sr. Edy Solorzano y Sra.", passes: 2 },
  { id: "49", name: "Srita. Vivian Gálvez", passes: 2 },
  { id: "50", name: "Ing. Mario López", passes: 2 },
  { id: "51", name: "Sr. Luis Rivera y Sra.", passes: 2 },
  { id: "52", name: "Lcda. Elena Barrios", passes: 1 },
  { id: "53", name: "Lic. Omero de la Cruz y Sra.", passes: 2 },
  { id: "54", name: "Sr. Leonardo Orózco y Sra.", passes: 2 },
  { id: "55", name: "Joven Rudy Juárez", passes: 1 },
  { id: "56", name: "Sr. Oscar Velásquez y Sra.", passes: 2 },
  { id: "57", name: "Sr. Adolfo de León y Sra.", passes: 2 },
  { id: "58", name: "Sr. René de León y Sra.", passes: 2 },
  { id: "59", name: "Sra. Nuvia de León", passes: 1 },
  { id: "60", name: "Sr. Estuardo Méndez y Fam.", passes: 4 },
  { id: "61", name: "Sr. José Orozco y Fam.", passes: 2 },
  { id: "62", name: "Sr. Erick de León y Fam.", passes: 4 },
  { id: "63", name: "Sr. Kenny Orozco y Fam", passes: 3 },
  { id: "64", name: "Sr. Bonny de León y fam.", passes: 6 },
  { id: "65", name: "Sr. Ronny de León y Fam.", passes: 4 },
  { id: "66", name: "Sra. Patricia de León y fam.", passes: 3 },
  { id: "67", name: "Sr. Gerlin López y Fam.", passes: 3 },
  { id: "68", name: "Sr. Jose Luis López y Fam.", passes: 3 },
  { id: "69", name: "Lic. Yichardi López", passes: 1 },
  { id: "70", name: "Joven Franz López", passes: 2 },
  { id: "71", name: "Sr. Antonio Monzón y Sra.", passes: 2 },
  { id: "72", name: "Sr. Weimer Monzón y Fam.", passes: 2 },
  { id: "73", name: "Sr. Nicolas Sapalú y Fam.", passes: 4 },
  { id: "74", name: "Sra. Sandra de León", passes: 1 },
  { id: "75", name: "Sra. Catalina de León", passes: 1 },
  { id: "76", name: "Hector de León y Sra", passes: 2 },
  { id: "77", name: "Sr. Baudilio Orozco", passes: 1 },
  { id: "78", name: "Sra. Susana López", passes: 1 },
  { id: "79", name: "Sr. Donald Velásquez y Fam.", passes: 2 },
  { id: "80", name: "Sra. Albana Velásquez y Fam.", passes: 2 },
  { id: "81", name: "Sr. Luis Velásquez", passes: 1 },
  { id: "82", name: "Sra. Yesenia Velásquez", passes: 1 },
  { id: "83", name: "Sr. Carlos Velásquez", passes: 1 },
  { id: "84", name: "Srita Yuri Velásquez", passes: 1 },
  { id: "85", name: "Arq. José Pablo Navarro y Sra.", passes: 2 },
  { id: "86", name: "Srita. Rubí Velásquez", passes: 1 },
  { id: "87", name: "Sr. Egil Velásquez y Fam.", passes: 2 },
  { id: "88", name: "Sr. Marco Aurelio Velásquez y Fam.", passes: 2 },
  { id: "89", name: "Emilio Bamaca y Sra.", passes: 2 },
  { id: "90", name: "Sra. Olga Solórzano", passes: 1 },
  { id: "91", name: "Profa. Nimia Rodríguez", passes: 1 },
  { id: "92", name: "Sr. Anibal Rodríguez y Fam.", passes: 2 },
  { id: "93", name: "Sr. Vinicio Rodríguez y Fam.", passes: 3 },
  { id: "94", name: "Sr. Antonio Rodríguez", passes: 1 },
  { id: "95", name: "Sr. Hurian Rodríguez y Fam.", passes: 2 },
  { id: "96", name: "Sra. Alfa Rodríguez e Hija", passes: 2 },
  { id: "97", name: "Lic. Franz Ascoli", passes: 1 },
  { id: "98", name: "Ing. Erick Fernando Romano", passes: 1 },
  { id: "99", name: "Sra. Tulia Solórzano", passes: 2 },
  { id: "100", name: "Profa. Ingrid Cifuentes", passes: 1 },
  { id: "101", name: "Profa. Karla Cifuentes", passes: 1 },
  { id: "102", name: "Profa. Edna Cifuentes", passes: 1 },
  { id: "103", name: "Sr. Geovani Cifuentes y Sra.", passes: 2 },
  { id: "104", name: "Sr. Marco Tulio Fuentes y Fam.", passes: 3 },
  { id: "105", name: "Sr. Kenedy Fuentes y Fam.", passes: 3 },
  { id: "106", name: "Sra. Amadilia Anleu", passes: 1 },
  { id: "107", name: "Lcda Esther Bravo", passes: 1 },
  { id: "108", name: "Lic. Alexander Rivera y Sra.", passes: 2 },
  { id: "109", name: "Sr. Luis Bautista y Fam", passes: 3 },
  { id: "110", name: "Fernando Fuentes y Sra.", passes: 12 },
  { id: "111", name: "Sr. Abimael Monzón y Sra.", passes: 2 },
  { id: "112", name: "Sra. Gladys Bautista", passes: 1 },
  { id: "113", name: "Sra. Milca Castañon", passes: 1 },
];

window.LocalGuestSeeds = {
  ...(window.LocalGuestSeeds || {}),
  arielymarleny2026: guests.reduce((acc, guest) => {
    acc[String(guest.id)] = {
      id: String(guest.id),
      nombre: guest.name,
      pases: Number(guest.passes || 1),
      activo: true,
    };
    return acc;
  }, {}),
};

window.seedEventGuestsToFirebase = async function seedEventGuestsToFirebase(explicitEventId) {
  const eventId = explicitEventId || window.config?.event?.defaultEventId || "arielymarleny2026";
  const rsvpDB = window.RSVPDatabase;

  if (!rsvpDB?.migrateLocalGuestsToFirebase) {
    console.warn("RSVPDatabase no está disponible. Revisa que database.js esté cargado.");
    return { ok: false, guests: 0 };
  }

  await rsvpDB.seedEventConfigToFirebase?.(eventId, { force: true });
  const result = await rsvpDB.migrateLocalGuestsToFirebase(eventId, { force: true });
  console.log(`Invitados creados en Firebase: ${result.total || guests.length}`);
  return { ok: true, guests: result.total || guests.length };
};

// Helper: leer parámetros ?id=1
function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

document.addEventListener("DOMContentLoaded", () => {
  const guestId = getQueryParam("id");

  // Si no hay id, no marcamos error: solo no hay invitado
  if (!guestId) {
    window.currentGuest = null;
    return;
  }

  const guest = guests.find((g) => String(g.id) === String(guestId));

  if (guest) {
    window.currentGuest = guest;

    // Si tienes estos elementos en alguna parte, los llena (opcional)
    const guestNameEl = document.getElementById("guest-name");
    const passesEl = document.getElementById("passes");

    if (guestNameEl) guestNameEl.textContent = guest.name;
    if (passesEl) {
      const p = Number(guest.passes || 1);
      passesEl.textContent = `${p} ${p === 1 ? "pase" : "pases"}`;
    }
  } else {
    window.currentGuest = null;

    const guestNameEl = document.getElementById("guest-name");
    if (guestNameEl) guestNameEl.textContent = "Invitado no encontrado";
  }
});
