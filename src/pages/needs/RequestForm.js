import React from 'react'
import { create } from 'zustand'

const useRequestForm = create((set) => ({
  requestId: `REQ ${crypto.randomUUID()}`,
  itemName: '',
  category: '',
  quantity: '',
  unit: '',
  department: '',
  reason: '',
  status: 'pending',
  date: '',

  setField: (field, value) =>
    set((state) => ({
      ...state,
      [field]: value
    })),
  reestForm: () =>
    set({
      requestId: '',
      itemName: '',
      category: '',
      quantity: '',
      unit: '',
      department: '',
      reason: '',
      status: 'pending',
      date: '',
    })
}));
export default useRequestForm 