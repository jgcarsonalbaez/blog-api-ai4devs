// Devuelve null cuando ningún post de la lista tiene el slug indicado.
export function buscarPorSlug<T extends { slug: string }>(posts: T[], slug: string): T | null {
  return posts.find((post) => post.slug === slug) ?? null
}
