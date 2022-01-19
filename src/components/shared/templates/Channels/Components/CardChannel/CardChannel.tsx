import { FC, useState, useRef } from 'react';
import {
  StyledCardChannel,
  StyledPicture,
  StyledBoxWrapper,
  CheckBoxLabel,
  CheckBox,
  DropdownContainerCard,
} from './CardChannel.styled';
import { IPropsCardChannel } from './CardChannel.interface';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { Dropdown } from '../../../../atoms/Dropdown/Dropdown';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';

export const CardChannel: FC<IPropsCardChannel> = ({
  name,
  icon,
  service,
  isActive,
  setIsSectionWebChat,
  setSeletedComponent,
}) => {
  const [toggle, setToggle] = useState<boolean>(isActive);
  const inputRef = useRef(null);
  const handleClickCard = () => {
    setSeletedComponent('DeleteChannel');
    setIsSectionWebChat(true);
  };
  return (
    <StyledCardChannel>
      <div>
        <StyledPicture>
          <div />
          <SVGIcon iconFile={`/icons/${icon}.svg`} />
        </StyledPicture>
        <div>
          <span>{name}</span>
          <Text>Servicio al Cliente</Text>
        </div>
        <div>
          <div>
            <StyledBoxWrapper>
              <CheckBox type="checkbox" />
              <CheckBoxLabel
                isChecked={toggle}
                ref={inputRef}
                onClick={() => setToggle(!toggle)}
              />
            </StyledBoxWrapper>
            <Dropdown
              triggerElement={() => (
                <SVGIcon iconFile="/icons/user_options.svg" />
              )}>
              <DropdownContainerCard>
                <BadgeMolecule
                  bgColor="transparent"
                  leftIcon={() => <SVGIcon iconFile="/icons/pen.svg" />}>
                  <button type="button">
                    <Text>Editar</Text>
                  </button>
                </BadgeMolecule>
                <BadgeMolecule
                  bgColor="transparent"
                  leftIcon={() => <SVGIcon iconFile="/icons/delete.svg" />}>
                  <button type="button" onClick={handleClickCard}>
                    <Text>Eliminar </Text>
                  </button>
                </BadgeMolecule>
              </DropdownContainerCard>
            </Dropdown>
          </div>
        </div>
      </div>
      <div>
        <Text>{service}</Text>
      </div>
    </StyledCardChannel>
  );
};
