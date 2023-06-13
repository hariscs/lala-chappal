export const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`fixed bg-red-400 top-0 right-0 h-screen w-[30%] bg-gray-900 text-white transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } z-50`}
    >
      <div className='p-4'>
        <h2 className='text-2xl font-bold'>Sidebar</h2>
        <p className='text-gray-300'>Add your sidebar content here</p>
      </div>
    </div>
  )
}
