(async () => {
  const mount = document.getElementById("footerMount");
  if (!mount) return;

  try {
    const res = await fetch("./footer.html", { cache: "no-store" });
    if (!res.ok) throw new Error("No se pudo cargar footer.html");
    mount.innerHTML = await res.text();

    // Año automático para <span data-year></span>
    const y = mount.querySelector("[data-year]");
    if (y) y.textContent = new Date().getFullYear();
  } catch (err) {
    console.error(err);
    // Fallback visible si falla
    mount.innerHTML = `<div class="foot">© ${new Date().getFullYear()} Dorians Gym</div>`;
  }
})();
