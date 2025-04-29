export function copy(){
  document.querySelectorAll(".img-copy").forEach((btn) => {
    btn.addEventListener("click", () => {
      const codeBlock = btn.closest(".code").querySelector(".code-block code");
      const text = codeBlock.innerText;

      navigator.clipboard.writeText(text).then(() => {
        btn.setAttribute("title", "¡Copiado!");
        btn.style.opacity = 0.5;
        setTimeout(() => {
          btn.setAttribute("title", "Copiar código");
          btn.style.opacity = 1;
        }, 2000);
      });
    });
  });
}
