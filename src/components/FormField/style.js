import styled, { css } from 'styled-components';

export const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 13px 16px 3px;
  margin-bottom: 15px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus + span{
    transform: scale(0.7) translateY(-13px);
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
      &: span{
        transform: scale(0.7) translateY(-13px);
      }
    `;
  }
}
`;

export const FormFieldWrapper = styled.div`
position: relative;
textarea {
  min-height: 150px;
}
input[type="color"] {
  padding-left: 56px;
}
`;

export const Label = styled.label``;
Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;
