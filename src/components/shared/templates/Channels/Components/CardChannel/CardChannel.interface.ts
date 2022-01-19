export interface IPropsCardChannel {
  name: string;
  icon: string;
  service: string;
  isActive: boolean;
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
  setSeletedComponent: React.Dispatch<React.SetStateAction<string>>;
}

export interface IContainerCard {
  isChecked: boolean;
}
