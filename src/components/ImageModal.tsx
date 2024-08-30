import { Image, ImageProps, Modal, ModalProps } from "@mantine/core";
import { useCallback, useState } from "react";

type ModalPropsTruncated = Omit<ModalProps, "opened" | "onClose">;

export function ImageModal(
  props: ImageProps & { modal?: ModalPropsTruncated }
) {
  const { modal = {}, ...imageProps } = props;
  const [imageModal, setImageModal] = useState(false);
  const openImageModal = useCallback(() => setImageModal(true), []);
  const closeImageModal = useCallback(() => setImageModal(false), []);

  return (
    <>
      <Image
        {...imageProps}
        style={{ cursor: "pointer", ...(imageProps.style || {}) }}
        onClick={openImageModal}
      />
      <Modal onClose={closeImageModal} opened={imageModal} {...modal}>
        <Image {...imageProps} h={undefined} w={undefined} />
      </Modal>
    </>
  );
}
