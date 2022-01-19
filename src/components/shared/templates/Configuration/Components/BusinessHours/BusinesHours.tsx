import { FC, useState } from 'react';
import { ButtonMolecule, ButtonVariant } from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { ModalMolecule } from '../../../../molecules/Modal/Modal';
import { ConfigSectionInterface } from '../../ConfigurationSection/ConfigurationSection.interface';
import { Checkbox } from '../../../../atoms/Checkbox/Checkbox';
import {
  // weekdaysForBusinessTime,
  weekdaysForBusinessTimeObject,
} from '../../ConfigurationSection/ConfigurationSection.shared';
import {
  StyledSetBusinessTimeSetDayItem,
  StyledSetBusinessTimeDateAndHoursBody,
  StyledSetBusinessTimeDateAndHoursFooter,
  StyledSetBusinessTimeDateAndHoursHeader,
  StyledSetBusinessTimeDateAndHours,
  StyledBusinessHoursBodyWithoutSet,
  StyledBusinessHours,
  StyledBusinessHoursHeader,
  StyledSetBusinessTimeSetHourStartAndFinish,
  StyledSetSecondBusinessTimeSetHourStartAndFinish,
} from './BusinesHours.styled';
import { IconButtonMolecule } from '../../../../atoms/IconButton/IconButton';

export const BusinessHours: FC<ConfigSectionInterface> = ({
  businessHours,
}) => {
  const [modalBusinessTime, setModalBusinessTime] = useState(false);

  const [dayActive, setDayActive] = useState({
    Lunes: false,
    Martes: false,
    Miercoles: false,
    Jueves: false,
    Viernes: false,
    Sabado: false,
    Domingo: false,
  });
  const [secondtime, setSecondTime] = useState([]);

  const COPYbusinessHoursArray = { ...weekdaysForBusinessTimeObject };

  return (
    <>
      <StyledBusinessHours>
        <StyledBusinessHoursHeader>
          <Text>Horario de atención</Text>

          {businessHours !== 0 && (
            <button type="button">
              <SVGIcon iconFile="/icons/pen.svg" />
            </button>
          )}
        </StyledBusinessHoursHeader>
        <StyledBusinessHoursBodyWithoutSet>
          <SVGIcon iconFile="/icons/business-time-not.svg" />
          <Text color="#B2B2B2">
            No has establecido un Horario de atención.
          </Text>
        </StyledBusinessHoursBodyWithoutSet>

        {businessHours === 0 && (
          <ButtonMolecule
            text="Establecer"
            onClick={() => setModalBusinessTime(true)}
          />
        )}
      </StyledBusinessHours>

      {modalBusinessTime && (
        <ModalMolecule
          isModal={modalBusinessTime}
          setModal={setModalBusinessTime}>
          <StyledSetBusinessTimeDateAndHours>
            <StyledSetBusinessTimeDateAndHoursHeader>
              <Text>Establecer horario de atención</Text>
              <button type="button" onClick={() => setModalBusinessTime(false)}>
                <SVGIcon iconFile="/icons/close.svg" />
              </button>
            </StyledSetBusinessTimeDateAndHoursHeader>
            <StyledSetBusinessTimeDateAndHoursBody>
              {/* {weekdaysForBusinessTime.map((day) => ( */}
              {Object.keys(COPYbusinessHoursArray).map((day) => (
                <StyledSetBusinessTimeSetDayItem key={day}>
                  {/* <StyledSetBusinessTimeSetDayItem key={day.name}> */}
                  <div>
                    <Checkbox
                      checked={dayActive[day as keyof typeof dayActive]}
                      onClick={() => {
                        setDayActive({
                          ...dayActive,
                          [day as keyof typeof dayActive]:
                            !dayActive[day as keyof typeof dayActive],
                        });
                      }}
                    />
                    <Text color="#b2b2b2">{day}</Text>
                  </div>
                  <StyledSetBusinessTimeSetHourStartAndFinish>
                    <div>
                      <Text color="#2A2A2A">
                        Hora inicio <Text color="#B2B2B2">(hh:mm)</Text>
                      </Text>
                      <input type="time" pattern="[0-9]{2}:[0-9]{2}" />
                    </div>
                    <div>
                      <Text color="#2A2A2A">
                        Hora fin
                        <Text color="#B2B2B2">(hh:mm)</Text>
                      </Text>
                      <input type="time" pattern="[0-9]{2}:[0-9]{2}" />
                      <SVGIcon color="red" iconFile="/icons/times.svg" />
                    </div>
                    <IconButtonMolecule
                      Icon={() => (
                        <SVGIcon iconFile="/icons/create-tag-button.svg" />
                      )}
                      color="#fafafa"
                      bgColor="transparent"
                      onClick={() =>
                        setSecondTime({
                          ...secondtime,
                          [day as keyof typeof secondtime]: true,
                        })
                      }
                    />
                  </StyledSetBusinessTimeSetHourStartAndFinish>
                  {secondtime[day as keyof typeof secondtime] && (
                    <StyledSetSecondBusinessTimeSetHourStartAndFinish>
                      <div>
                        <Text color="#2A2A2A">
                          Hora inicio <Text color="#B2B2B2">(hh:mm)</Text>
                        </Text>
                        <input type="time" pattern="[0-9]{2}:[0-9]{2}" />
                      </div>
                      <div>
                        <Text color="#2A2A2A">
                          Hora fin <Text color="#B2B2B2">(hh:mm)</Text>
                        </Text>
                        <input type="time" pattern="[0-9]{2}:[0-9]{2}" />
                        <SVGIcon color="red" iconFile="/icons/times.svg" />
                      </div>
                      <IconButtonMolecule
                        Icon={() => <SVGIcon iconFile="/icons/delete.svg" />}
                        color="#fafafa"
                        bgColor="transparent"
                        onClick={() =>
                          setSecondTime({
                            ...secondtime,
                            [day as keyof typeof secondtime]: false,
                          })
                        }
                      />
                    </StyledSetSecondBusinessTimeSetHourStartAndFinish>
                  )}
                </StyledSetBusinessTimeSetDayItem>
              ))}
            </StyledSetBusinessTimeDateAndHoursBody>
            <StyledSetBusinessTimeDateAndHoursFooter>
              <ButtonMolecule
                text="Cancelar"
                variant={ButtonVariant.OUTLINED}
                onClick={() => setModalBusinessTime(false)}
              />
              <ButtonMolecule text="Establecer" />
            </StyledSetBusinessTimeDateAndHoursFooter>
          </StyledSetBusinessTimeDateAndHours>
        </ModalMolecule>
      )}
    </>
  );
};
