export const data = [
    {
        themengebiet: "Sprachen",
        faecher: [
            {
                fach: "Spanisch",
                professoren: [
                    {
                        id: 8,
                        name: "Prof. Dr. Barbara Ahrens",
                        links: [
                            'https://www.th-koeln.de/informations-und-kommunikationswissenschaften/',
                            'https://www.th-koeln.de/informations-und-kommunikationswissenschaften/institut-fuer-translation-und-mehrsprachige-kommunikation_7473.php',
                            'https://www.th-koeln.de/hochschule/standorte_3914.php'
                        ],
                    },
                    {
                        id: 810,
                        name: "Prof. Dr. Heribert Härtinger",
                        links: [
                            'https://www.th-koeln.de/informations-und-kommunikationswissenschaften/',
                            'https://www.th-koeln.de/informations-und-kommunikationswissenschaften/institut-fuer-translation-und-mehrsprachige-kommunikation_7473.php',
                            'https://www.th-koeln.de/hochschule/standorte_3914.php'
                        ],
                    },
                ]
            },
            {
                fach: "Dolmetschen",
                professoren: [
                    {
                        id: 8,
                        name: "Prof. Dr. Barbara Ahrens",
                        links: [
                            'https://www.th-koeln.de/informations-und-kommunikationswissenschaften/',
                            'https://www.th-koeln.de/informations-und-kommunikationswissenschaften/institut-fuer-translation-und-mehrsprachige-kommunikation_7473.php',
                            'https://www.th-koeln.de/hochschule/standorte_3914.php'
                        ],
                    },
                ]
            },
            {
                fach: "Fachsprache",
                professoren: [
                    {
                        id: 810,
                        name: "Prof. Dr. Heribert Härtinger",
                        links: [
                            'https://www.th-koeln.de/informations-und-kommunikationswissenschaften/',
                            'https://www.th-koeln.de/informations-und-kommunikationswissenschaften/institut-fuer-translation-und-mehrsprachige-kommunikation_7473.php',
                            'https://www.th-koeln.de/hochschule/standorte_3914.php'
                        ],
                    },
                ]
            },
        ],
    },
]


let themengebieteData = []

let faecherData = []

let personenData = []

for (let i = 0; i < data.length; i++) {

    themengebieteData.push(data[i].themengebiet)
    let themengebietContainer = data[i]

    for (let o = 0; o < themengebietContainer.faecher.length; o++) {



        let currentFach = themengebietContainer.faecher[o]

        faecherData.push(currentFach.fach)

        for (let h = 0; h < currentFach.professoren.length; h++) {
            let professorName = currentFach.professoren[h].name
            personenData.push(professorName)
        }
    }
}

export const themengebieteArray = [...new Set(themengebieteData)]

export const faecherArray = [...new Set(faecherData)]

export const personenArray = [...new Set(personenData)]
