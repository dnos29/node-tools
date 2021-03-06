const getNowObj = () => {
    const now = new Date();
    const monthStr = now.getMonth() + 1 + '';
    const dateStr = now.getDate() + '';
    return {
        year: now.getFullYear(),
        month: monthStr.padStart(2,0),
        date: dateStr.padStart(2, 0),
    }
}
exports.getNowObj = getNowObj;