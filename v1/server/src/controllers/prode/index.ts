import { Request, Response } from 'express';

export const getProdes = (req: Request, res: Response) => {
    res.json([
        {
            "local": "Estudiantes",
            "visita": "Godoy Cruz",
            "fecha": "2024-06-29",
            "hora": "18:00",
            "estadio": "Estadio Jorge Luis Hirschi",
            "jornada": 1
        },
        {
            "local": "Defensa y Justicia",
            "visita": "Independiente",
            "fecha": "2024-06-29",
            "hora": "20:00",
            "estadio": "Estadio Norberto Tomaghello",
            "jornada": 1
        },
        {
            "local": "Barracas Central",
            "visita": "Huracán",
            "fecha": "2024-06-30",
            "hora": "18:00",
            "estadio": "Estadio Claudio Fabián Tapia",
            "jornada": 1
        },
        {
            "local": "Banfield",
            "visita": "Newell’s",
            "fecha": "2024-06-30",
            "hora": "20:00",
            "estadio": "Estadio Florencio Sola",
            "jornada": 1
        },
        {
            "local": "Independiente Rivadavia",
            "visita": "Unión",
            "fecha": "2024-07-01",
            "hora": "18:00",
            "estadio": "Estadio Bautista Gargantini",
            "jornada": 1
        },
        {
            "local": "Argentinos Juniors",
            "visita": "Central Córdoba",
            "fecha": "2024-06-12",
            "hora": "20:00",
            "estadio": "Estadio Diego Armando Maradona",
            "jornada": 1
        },
        {
            "local": "Deportivo Riestra",
            "visita": "River Plate",
            "fecha": "2024-06-14",
            "hora": "18:00",
            "estadio": "Estadio Guillermo Laza",
            "jornada": 1
        }
    ]
    )
};