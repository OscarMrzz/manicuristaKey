import Certificados from "../Data/Certificados.json"

export interface Certificado {
    id: string
    titulo: string
    institucion: string
    fecha: string
    imagenes: string[]
    descripcion: string
}

export function getCertificados(): Certificado[] {
    return Certificados
}

export function getCertificadoById(id: string): Certificado | undefined {
    return Certificados.find(c => c.id === id)
}