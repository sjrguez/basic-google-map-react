export const VehicleStatus= [
    "Encendido",
    "Apagado",
    "En Movimiento"
];

export const VehicleType = [
    "Camiones",
    "Carros",
    "Motores",
    "Sedán",
    "Jeepeta",
    "Camioneta",
    "Coupé/Sport",
    "Autobuses"
]
;
export const Provincias = [
    "AZUA",
    "BAHORUCO",
    "BARAHONA",
    "DAJABON",
    "DISTRITO NACIONAL",
    "DUARTE",
    "EL SEYBO",
    "ELIAS PIÑA",
    "ESPAILLAT",
    "HATO MAYOR",
    "HERMANAS MIRABAL",
    "INDEPENDENCIA",
    "LA ALTAGRACIA",
    "LA ROMANA",
    "LA VEGA",
    "MARIA TRINIDAD SANCHEZ",
    "MONSEÑOR NOUEL",
    "MONTE PLATA",
    "MONTECRISTI",
    "PEDERNALES",
    "PERAVIA",
    "PUERTO PLATA",
    "SAMANA",
    "SAN CRISTOBAL",
    "SAN JOSE DE OCOA",
    "SAN JUAN",
    "SAN PEDRO DE MACORIS",
    "SANCHEZ RAMIREZ",
    "SANTIAGO",
    "SANTIAGO RODRIGUEZ",
    "SANTO DOMINGO",
    "VALVERDE"
];

export const vehicleYear = () => {
    const years = [];
    const actualYear = new Date().getFullYear();

    for (let index = 1980; index <= actualYear; index++) {
        years.push(index);
    }
    return years.reverse(); 
} 