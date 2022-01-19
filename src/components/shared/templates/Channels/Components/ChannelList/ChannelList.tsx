import { FC } from 'react';
import { StyledChannelList } from './ChannelList.styled';
import { IPropsList } from './ChannelList.interface';
import { CardChannel } from '../CardChannel/CardChannel';

export const ChannelList: FC<IPropsList> = ({
  listChannel,
  setIsSectionWebChat,
  setSeletedComponent,
}) => {
  return (
    <StyledChannelList>
      {listChannel.facebook ? (
        <div>
          <CardChannel
            name={listChannel?.facebook.pageName}
            icon="Messenger"
            service="Messenger"
            isActive={listChannel?.facebook.isActive}
            setIsSectionWebChat={setIsSectionWebChat}
            setSeletedComponent={setSeletedComponent}
          />
        </div>
      ) : null}
      {listChannel.facebook ? (
        <div>
          <CardChannel
            name={listChannel?.facebook.pageName}
            icon="Messenger"
            service="Messenger"
            isActive={listChannel?.facebook.isActive}
            setIsSectionWebChat={setIsSectionWebChat}
            setSeletedComponent={setSeletedComponent}
          />
        </div>
      ) : null}
      {listChannel.officialWhatsApp ? (
        <div>
          <CardChannel
            name={listChannel?.officialWhatsApp.phoneNumber}
            icon="whatsapp"
            service="WhatsApp"
            isActive={listChannel?.officialWhatsApp.isActive}
            setIsSectionWebChat={setIsSectionWebChat}
            setSeletedComponent={setSeletedComponent}
          />
        </div>
      ) : null}
      {listChannel.unofficialWhatsApp ? (
        <div>
          <CardChannel
            name={listChannel?.unofficialWhatsApp.phoneNumber}
            icon="whatsapp"
            service="WhatsApp"
            isActive={listChannel?.unofficialWhatsApp.isActive}
            setIsSectionWebChat={setIsSectionWebChat}
            setSeletedComponent={setSeletedComponent}
          />
        </div>
      ) : null}
    </StyledChannelList>
  );
};
