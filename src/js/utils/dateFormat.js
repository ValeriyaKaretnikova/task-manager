const formatDateShort = (date) => {
    const shortOpt = { month: 'short', day:'numeric' };
    const dateObject= new Date(date);
    dateObject.setDate(dateObject.getDate() + 1);
    const dateShortFormat = dateObject.toLocaleDateString('en-Ca', shortOpt);
    return dateShortFormat;
}

const formatDateLong = (date) =>{
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateObject= new Date(date);
    dateObject.setDate(dateObject.getDate() + 1);
    const dateLongFormat = dateObject.toLocaleDateString('en-Ca', options);
    return dateLongFormat;
}

export {formatDateShort, formatDateLong}