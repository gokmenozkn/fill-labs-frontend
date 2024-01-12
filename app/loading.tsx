export default function Loading() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='p-8 bg-white rounded shadow-lg'>
        <div className='animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500'></div>
        <p className='mt-4 text-gray-600'>Loading...</p>
      </div>
    </div>
  );
}
