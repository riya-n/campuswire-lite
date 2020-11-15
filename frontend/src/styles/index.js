import s from 'styled-components';

export const AccountPage = s.div`
  margin: 1rem 2rem;
  font-family: ui-monospace;
  width: 40%;
`;

export const InputBox = s.input`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  color: #283033;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  margin-bottom: 1rem;
`;

export const InputArea = s.textarea`
  margin-bottom: 1rem;
  width: 100%;
  height: 7rem;
  border-color: rgb(40, 48, 51, 0.2);
  border-radius: .25rem;
`;

export const ActionButton = s.button`
  cursor: pointer;
  width: 100%;
  background-color: rgb(64,224,208);
  color: white;
  font-weight: 500;
  border: 1px solid transparent;
  padding: .5rem .75rem;
  border-radius: .25rem;
  margin-bottom: 0.5rem;
`;

export const CloseButton = s(ActionButton)`
  background-color: white;
  color: #283033;
`;

export const Heading = s.h1`
  color: #283033;
  font-weight: bold;
`;

export const SubHeading = s.h3`
  font-weight: bold;
  color: #283033;
`;

export const BodyText = s.p`
  color: #283033;
  margin: 0;
  display: block;
  margin-bottom: 0.5rem;
`;

export const BodyTextBold = s(BodyText)`
  font-weight: 600;
  margin-bottom: 0rem;
`;

export const BodyTextLarge = s(BodyText)`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
`;

export const BodyTextLink = s(BodyText)`
  cursor: pointer;
`;

export const PopUp = s.div`
  background-color: white;
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  width: 480px;
  margin: 40px auto;
  border-radius: .25rem;
  border: 1px solid rgba(0,0,0,.125);
  padding: 1rem 1rem;
`;

export const ListElement = s.div`
  background-color: white;
  border: 1px solid rgb(40, 48, 51, 0.2);
  border-radius: .25rem;
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 0rem;
  cursor: pointer;
`;

export const PageHeader = s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(40, 48, 51, 0.2);
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: white;
`;

export const PageBody = s.div`
  display: flex;
  height: 100%;
`;

export const PageContainer = s.div`
  background-color: rgb(40, 48, 51, 0.05);
  height: 100%;
`;

export const QuestionListContainer = s.div`
  padding: 1rem 1rem;
  border-right: 1px solid rgb(40, 48, 51, 0.2);
  width: 40%;
  height: 100%;
`;

export const QuestionContainer = s.div`
  padding: 1rem 1rem;
  width: -webkit-fill-available;
  height: 100%;
`;

export const AnswerContainer = s.div`
  margin-top: 3rem;
`;
