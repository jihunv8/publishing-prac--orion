import { useState } from 'react';
import styled from 'styled-components';

const categorys = [
  { labelContent: '전체', value: 'all' },
  { labelContent: '유튜브', value: 'youtube' },
  { labelContent: '인스타그램', value: 'instagram' },
  { labelContent: '보도자료', value: 'press-release' },
];

const CategorySelector = (): JSX.Element => {
  const [checkedBtn, setCheckedBtn] = useState('all');

  return (
    <CategorySelectorWrapper>
      <InnerWrapper>
        {categorys.map(({ labelContent, value }) => {
          return (
            <RadioButton
              labelContent={labelContent}
              value={value}
              checked={checkedBtn === value}
              setCheckedBtn={setCheckedBtn}
            />
          );
        })}
      </InnerWrapper>
    </CategorySelectorWrapper>
  );
};

export default CategorySelector;

type RadioButtonProps = {
  labelContent: string;
  value: string;
  checked: boolean;
  setCheckedBtn: React.Dispatch<string>;
};

const RadioButton = ({ labelContent, value, checked = false, setCheckedBtn }: RadioButtonProps): JSX.Element => {
  return (
    <>
      <InputRadio
        type="radio"
        id={`category-${value}`}
        name="category"
        value={value}
        checked={checked}
        onClick={() => {
          setCheckedBtn(value);
        }}
      />
      <BtnLabel htmlFor={`category-${value}`}>{labelContent}</BtnLabel>
    </>
  );
};

//Style for CategorySelector
const CategorySelectorWrapper = styled.div`
  margin-top: 40px;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

//Style for RadioButton
const BtnLabel = styled.label`
  cursor: pointer;
  padding-bottom: 6px;
  margin-left: 16px;
  margin-right: 16px;
  font-size: 2rem;
  line-height: 1.2;
`;

const InputRadio = styled.input<{ type: 'radio' }>`
  display: none;

  &:checked + ${BtnLabel} {
    color: #e3051b;
    font-weight: 700;
    border-bottom: solid 2px #e3051b;
  }
`;
