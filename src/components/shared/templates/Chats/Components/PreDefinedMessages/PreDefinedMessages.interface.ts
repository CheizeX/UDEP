export interface PredefinidedTextsInterface {
  showPredefinedTexts: boolean;
  setShowPredefinedTexts: React.Dispatch<React.SetStateAction<boolean>>;
  handleClickToSendPredefinidedTexts: (message: string) => void | Promise<void>;
  setIsSecionNext: React.Dispatch<React.SetStateAction<boolean>>;
  sectionNext: boolean;
  isSectionText: boolean;
  setIssSecionText: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IContainerBox {
  isText: boolean;
  showPredefinedTexts: boolean;
  setIndex: number;
}
export interface IPreDatos {
  container: IConainerDts[];
}

export type IConainerDts = {
  _id: string;
  option: string;
};
