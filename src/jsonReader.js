import GeoJSON from "./gezem_rehovot_linestrings_geojson.json"

const jsonData = GeoJSON.features
const hebrewDays = { "0": "ראשון", "1": "שני", "2": "שלישי", "3": "רביעי", "4": "חמישי", "5": "שישי", "6": "שבת" }
const hebrewDaysInverted = { "ראשון": "0", "שני": "1", "שלישי": "2", "רביעי": "3", "חמישי": "4", "שישי": "5", "שבת": "6" }

// const nextNDays = (n, weekday) => {
//     const nextGezemDay = hebrewDaysInverted[weekday];
//     const nextNDays = [];
//     for (let i = 0; i < n; i++) {
//         nextNDays.push(hebrewDays[(nextGezemDay + i) % 7]);
//     }
//     return nextNDays
// }
const sortByProperty = (data, property) => {
    return data.sort((a, b) => {
        if (a.properties[property] < b.properties[property]) {
            return -1;
        }
        if (a.properties[property] > b.properties[property]) {
            return 1;
        }
        return 0;
    });
}

const queryGezem = (n, weekday) => {
    const gezem = jsonData.filter((record) => (weekday).includes(record.properties.gezem));
    return gezem
}

const addDaysUntil = (data, weekday) => {
    return data.map((record) => {
        const diff = hebrewDaysInverted[record.properties.gezem] - hebrewDaysInverted[weekday] + 7;
        record.properties.daysUntilGezem = (diff + 7) % 7
        return record;
    });
}

export default (n, weekday) => {
    const gezemData = queryGezem(n, weekday);
    return addDaysUntil(gezemData, weekday)

};

export { addDaysUntil, sortByProperty };



