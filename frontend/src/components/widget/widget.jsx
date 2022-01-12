import styled from "styled-components";
import "./widget.css"


const Modal = styled.div`
position: fixed;
z-index: 1;
width: 100%;
min-height: 100vh;
background-color: rgba(0, 0, 0, 0.5);
`;
const InnerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;


export function Widget(){
    return(
        <>
        <Modal>
            <InnerModal className="inner_modal">
            <textarea placeholder="Note..." id="user_input" maxlength="160"></textarea>
      <i class="far fa-times-circle" id="hide"></i>
            </InnerModal>
        </Modal>
        </>
    );
}