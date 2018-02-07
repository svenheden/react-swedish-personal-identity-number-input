import { createInputFormatter } from './input-formatter';
import { formatSwedishPersonalIdentityNumber } from './formatter';

export const createSwedishPersonalIdentityNumberInput = createInputFormatter({
    formatter: formatSwedishPersonalIdentityNumber,
    maxLength: 13
});
