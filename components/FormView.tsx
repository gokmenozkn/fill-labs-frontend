import { FormData } from '@/types/User';

interface IForm {
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  formData: FormData;
  page: 'Create' | 'Edit';
}

export default function FormView({
  handleSubmit,
  handleChange,
  formData,
  page
}: IForm) {
  return (
    <div className='max-w-md mx-auto bg-white p-8 rounded-md shadow-md'>
      <h2 className='text-2xl font-semibold mb-4'>{page === 'Edit' ? 'Edit' : 'Create'} User</h2>

      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-600 text-sm font-medium mb-2'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-600 text-sm font-medium mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-600 text-sm font-medium mb-2'>
            About
          </label>
          <textarea
            id='about'
            name='about'
            rows={4}
            value={formData.about}
            onChange={handleChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none'
            required
          ></textarea>
        </div>

        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
        >
          {page === 'Edit' ? 'Save' : 'Create'}
        </button>
      </form>
    </div>
  );
}
