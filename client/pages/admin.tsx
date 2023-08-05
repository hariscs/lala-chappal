// Frontend component to display orders and update status
import React, { useState, useEffect } from 'react'

interface SelectedStatuses {
  [orderId: string]: string
}
interface Order {
  _id: string
  products: {
    _id: string
    customer: string
    phone: string
    address: string
    email: string
  }[]
  status: string
  shippingAddress: string
}

function OrdersList() {
  const [orders, setOrders] = useState<Order[]>([])
  const [selectedStatuses, setSelectedStatuses] = useState<SelectedStatuses>({})

  useEffect(() => {
    // Fetch orders from the backend
    fetch('http://localhost:8080/orders')
      .then((response) => response.json())
      .then((data) => {
        setOrders(data)
      })
      .catch((error) => {
        console.error('Error fetching orders:', error)
      })
  }, [])

  const handleUpdateStatus = async (orderId: string) => {
    try {
      // Send PUT request to update order status
      const selectedStatus = selectedStatuses[orderId]
      const response = await fetch(`http://localhost:8080/orders/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: selectedStatus, orderId }),
      })

      const data = await response.json()

      console.log('Order status updated successfully')
      if (selectedStatus === 'Shipped') {
        // Find the order that matches the updated order
        const updatedOrder = orders.find((order) => order._id === orderId)

        // Send email to customer
        await fetch('http://localhost:8080/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: updatedOrder?.products[0].email,
            orderId,
          }),
        })
        console.log('Email sent to customer')
      }

      setOrders(data.orders) // Update orders in state
    } catch (error) {
      console.error('Error updating order status:', error)
    }
  }

  const handleStatusChange = (orderId: string, status: string) => {
    setSelectedStatuses((prevStatuses) => ({
      ...prevStatuses,
      [orderId]: status,
    }))
  }

  return (
    <div className='max-w-3xl mx-auto mt-8 px-4'>
      <h2 className='text-xl font-semibold mb-4'>Orders</h2>
      <div className='grid gap-4'>
        {orders.map((order) => (
          <div
            key={order._id}
            className='bg-white p-4 rounded-lg shadow-md border border-gray-300'
          >
            <div className='mb-2'>
              <strong>Customer Name:</strong>{' '}
              {order.products.length > 0 ? order.products[0].customer : ''}
            </div>
            <div className='mb-2'>
              <strong>Phone:</strong>{' '}
              {order.products.length > 0 ? order.products[0].phone : ''}
            </div>
            <div className='mb-2'>
              <strong>Address:</strong>{' '}
              {order.products.length > 0
                ? order.products[0].address
                : order.shippingAddress}
            </div>
            <div className='mb-2'>
              <strong>Current Status:</strong> {order.status}
            </div>
            <div className='flex flex-col items-start md:flex-row md:items-center'>
              <label className='block text-sm font-medium md:mb-0 md:mr-2'>
                Change Status:
              </label>
              <select
                className='block w-full md:w-auto p-2 border rounded shadow-sm mb-2 md:mb-0 md:mr-2'
                value={selectedStatuses[order._id] || ''}
                onChange={(e) => handleStatusChange(order._id, e.target.value)}
              >
                <option value='' disabled>
                  Select a status
                </option>
                <option value='Shipped'>Shipped</option>
              </select>
              <button
                className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                onClick={() => handleUpdateStatus(order._id)}
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrdersList
