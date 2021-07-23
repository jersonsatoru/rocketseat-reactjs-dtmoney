import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from '../../assets/close.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" className="react-modal-close-button">
        <img src={closeImg} alt="close icon" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="titulo" />
        <input type="number" placeholder="valor" />
        <input type="type" placeholder="categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
