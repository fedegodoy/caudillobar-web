# Plan de Implementación: Caudillo Web

Desarrollo de una página web para el bar/restaurante "Caudillo". La idea es salir de los moldes aburridos y crear una "One Page" altamente dinámica, con microinteracciones y una vibra pop/cómic basada en los afiches compartidos en los recursos (alejándonos un poco de la rigidez del manual de marca clásico).

Además de la página principal (Home), se maquetarán internamente los diferentes menús en HTML/CSS (`/menu`, `/mediodia`, `/vinos`, `/tragos`) para garantizar que la carga sea rápida, legible y 100% responsiva, sin depender de imágenes o PDFs pesados.

## User Review Required

> [!TIP]
> **Referencias Analizadas:**
> - [Dribbble - Header Ilustrado](https://dribbble.com/shots/26920639-Restaurant-and-Food-Delivery-Website-Design-for-Fast-Food-Brand): Se tomará como referencia el estilo de la cabecera con el local ilustrado y la paleta de colores vibrantes con fuerte contraste (Naranja, Marrón, Beige) y estética cómic basada en los afiches compartidos.
> - [Paris by Emily](https://www.parisbyemily.com/rome): Nos enfocaremos en replicar el "scrollytelling" y el efecto de **parallax** donde el contenido (imágenes y textos) va apareciendo de forma dinámica a medida que se hace scroll. Replicaremos este nivel de interactividad usando Framer Motion.

> [!NOTE]
> **Propuesta de Stack Tecnológico:** Dado que querés algo con mucho dinamismo, transiciones suaves (tipo *parallax* o transiciones de pantalla completa al scrollear), te sugiero utilizar **Vite + React** junto a **Framer Motion** (una librería excelente para las animaciones y microinteracciones fluidas). ¿Estás de acuerdo con este enfoque o preferís mantenerlo en HTML/JS puro?

## Arquitectura de la Web (One Page + Menús Internos)

La estructura propuesta es una página principal dividida en "placas/secciones" que ocupen todo el alto de la pantalla visualmente (`100vh`), saltando (o transicionando suavemente) de una a la otra:

1. **Placa 1 - Hero/Home:** Menú de navegación superior. Componente principal con contraste de colores (Naranja/Marrón/Beige). Puede integrar el estilo cómic ilustrado o un video en loop de fondo de manera atractiva.
2. **Placa 2 - Sección Menús (Tarjetas):** Tarjetas interactivas con *hover effects* vibrantes que dirijan a las páginas internas (`/menu`, `/mediodia`, `/vinos`, `/tragos`).
3. **Placa 3 - Reservas y Delivery:** Botón llamativo para Delivery (redirige a Rappi) y Formulario integrado (o botón que abra un modal/link) para Reservas de Eventos. Descartamos el formulario de pre-eventos como indicaste para evitar carga de mantenimiento.
4. **Placa 4 - Reseñas de Google:** Carrusel o *Slider* dinámico simulando tarjetas deslizables para mostrar opiniones reales estilizadas.
5. **Placa 5 - Instagram Grid:** Un mosaico visualmente caótico pero armónico (con mucho pop) reflejando las últimas fotos del bar. Botón gigante y atractivo para *"Síguenos en Instagram"*.
6. **Placa 6 - Footer Split:** División de la pantalla. Mitad izquierda un mapa dinámico o imagen de ubicación. Mitad derecha un footer sólido de color contrastante con datos de contacto, logo, navegación y redes.

### Componentes / Directorios Proyectados
- `/src/pages/Home.jsx`
- `/src/pages/MenuGeneral.jsx`
- `/src/pages/MenuMediodia.jsx`
- `/src/pages/MenuVinos.jsx`
- `/src/pages/MenuTragos.jsx`
- `/src/components/` (Hero, MenuCards, ReviewsSlider, InstaGrid, Footer)

## Verification Plan

- **Dispositivos Móviles:** Probar interacciones táctiles en elementos dinámicos. Revisar que los menús en las páginas internas se lean perfectamente sin tener que hacer zoom.
- **Microinteracciones:** Validar que el scroll o "scrollytelling" fluya natural sin trabarse, similar a los sitios de referencia.
- **Performance:** Al tener una home de una sola página con imágenes y recursos gráficos pesados/videos, optimizaremos los *assets* para obtener tiempos de carga rápidos.
