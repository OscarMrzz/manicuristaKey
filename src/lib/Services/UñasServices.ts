import CategoriasNails from "../Data/Categorias.json"
import type { Uña, UñaCreate, UñaUpdate } from "../Types/Uñas"

function generarId(): string {
  return `uña-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
}

function extraerUñas(): Uña[] {
  const uñas: Uña[] = []
  
  for (const categoria of CategoriasNails as Record<string, unknown>[]) {
    const categoriaId = categoria.Ruta as string
    const contenido = categoria.contenido as Array<Record<string, unknown>> | undefined
    
    if (contenido) {
      for (const item of contenido) {
        uñas.push({
          id: `${categoriaId}-${item.Nombre}`,
          Nombre: item.Nombre as string,
          Descripcion: item.Descripcion as string,
          Imagen: item.Imagen as string,
          precio: item.precio as number,
          categoriaId
        })
      }
    }
  }
  
  return uñas
}

export async function getAll(): Promise<Uña[]> {
  return extraerUñas()
}

export async function getAllByCategoria(categoriaId: string): Promise<Uña[]> {
  const todasLasUñas = extraerUñas()
  return todasLasUñas.filter(uña => uña.categoriaId === categoriaId)
}

export async function getById(id: string): Promise<Uña | null> {
  const todasLasUñas = extraerUñas()
  return todasLasUñas.find(uña => uña.id === id) || null
}

export async function create(data: UñaCreate): Promise<Uña> {
  const nuevaUña: Uña = {
    id: generarId(),
    ...data
  }
  
  console.log("Uña creada (simulado):", nuevaUña)
  return nuevaUña
}

export async function update(id: string, data: UñaUpdate): Promise<Uña | null> {
  const existente = await getById(id)
  if (!existente) return null
  
  const actualizada: Uña = {
    ...existente,
    ...data
  }
  
  console.log("Uña actualizada (simulado):", actualizada)
  return actualizada
}

export async function remove(id: string): Promise<boolean> {
  const existente = await getById(id)
  if (!existente) return false
  
  console.log("Uña eliminada (simulado):", id)
  return true
}