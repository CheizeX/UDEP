import { Dispatch, SetStateAction } from 'react';

export interface ConfigSectionInterface {
  setSortedRestrictions?: Dispatch<SetStateAction<boolean>>;
  sortedRestrictions?: boolean;
  numberOfRestrictions?: number;
  businessHours?: number;
}
