const xlsx = require('xlsx');
const fs = require('fs');
const CRITERIA_LABEL = 'Chọn loại khách sạn'
const HOTEL_TYPE_LABEL = 'Yêu cầu đối với loại khách sạn';
const HOTEL_STAR_LABEL = 'Yêu cầu đối với hạng sao';

const workbook = xlsx.readFile('./cong-cu-tra-so.xlsx');
const rows = xlsx.utils.sheet_to_json(workbook.Sheets['P1CS']);

fs.writeFileSync('./cc.json', JSON.stringify(rows));