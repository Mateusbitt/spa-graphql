/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Modal } from 'antd'
import propTypes from 'prop-types'

const ADModal = ({
  title, modalText, visible, onOk, confirmLoading, onCancel,
}) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onOk}
      confirmLoading={confirmLoading}
      onCancel={onCancel}
      width={800}
      centered
    >
      {modalText}
    </Modal>
  )
}

ADModal.propTypes = {
  title: propTypes.string.isRequired,
  modalText: propTypes.node.isRequired,
  visible: propTypes.bool.isRequired,
  onOk: propTypes.func.isRequired,
  confirmLoading: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired,
}

export { ADModal }
