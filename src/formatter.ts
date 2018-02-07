const hasFullYear = (value: string) => /^19|20/.test(value); // @todo update this regex in year 2100
const insertHyphen = (value: string) => value.substring(0, 8) + '-' + value.substring(8);

const prependCentury = (value: string) => {
    const currentYear = (new Date()).getFullYear() - 2000;
    const year = Number(value.substring(0, 2));
    const century = year <= currentYear ? '20' : '19';

    return century + value;
}

export const formatSwedishPersonalIdentityNumber = (value: string) => {
    value = value.replace(/\D/g, '');

    if (value.length < 6) return value;
    if (!hasFullYear(value)) value = prependCentury(value);
    if (value.length < 8) return value;

    return insertHyphen(value);
}
