"use client"

import { Modal } from "@/components/ui/modal"

export default function SetupPage() {
  return (
    <div className="p-4">
          <Modal title="Test modal" description="My test modal"
          isOpen onClose={() => {}}>
            children
      </Modal>
    </div>

  )
}
