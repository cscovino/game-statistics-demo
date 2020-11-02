export const processDate = (date) => {
    return `${new Date(date+"Z").toLocaleString([], {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })}`
};