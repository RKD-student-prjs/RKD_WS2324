import * as json_data from './cleaned_data.json'
export const data = json_data.default


//merge data with duplicate "Hauptthema" and "Unterthema"
const merge_data = data.reduce((acc, cur) => {
    const existingObj = acc.find(obj => obj.Hauptthema === cur.Hauptthema && obj.Unterthemen.Unterthema === cur.Unterthemen.Unterthema);
    if (existingObj) {
      existingObj.Unterthemen.Professoren = existingObj.Unterthemen.Professoren.concat(cur.Unterthemen.Professoren);
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);

  console.log(merge_data)



//merge professoren data with the same "Hauptthema" und "Unterthema are"
function mergeObjects(data) {
    const mergedData = [];
  
    data.forEach((entry) => {
      const profsByHauptthemaAndUnterthema = {};
      const profsToPush = [];
  
      entry.Unterthemen.Professoren.forEach((prof) => {
        const { Id, Schlagworte } = prof;
        const key = `${entry.Hauptthema}${entry.Unterthemen.Unterthema}${Id}`;
  
        if (!profsByHauptthemaAndUnterthema[key]) {
          profsByHauptthemaAndUnterthema[key] = { ...prof, Schlagworte: [...Schlagworte] };
        } else {
          profsByHauptthemaAndUnterthema[key].Schlagworte = [
            ...new Set([...profsByHauptthemaAndUnterthema[key].Schlagworte, ...Schlagworte])
          ];
        }
      });
  
      Object.values(profsByHauptthemaAndUnterthema).forEach((prof) => {
        profsToPush.push(prof);
      });
  
      mergedData.push({
        Hauptthema: entry.Hauptthema,
        Unterthemen: {
          Professoren: profsToPush,
          Unterthema: entry.Unterthemen.Unterthema
        }
      });
    });
  
    return mergedData;
  }

export const _data = mergeObjects(merge_data)
  

/* const output = [];

export const _data = mergeObjects(merge_data).forEach((item) => {
  const existingItem = output.find((outputItem) => outputItem.Hauptthema === item.Hauptthema);
  if (existingItem) {
    existingItem.Unterthemen.push(item.Unterthemen);
  } else {
    output.push({
      Hauptthema: item.Hauptthema,
      Unterthemen: [item.Unterthemen]
    });
  }
}); */

  

let themengebieteData = []

let faecherData = []

let personenData = []

let schlagwoerterData = []

for (let i = 0; i < data.length; i++) {

    themengebieteData.push(data[i].Hauptthema)
    let themengebietContainer = data[i]



    let currentFach = themengebietContainer.Unterthemen

    faecherData.push(currentFach.Unterthema)

    for (let h = 0; h < currentFach.Professoren.length; h++) {
        let currentProf = currentFach.Professoren[h]
        let professorName = currentProf.Name
        personenData.push(professorName)
        for (let schlagwortIndex = 0; schlagwortIndex < currentProf.Schlagworte.length; schlagwortIndex++) {
            let schlagwort = currentProf.Schlagworte[schlagwortIndex]
            schlagwoerterData.push(schlagwort)
        }
    }

}

export const themengebieteArray = [...new Set(themengebieteData)]

export const faecherArray = [...new Set(faecherData)]

export const personenArray = [...new Set(personenData)]

export const schlagwoerterArray = [...new Set(schlagwoerterData)]
