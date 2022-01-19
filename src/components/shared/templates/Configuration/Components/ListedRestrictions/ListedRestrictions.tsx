import { FC, useState } from 'react';
import {
  StyledLeftSideTimeRestrictions,
  StyledLeftSideTimeRestrictionsHeader,
  StyledLeftSideTimeRestrictionsHeaderChip,
  StyledLeftSideTimeRestrictionsBodyWithoutRestrictions,
} from './ListedRestrictions.styled';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { ButtonMolecule } from '../../../../atoms/Button/Button';
import { ConfigSectionInterface } from '../../ConfigurationSection/ConfigurationSection.interface';
import { ModalMolecule } from '../../../../molecules/Modal/Modal';
import { StyledCreateNewRestriction } from '../BusinessHours/BusinesHours.styled';

export const ListedRestrictionsLeft: FC<ConfigSectionInterface> = ({
  // setSortedRestrictions,
  sortedRestrictions,
  numberOfRestrictions,
}) => {
  const [modalNewRestriction, setModalNewRestriction] = useState(false);

  return (
    <StyledLeftSideTimeRestrictions>
      <StyledLeftSideTimeRestrictionsHeader>
        <span>
          <span>
            <Text color="#2A2A2A">Restricciones Horarias</Text>
            <StyledLeftSideTimeRestrictionsHeaderChip>
              <Text>{numberOfRestrictions}</Text>
            </StyledLeftSideTimeRestrictionsHeaderChip>
          </span>
          <div>
            <button type="button">
              <SVGIcon iconFile="/icons/sidebar_disponibilidad.svg" />
              {sortedRestrictions ? (
                <SVGIcon iconFile="/icons/upArrow.svg" />
              ) : (
                <SVGIcon iconFile="/icons/downArrow.svg" />
              )}
            </button>
            <button type="button">
              <SVGIcon iconFile="/icons/filter.svg" />
            </button>
          </div>
        </span>
        <span>
          <ButtonMolecule
            bgColor="#878787"
            type="button"
            text="Nueva restricción"
            onClick={() => setModalNewRestriction(true)}
          />
        </span>
      </StyledLeftSideTimeRestrictionsHeader>

      {numberOfRestrictions === 0 && (
        <StyledLeftSideTimeRestrictionsBodyWithoutRestrictions>
          <div>
            <SVGIcon iconFile="/icons/icon_expired_invitation.svg" />
            <Text color="#B2B2B2">
              No has creado restricciones horarias todavía.
            </Text>
          </div>
        </StyledLeftSideTimeRestrictionsBodyWithoutRestrictions>
      )}

      {modalNewRestriction && (
        <ModalMolecule
          isModal={modalNewRestriction}
          setModal={setModalNewRestriction}>
          <StyledCreateNewRestriction />
        </ModalMolecule>
      )}
    </StyledLeftSideTimeRestrictions>
  );
};
