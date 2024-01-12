interface IButton {
  handleDelete: () => void;
  isDeleting: boolean;
}

export default function DeleteButton({ handleDelete, isDeleting }: IButton) {
  return (
    <button
      onClick={handleDelete}
      className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800'
      disabled={isDeleting}
    >
      {isDeleting ? 'Deleting...' : 'Delete'}
    </button>
  );
}
