import AcademiaData from "../Data/Academia.json"

export interface Curso {
    id: string
    nombre: string
    descripcion: string
    horas: number
    imagenes: string[]
}

export interface Alumna {
    id: string
    nombre: string
    promocion: string
    imagen: string
    trabajo: string
    descripcion: string
}

export interface Promocion {
    ano: number
    cantidad: number
    imagen: string
    descripcion: string
}

export interface Academia {
    descripcion: string
    descripcion2: string
    cursos: Curso[]
    alumnas: Alumna[]
    promociones: Promocion[]
}

export function getAcademia(): Academia {
    return AcademiaData
}

export function getCursos(): Curso[] {
    return AcademiaData.cursos
}

export function getAlumnas(): Alumna[] {
    return AcademiaData.alumnas
}

export function getPromociones(): Promocion[] {
    return AcademiaData.promociones
}

export function getAlumnaById(id: string): Alumna | undefined {
    return AcademiaData.alumnas.find(a => a.id === id)
}

export function getCursoById(id: string): Curso | undefined {
    return AcademiaData.cursos.find(c => c.id === id)
}