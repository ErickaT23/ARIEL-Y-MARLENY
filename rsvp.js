/**************** RSVP CONFIG ****************/
const RSVP_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwF49QYSMh9fCLeTUF9M-C5WL3qV7vc83DT4BYzBH91n1JdiN15HMkS95lX5GnuzLkn/exec";

const $ = (s) => document.querySelector(s);

function getEventId() {
  return window.config?.event?.defaultEventId || "arielymarleny2026";
}

function getRemoteGuestId(guestId) {
  return `${getEventId()}_${String(guestId || "")}`;
}

function showMsg(el, text, type = "ok") {
  if (!el) return;
  el.textContent = text;
  el.className = `rsvp-msg ${type}`;
  el.hidden = false;
  el.style.display = "block";
}

function hideMsg(el) {
  if (!el) return;
  el.style.display = "none";
  el.hidden = true;
  el.textContent = "";
}

function formatGuestName(name) {
  const words = String(name || "Nombre del invitado").trim().split(/\s+/);
  const lines = [];
  let line = "";

  words.forEach((word) => {
    if (word.length > 20) {
      if (line) lines.push(line);
      for (let index = 0; index < word.length; index += 20) {
        lines.push(word.slice(index, index + 20));
      }
      line = "";
      return;
    }

    const nextLine = line ? `${line} ${word}` : word;
    if (nextLine.length > 20) {
      lines.push(line);
      line = word;
    } else {
      line = nextLine;
    }
  });

  if (line) lines.push(line);
  return lines.join("\n") || "Nombre del invitado";
}

function setGuestNameField(field, name) {
  const formatted = formatGuestName(name);
  field.value = formatted;
  field.rows = formatted.split("\n").length;
}

async function apiCheck(id) {
  const url = `${RSVP_ENDPOINT}?guestId=${encodeURIComponent(id)}&t=${Date.now()}`;
  const r = await fetch(url, { cache: "no-store" });
  const text = await r.text();

  try {
    const j = JSON.parse(text);
    return j.alreadyConfirmed === true || j.alreadyConfirmed === "true" || j.alreadyConfirmed === 1;
  } catch {
    console.warn("apiCheck no devolvió JSON. Respuesta:", text.slice(0, 200));
    return false;
  }
}

async function apiSend(data) {
  const body = new URLSearchParams(data).toString();

  const r = await fetch(RSVP_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body,
  });

  const text = await r.text();
  try {
    return JSON.parse(text);
  } catch {
    console.warn("apiSend no devolvió JSON. Respuesta:", text.slice(0, 200));
    return { ok: false, raw: text };
  }
}

async function saveConfirmationToFirebase(invitado, respuesta, pasesSeleccionados) {
  const rsvpDB = window.RSVPDatabase;
  if (!rsvpDB?.saveConfirmation || !invitado?.id) return;

  try {
    await rsvpDB.saveConfirmation(getEventId(), {
      id: String(invitado.id),
      nombre: invitado.nombre,
      pasesAsignados: Math.max(1, Number(invitado.pases || 1)),
      respuesta: String(respuesta || "").toLowerCase(),
      cantidadConfirmada: respuesta === "SI" ? pasesSeleccionados : 0,
      fechaConfirmacion: Date.now(),
    });
  } catch (error) {
    console.warn("No se pudo guardar la confirmación en Firebase:", error);
  }
}

function clearStoredConfirmations() {
  try {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("rsvp_confirmed_")) localStorage.removeItem(key);
    });
  } catch (error) {
    console.warn("No se pudo limpiar la memoria local de RSVP:", error);
  }
}

function getGuestFromURL() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return null;

  if (window.currentGuest && String(window.currentGuest.id) === String(id)) {
    return {
      id: String(window.currentGuest.id),
      nombre: window.currentGuest.name || "Invitado",
      pases: Number(window.currentGuest.passes || 1),
    };
  }

  const nameEl = document.getElementById("guestCardName");
  const seatsEl = document.getElementById("guestCardSeats");
  const nombre = (nameEl?.textContent || "Invitado").trim() || "Invitado";
  const m = (seatsEl?.textContent || "").match(/\d+/);
  const pases = m ? parseInt(m[0], 10) : 1;

  return { id, nombre, pases };
}

function markConfirmedUI(message) {
  const form = $("#rsvp-form");
  const btn = $("#btnConfirmarRsvp");
  const msg = $("#msgRsvp");
  const responseGroup = $(".rsvp-response-group");
  const responseLabel = $(".rsvp-label");
  const guestCountWrapper = $("#guest-count-wrapper");

  if (form) form.classList.add("is-confirmed");
  document.querySelectorAll('#rsvp-form input, #rsvp-form select, #rsvp-form button').forEach((el) => {
    if (!el.hasAttribute("readonly")) el.disabled = true;
  });

  if (btn) {
    btn.style.display = "none";
    btn.classList.add("rsvp-confirmed");
  }
  if (responseGroup) responseGroup.style.display = "none";
  if (responseLabel) responseLabel.style.display = "none";
  if (guestCountWrapper) guestCountWrapper.style.display = "none";

  if (msg) {
    msg.hidden = false;
    msg.style.display = "block";
    msg.className = "rsvp-msg ok";
    msg.textContent = message || "Gracias por confirmar tu asistencia.";
  }
}

