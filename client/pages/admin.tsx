// Frontend component to display orders and update status
import { Footer } from '@container/Footer'
import { Header } from '@container/Header'
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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  useEffect(() => {
    // Fetch orders from the backend
    fetch(`${baseUrl}/orders`)
      .then((response) => response.json())
      .then((data) => {
        setOrders(data.reverse())
      })
      .catch((error) => {
        console.error('Error fetching orders:', error)
      })
  }, [])

  const handleUpdateStatus = async (orderId: string) => {
    try {
      // Send PUT request to update order status
      const selectedStatus = selectedStatuses[orderId]
      const response = await fetch(`${baseUrl}/orders/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: selectedStatus, orderId }),
      })

      const data = await response.json()

      if (selectedStatus === 'Shipped') {
        // Find the order that matches the updated order
        const updatedOrder = orders.find((order) => order._id === orderId)

        // Send email to customer
        await fetch(`${baseUrl}/send-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: updatedOrder?.products[0].email,
            orderId,
          }),
        })
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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showDashboard, setShowDashboard] = useState(false)

  const adminEmail = 'admin@lalachappal.com'
  const adminPassword = 'lala99'

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (email === adminEmail && password === adminPassword) {
      setShowDashboard(true)
    } else {
      setShowDashboard(false)
    }
  }
  return (
    <>
      <Header />
      {!showDashboard ? (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
          <form
            onSubmit={handleLogin}
            className='max-w-md w-full p-6 bg-white rounded shadow-md'
          >
            <h2 className='text-2xl font-semibold mb-4 text-center'>
              Admin Login
            </h2>
            <div className='mb-4'>
              <label className='block text-sm font-medium'>Email</label>
              <input
                type='email'
                className='w-full p-2 border rounded shadow-sm'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium'>Password</label>
              <input
                type='password'
                className='w-full p-2 border rounded shadow-sm'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className='w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600'
              type='submit'
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        <div className='mx-auto mt-8 px-4 mb-20 max-w-7xl'>
          <h2 className='text-4xl font-semibold mb-4 text-primary text-center'>
            Orders Summery
          </h2>
          <div className='grid gap-4'>
            {orders.map((order) => (
              <div
                key={order._id}
                className='bg-white p-4 flex justify-between rounded-lg shadow-md border border-gray-300'
              >
                <div>
                  <div className='mb-2'>
                    <strong>Customer Name:</strong>{' '}
                    {order.products.length > 0
                      ? order.products[0].customer
                      : ''}
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
                </div>

                <div className='mb-2'>
                  <strong>Current Status:</strong>{' '}
                  <span
                    className={`${
                      order.status === 'Shipped'
                        ? 'text-green-800'
                        : 'text-red-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className='flex flex-col items-start md:flex-row md:items-center'>
                  <label className='block text-sm font-medium md:mb-0 md:mr-2'>
                    Change Status:
                  </label>
                  <select
                    className='block w-full md:w-auto p-2 border rounded shadow-sm mb-2 md:mb-0 md:mr-2'
                    value={selectedStatuses[order._id] || ''}
                    onChange={(e) =>
                      handleStatusChange(order._id, e.target.value)
                    }
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
      )}
      <Footer />
    </>
  )
}

export default OrdersList
