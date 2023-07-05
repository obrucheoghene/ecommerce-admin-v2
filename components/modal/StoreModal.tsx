"use client"

import { Modal } from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/useStoreModal"

const StoreModal = () => {
    const storeModal = useStoreModal()
  return (
    <Modal
    title="Create store"
    description="Add a new store to manage products and categoryies"
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}>

    Future create store
    </Modal>
  )
}

export default StoreModal