function resetConfirmUI() {
  const form = $("#rsvp-form");
  const btn = $("#btnConfirmarRsvp");
  const msg = $("#msgRsvp");

  if (form) form.classList.remove("is-confirmed");
  document.querySelectorAll('#rsvp-form input, #rsvp-form select, #rsvp-form button').forEach((el) => {
    if (!el.hasAttribute("readonly")) el.disabled = false;
  });

  if (btn) {
    btn.textContent = "Confirmar asistencia";
    btn.classList.remove("rsvp-confirmed");
  }

  hideMsg(msg);
}

document.addEventListener("DOMContentLoaded", () => {
  clearStoredConfirmations();

  const form = $("#rsvp-form");
  const inputNombre = $("#rsvp-name");
  const guestCountWrapper = $("#guest-count-wrapper");
  const guestCount = $("#guest-count");
  const btnSubmit = $("#btnConfirmarRsvp");
  const radioYes = $("#rsvp-response-yes");
  const radioNo = $("#rsvp-response-no");
  const msg = $("#msgRsvp");

  if (!form || !inputNombre || !guestCountWrapper || !guestCount || !btnSubmit || !radioYes || !radioNo || !msg) return;

  let invitado = getGuestFromURL();

  function paintGuestData() {
    invitado = getGuestFromURL();

    if (!invitado) {
      setGuestNameField(inputNombre);
      guestCount.innerHTML = '<option value="1">1 pase</option>';
      guestCount.disabled = true;
      return;
    }

    setGuestNameField(inputNombre, invitado.nombre);

    const maxPasses = Math.max(1, Number(invitado.pases || 1));
    guestCount.innerHTML = "";
    for (let count = maxPasses; count >= 1; count -= 1) {
      const option = document.createElement("option");
      option.value = String(count);
      option.textContent = `${count} ${count === 1 ? "pase" : "pases"}`;
      guestCount.appendChild(option);
    }
  }

  function toggleGuestCount() {
    const show = radioYes.checked;
    guestCountWrapper.style.display = show ? "grid" : "none";
    guestCount.disabled = !show;
    btnSubmit.style.display = radioNo.checked || (show && Boolean(guestCount.value)) ? "block" : "none";
  }

  paintGuestData();
  toggleGuestCount();
  hideMsg(msg);

  window.addEventListener("guest:updated", paintGuestData);
  radioYes.addEventListener("change", toggleGuestCount);
  radioNo.addEventListener("change", toggleGuestCount);
  guestCount.addEventListener("change", toggleGuestCount);

  (async () => {
    if (!invitado) return;
    try {
      const ya = await apiCheck(getRemoteGuestId(invitado.id));
      if (ya) {
        markConfirmedUI();
      } else {
        resetConfirmUI();
      }
    } catch (error) {
      console.warn("apiCheck inicial falló:", error);
      resetConfirmUI();
    }
  })();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    hideMsg(msg);
    invitado = getGuestFromURL();

    if (!invitado) {
      showMsg(msg, "No se encontró el invitado en la URL. Usa ?id=1.", "error");
      return;
    }

    if (!radioYes.checked && !radioNo.checked) {
      showMsg(msg, "Selecciona si asistirás o no para continuar.", "error");
      return;
    }

    const respuesta = radioYes.checked ? "SI" : "NO";
    const pasesSeleccionados = respuesta === "SI"
      ? Math.max(1, Number(guestCount.value || invitado.pases || 1))
      : 0;

    btnSubmit.disabled = true;

    try {
      const res = await apiSend({
        guestId: getRemoteGuestId(invitado.id),
        nombre: invitado.nombre,
        pases: String(pasesSeleccionados),
        respuesta,
      });

      if (res && (res.ok === true || res.success === true)) {
        await saveConfirmationToFirebase(invitado, respuesta, pasesSeleccionados);
        const okMessage = respuesta === "SI"
          ? "Gracias por confirmar su asistencia. Nos vemos en nuestra boda."
          : "Lamentamos que no puedan acompañarnos. Los extrañaremos.";
        markConfirmedUI(okMessage);
        return;
      }

      console.warn("Respuesta del endpoint:", res);
      btnSubmit.disabled = false;
      showMsg(msg, "No se pudo guardar tu respuesta. Intenta de nuevo.", "error");
    } catch (error) {
      console.error("apiSend:", error);
      btnSubmit.disabled = false;
      showMsg(msg, "Error de conexión al enviar tu respuesta.", "error");
    }
  });
});
