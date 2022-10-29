const xlsx = require('xlsx');
const fs = require('fs');
const CRITERIA_LABEL = 'Chọn loại khách sạn'
const HOTEL_TYPE_LABEL = 'Yêu cầu đối với loại khách sạn';
const HOTEL_STAR_LABEL = 'Yêu cầu đối với hạng sao';

const workbook = xlsx.readFile('./cong-cu-tra-so.xlsx');
const SHEET_NAME = 'P2 DICH VU - Bang 1'; // P1CS
const rows = xlsx.utils.sheet_to_json(workbook.Sheets[SHEET_NAME]);

fs.writeFileSync('./p2-dich-vu.json', JSON.stringify(rows));