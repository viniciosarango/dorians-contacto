console.log("app.js cargó");

// === CONFIG ===
const config = {
  whatsappNumber: "593985056250",
  whatsappText: "Hola Dorians Gym 👋 Quiero información por favor.",
  paseUrl: "https://doriansgym.com/pase-de-cortesia/",
  //sesionGratisUrl: "https://doriansgym.com/sesion-gratis/"

};

// === Helpers ===
function buildWhatsAppUrl(number, text) {
  const msg = encodeURIComponent(text);
  return `https://wa.me/${number}?text=${msg}`;
}

// === Botones ===
const btnWhatsapp = document.getElementById("btn-whatsapp");
if (btnWhatsapp) {
  btnWhatsapp.href = buildWhatsAppUrl(
    config.whatsappNumber,
    config.whatsappText
  );
}

const btnPase = document.getElementById("btn-pase");
if (btnPase) {
  btnPase.href = config.paseUrl;
}

/*
const btnSesionGratis = document.getElementById("btn-sesion-gratis");
if (btnSesionGratis) {
  btnSesionGratis.href = config.sesionGratisUrl;
}*/



// ==============================
// MENSAJES ROTATIVOS (NOTE)
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const note = document.getElementById("note");
  const noteText = document.getElementById("noteText");

  if (!note || !noteText) {
    console.warn("note o noteText no existen");
    return;
  }

  const messages = [
    "💬 ¿Primera vez en Dorians? Escríbenos y te guiamos 💪",
    "🔥 Si ya eres cliente... ¡Te regalamos 2 pases de cortesía para tus panas!",
    "📍 Barrio Los Operadores, diagonal a la ANT.",
    "✅ Todo incluido: áreas + clases grupales sin costo extra.",
    "💙 Y recuerda: ¡Una más por ella! 💪"
  ];

  let index = 0;

  function showMessage(i) {
    note.classList.add("fade-out");

    setTimeout(() => {
      noteText.textContent = messages[i];
      note.classList.remove("fade-out");
      note.classList.add("fade-in");

      setTimeout(() => {
        note.classList.remove("fade-in");
      }, 400);
    }, 250);
  }

  // Mostrar primero
  showMessage(index);

  // Rotar
  setInterval(() => {
    index = (index + 1) % messages.length;
    showMessage(index);
  }, 3500);
});
