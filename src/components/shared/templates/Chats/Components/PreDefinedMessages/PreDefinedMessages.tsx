import { FC, useState } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { preDefinedMessages } from '../../ChatsSection/ChatsSection.shared';
import { PredefinidedTextsInterface } from './PreDefinedMessages.interface';
import {
  StyledPreDefinedMessages,
  StyledBoxCategory,
  StyledButtonOption,
  StyledCardText,
  TooltipTextMessage,
  TooltipBoxMessage,
  StyledPredefinidedWrapper,
} from './PreDefinedMessages.styled';

export const PreDefinedMessages: FC<PredefinidedTextsInterface> = ({
  showPredefinedTexts,
  sectionNext,
  isSectionText,
  setShowPredefinedTexts,
  handleClickToSendPredefinidedTexts,
  setIsSecionNext,
  setIssSecionText,
}) => {
  const [categorySelector, setCategorySelector] = useState<number>(0);
  const [detailSelector, setDetailSelector] = useState<number>(-1);

  const handleClickCategory = (position: number) => {
    setCategorySelector(position);
    setIsSecionNext(true);
    setIssSecionText(false);
  };
  const handleClickOption = (i: number) => {
    setDetailSelector(i);
    setIssSecionText(true);
  };

  return (
    <StyledPredefinidedWrapper>
      <StyledPreDefinedMessages
        setShowPredefinedTexts={setShowPredefinedTexts}
        showPredefinedTexts={showPredefinedTexts}>
        {preDefinedMessages.map((text, index) => (
          <div key={text.id}>
            <button
              key={index.toString()}
              type="button"
              onClick={() => handleClickCategory(index)}>
              <Text color="gray" size="12px" key={text.category}>
                {text.category}
              </Text>
              <SVGIcon iconFile="/icons/collapse-right.svg" />
            </button>
            <div>
              {text.id === categorySelector && sectionNext === true ? (
                <StyledBoxCategory
                  isText={isSectionText}
                  setIndex={Number(text.id)}
                  showPredefinedTexts={showPredefinedTexts}>
                  <div>
                    {text.content.section.map((e, i) => (
                      <div key={i.toString()}>
                        <StyledButtonOption
                          type="button"
                          onClick={() => handleClickOption(e._id)}>
                          <Text color="gray" size="12px">
                            {e.detail}
                          </Text>
                          <SVGIcon iconFile="/icons/collapse-right.svg" />
                        </StyledButtonOption>
                      </div>
                    ))}
                  </div>
                </StyledBoxCategory>
              ) : null}
            </div>
            <StyledCardText
              isText={false}
              showPredefinedTexts={showPredefinedTexts}
              setIndex={Number(text.id)}>
              {isSectionText === true
                ? text.content.section.map((item) =>
                    item._id === detailSelector ? (
                      <div>
                        <div>
                          <button
                            type="button"
                            onClick={() => setIssSecionText(false)}>
                            <SVGIcon iconFile="/icons/collapse-left.svg" />
                          </button>
                          <TooltipTextMessage>
                            <button
                              type="button"
                              onClick={() =>
                                handleClickToSendPredefinidedTexts(item.text)
                              }>
                              <Text color="gray" size="12px">
                                {item.text}
                              </Text>
                            </button>
                          </TooltipTextMessage>
                          <TooltipBoxMessage>
                            <Text>Enviar Mensaje</Text>
                          </TooltipBoxMessage>
                        </div>
                      </div>
                    ) : null,
                  )
                : null}
            </StyledCardText>
          </div>
        ))}
      </StyledPreDefinedMessages>
    </StyledPredefinidedWrapper>
  );
};
