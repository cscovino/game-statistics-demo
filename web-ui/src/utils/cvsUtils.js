export const downloadCSV = async (data, filename) => {
    const dataCSV = [['ID Stat', 'ID Player', 'Nickname', 'Profile Image', 'Date Stat', 'Score']];
    data.map(item => dataCSV.push([
        item.id, 
        item.player.id, 
        item.player.nickname,
        item.player.image_url,
        item.created_at,
        item.score
    ]));
    let csvContent = "data:text/csv;charset=utf-8," + dataCSV.map(e => e.join(",")).join("\n");
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${filename}.csv`);
    document.body.appendChild(link);

    link.click();
}