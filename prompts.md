# Prompts

Todos los prompts lanzados para el ejercicio, en orden, tal cual se lanzaron.
Herramienta en todos: Claude Code (app de escritorio, macOS). Modelo en todos: Claude Fable 5.1, esfuerzo Alto.

Nota previa: el primer intento fue en la terminal (`claude` desde `blog-api`) y falló el login
(«Login expired» y luego «OAuth error: Invalid code»). Se continuó en la app de escritorio,
abriendo cada sesión con la carpeta del repo correspondiente como directorio de trabajo.

---

## Prompt 1

**Modelo:** Claude Fable 5.1 (esfuerzo Alto)
**Herramienta:** Claude Code (app de escritorio) · sesión arrancada en `blog-api`

```
Dime si este proyecto tiene archivo CLAUDE.md, hooks o skills. No cambies nada.
```

**Qué salió:** respondió que no hay ninguna de las tres.

## Prompt 2

**Modelo:** Claude Fable 5.1 (esfuerzo Alto)
**Herramienta:** Claude Code (app de escritorio) · misma sesión que el Prompt 1, en `blog-api`

```
Crea un archivo CLAUDE.md en la raíz del proyecto con esta única regla: "Toda función nueva lleva justo encima una línea de comentario que diga qué devuelve cuando no encuentra nada." No hagas nada más.
```

**Qué salió:** creó `CLAUDE.md` con la regla, sin tocar nada más.

## Prompt 3

**Modelo:** Claude Fable 5.1 (esfuerzo Alto)
**Herramienta:** Claude Code (app de escritorio) · sesión NUEVA arrancada en `blog-api` (para que el `CLAUDE.md` entrara por carga al inicio, no por memoria de haberlo escrito)

```
Crea el archivo app/utils/posts.ts con una función buscarPorSlug que reciba una lista de posts y un slug, y devuelva el post cuyo slug coincida. No toques ningún otro archivo.
```

**Qué salió:** funcionó a la primera. Puso el comentario justo encima de la función y dijo explícitamente que lo hacía «como pide el CLAUDE.md». En el prompt no se mencionó la regla.

## Prompt 4

**Modelo:** Claude Fable 5.1 (esfuerzo Alto)
**Herramienta:** Claude Code (app de escritorio) · sesión NUEVA arrancada en `blog-ai`

```
Crea el archivo app/utils/posts.py con una función buscar_por_slug que reciba una lista de posts y un slug, y devuelva el post cuyo slug coincida. No toques ningún otro archivo.
```

**Qué salió:** creó el archivo, lo probó con el Python del `.venv` y reportó que todos los casos pasaron. **La regla no se cumplió:** no hay comentario encima de la función (solo un docstring interno). Nada lo señaló; hubo que abrir el archivo para verlo.
