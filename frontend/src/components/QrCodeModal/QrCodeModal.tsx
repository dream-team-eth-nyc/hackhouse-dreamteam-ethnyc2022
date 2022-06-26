import {Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/react";
import {QRCodeSVG} from 'qrcode.react';
import React from 'react';

type QrCodeModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

const QrCodeModal: React.FC<QrCodeModalProps> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="md">
    <ModalOverlay />
    <ModalContent bgColor="gray.900">
      <ModalHeader>
        Scan QR Code
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Box as={QRCodeSVG} value="matic:0xE4De79170113296e415A15B1Eb9df349f550268f" mx="auto" my={8}/>
      </ModalBody>
    </ModalContent>
  </Modal>
)

export default QrCodeModal;
