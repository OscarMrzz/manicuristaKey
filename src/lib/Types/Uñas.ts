export interface Uña {
  id: string
  Nombre: string
  Descripcion: string
  Imagen: string
  precio: number
  categoriaId: string
}

export interface UñaCreate {
  Nombre: string
  Descripcion: string
  Imagen: string
  precio: number
  categoriaId: string
}

export interface UñaUpdate {
  Nombre?: string
  Descripcion?: string
  Imagen?: string
  precio?: number
  categoriaId?: string
}