# Frontera — Prework Módulo 7 (Blog Polirepo)

**Alumno:** Jaime Carson · **Regla practicada:** «Toda función nueva lleva justo encima una línea de comentario que diga qué devuelve cuando no encuentra nada.» · **Repos:** `blog-api` y `blog-ai` · **Fecha:** 16/09/2026

## 1. Qué hice para que la regla se cumpliera

Escribí la regla en el `CLAUDE.md` de `blog-api` y, en una sesión nueva arrancada desde `blog-api`, el agente la aplicó sin que yo la mencionara en el prompt: creó `app/utils/posts.ts` con el comentario «Devuelve null cuando ningún post de la lista tiene el slug indicado» justo encima de `buscarPorSlug`.

## 2. En qué momento exacto dejó de funcionar, y cómo lo comprobé

Dejó de funcionar en el momento en que arranqué la sesión desde `blog-ai` con el mismo encargo. Lo comprobé abriendo `app/utils/posts.py`: no hay ninguna línea de comentario encima de `buscar_por_slug` (solo un docstring interno), aunque el agente reportó éxito, ejecutó pruebas y todo salió en verde. Nada avisó: la regla vive en `blog-api/CLAUDE.md` y solo se carga cuando la sesión arranca en ese directorio; en `blog-ai` no existe.
