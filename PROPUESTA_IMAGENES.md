# Propuesta de Integración de Imágenes

## Análisis de las Imágenes Disponibles

### Imágenes Identificadas:
1. **code.png** (804 x 574) - Ilustración de código/programación
2. **VR.png** (1363 x 750) - Realidad virtual
3. **nyc.png** (1250 x 833) - Ciudad/NYC
4. **shangai.png** (1000 x 667) - Ciudad/Shanghai
5. **spacez.png** (1042 x 694) - Espacio/tecnología
6. **tree.png** (1667 x 1111) - Árbol/naturaleza
7. **trolebus.png** (687 x 458) - Transporte
8. **ondas.png** (1250 x 833) - Ondas/patrón
9. **ondas2.png** (1322 x 880) - Ondas/patrón alternativo
10. **boat.png** (1000 x 667) - Barco/transporte

## Propuesta de Integración

### 1. Hero Section (Sección Principal)
**Imágenes sugeridas:**
- `code.png` - Como elemento decorativo de fondo con overlay oscuro
- `spacez.png` - Fondo futurista que refuerza "Software that build the future"
- `ondas.png` o `ondas2.png` - Patrón de fondo sutil

**Implementación:** Fondo con overlay naranja-negro (duotono) y opacidad reducida

### 2. Sección de Servicios
**Imágenes sugeridas:**
- `code.png` - Para "Desarrollo de Software"
- `VR.png` - Para "Aplicaciones con IA"
- `spacez.png` - Para "Business Intelligence"
- `tree.png` - Para secciones de crecimiento/evolución

**Implementación:** Imágenes como fondos de tarjetas de servicios con filtro duotono

### 3. Sección de Tecnologías
**Imágenes sugeridas:**
- `code.png` - Fondo de la sección
- `ondas.png` - Patrón decorativo

**Implementación:** Fondo sutil con grid pattern

### 4. Secciones Decorativas
**Imágenes sugeridas:**
- `nyc.png`, `shangai.png` - Para sección "Global" o "Casos de Éxito"
- `trolebus.png`, `boat.png` - Para secciones de logística/transporte
- `tree.png` - Para secciones de crecimiento/agroindustria

### 5. Backgrounds y Texturas
**Imágenes sugeridas:**
- `ondas.png`, `ondas2.png` - Como texturas de fondo repetibles
- Todas las imágenes pueden usarse con filtro duotono naranja-negro

## Estilo Visual Recomendado

Según el diseño brutalist-tech:
- **Filtro duotono:** Naranja (#ff4606) y negro
- **Opacidad:** 0.1-0.3 para fondos, 0.5-0.7 para elementos destacados
- **Blend modes:** `multiply` o `overlay` para integración
- **Posicionamiento:** Absoluto para fondos, relativo para elementos decorativos

## Próximos Pasos

1. Copiar imágenes a `/public/`
2. Crear componente `ImageBackground` reutilizable
3. Aplicar filtros CSS para duotono
4. Integrar en secciones clave
5. Optimizar imágenes (WebP) para producción
