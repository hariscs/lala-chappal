import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

const itemFlex = 'flex items-center justify-between w-full'

export default function Checkout() {
  const { query } = useRouter()
  const router = useRouter()

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  // product information
  const quantity = parseInt(query?.quantity as string)
  const cost = quantity * 3000
  const paymentMethod = 'Cash on delivery'
  const productName = `Custom-Chappel-${query?.design as string}`
  const [userForm, setUserForm] = useState({
    address: '',
    name: '',
    email: '',
    phone: '',
  })

  const [loading, setLoading] = useState(false)

  const handlePurchaseForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (userForm.email.trim().length !== 0) {
      const { address, email, name, phone } = userForm
      const formData = {
        address,
        email,
        name,
        phone,
        payment: paymentMethod,
        productName,
        size: query?.size,
        design: query?.design,
        quantity: quantity,
        soleThickness: query?.soleThickness,
        color: query?.color,
        cost: cost,
      }
      return handleCheckout(formData)
    }
  }

  const handleCheckout = (formData: any) => {
    setLoading(true)
    // Send form data to the API using fetch or any other HTTP client library
    fetch(`${baseUrl}/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response if needed
        console.log('api responsse data', data)
        setLoading(false)
        router.push('/success')
      })
      .catch((error) => {
        setLoading(false)
        window.alert('Sorry, failed to confirm purchase. Try again later')
        console.error(error)
      })
  }
  return (
    <div className='py-8 px-4 lg:py-16 lg:px-16 flex flex-col xl:flex-row overflow-hidden items-center xl:items-start'>
      <div className='pr-4 w-full'>
        <h2 className='text-lg font-semibold mb-4'>User Information</h2>
        <form onSubmit={(e) => handlePurchaseForm(e)}>
          <div>
            <div className='flex items-center space-x-4'>
              <div className='mb-4 flex-1'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='full-name'
                >
                  Full name
                </label>
                <input
                  required
                  aria-required
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='full-name'
                  type='text'
                  placeholder='Enter your full name'
                  value={userForm.name}
                  onChange={(e) =>
                    setUserForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>
              <div className='mb-4 flex-1'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='phone'
                >
                  Phone Number
                </label>
                <input
                  required
                  aria-required
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='phone'
                  type='text'
                  placeholder='Enter your phone number'
                  value={userForm.phone}
                  onChange={(e) =>
                    setUserForm((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              </div>
            </div>
            <div className='mb-4 flex-1'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='email'
              >
                Email Address
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
                required
                aria-required
                id='email'
                type='text'
                placeholder='johndoe@mailinator.com'
                value={userForm.email}
                onChange={(e) =>
                  setUserForm((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div className='mb-4 flex-1'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='address'
              >
                Physical Address
              </label>
              <textarea
                required
                aria-required
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='address'
                placeholder='johndoe@mailinator.com'
                value={userForm.address}
                onChange={(e) =>
                  setUserForm((prev) => ({ ...prev, address: e.target.value }))
                }
              />
            </div>
          </div>

          <div>
            <h2 className='text-lg font-semibold mb-4'>Payment Information</h2>
            <div className={itemFlex}>
              <span>Payment Method</span>
              <span>
                <b>{paymentMethod}</b>
              </span>
            </div>
          </div>

          <div className='flex space-x-4 mt-8 justify-between'>
            <button
              disabled={loading}
              className='bg-transparent capitalize rounded-2xl text-primary border border-primary py-2 px-6 lg:py-4 lg:px-12 text-base'
              onClick={() => router.back()}
              type='button'
            >
              Go back
            </button>
            <button
              disabled={loading}
              className='bg-primary disabled:bg-primary/75 capitalize rounded-2xl text-white text-base lg:text-2xl py-2 px-6 lg:py-4 lg:px-12'
              type='submit'
            >
              Confirm Purchase
            </button>
          </div>
        </form>
      </div>

      <div className='xl:w-[1px] w-full h-[1px] my-8 xl:my-0 xl:h-screen bg-neutral-200 mx-8'></div>

      <div className='pl-4 w-full'>
        <h2 className='text-lg font-semibold mb-4'>Product Details</h2>
        <div className='border-gray-300 flex items-start flex-col w-full space-y-3'>
          <p className={itemFlex}>
            <span>Name</span>
            <span>
              <b>Custom-Chappel-{query?.design as string}</b>
            </span>
          </p>
          <p className={itemFlex}>
            <span>Color</span>
            <span>
              <b>{query?.color}</b>
            </span>
          </p>
          <p className={itemFlex}>
            <span>Design</span>
            <span>
              <b>{query?.design}</b>
            </span>
          </p>
          <p className={itemFlex}>
            <span>Size</span>
            <span>
              <b>{query?.size}</b>
            </span>
          </p>
          <p className={itemFlex}>
            <span>Sole Thickness</span>
            <span>
              <b>{query?.soleThickness}</b>
            </span>
          </p>
          <p className={itemFlex}>
            <span>Quantity</span>
            <span>
              <b>{quantity}</b>
            </span>
          </p>
        </div>
        <p className={`${itemFlex} mt-10 text-lg`}>
          <span>
            <b>Total Cost(PKR)</b>
          </span>
          <span>
            <b>{cost}</b>
          </span>
        </p>
      </div>
    </div>
  )
}
