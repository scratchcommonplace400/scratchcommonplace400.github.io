# Nelson Orozco Cardona — Sitio personal

Portafolio con estética de dashboard financiero premium (inspirado en Stripe,
Linear, Bloomberg Terminal): glassmorphism, gradientes, microinteracciones y
animaciones al hacer scroll.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub llamado exactamente `Nel620.github.io`.
2. Sube estos archivos a la rama `main`.
3. Ve a **Settings > Pages** del repositorio.
4. En **Source**, elige **Deploy from a branch** → rama `main`, carpeta `/root`.
5. En unos minutos el sitio queda disponible en `https://nel620.github.io`.

## Vista previa local

Abre `index.html` directamente en el navegador. No necesita servidor.

## Actualizar contenido

- **Experiencia / Proyectos / Certificaciones**: edita el HTML en `index.html`,
  cada sección está delimitada con comentarios (`<!-- ============ ... -->`).
- **Colores y gradiente**: variables en la parte superior de `style.css` (`:root`),
  especialmente `--accent-a`, `--accent-b`, `--accent-c`.
- **Nivel de las barras de habilidades**: atributo `style="--w:XX%"` en cada
  `<div class="bar-fill">` dentro de la sección Habilidades.

## Estructura

```
index.html      Página principal (todas las secciones)
style.css        Sistema visual: glassmorphism, gradientes, animaciones
script.js         Scroll-reveal, nav con blur, barras animadas, menú móvil
```

## Dependencias

- [Google Fonts](https://fonts.google.com/): Inter, IBM Plex Mono (vía CDN)
- Sin frameworks, sin build tools, sin backend
