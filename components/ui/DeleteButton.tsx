interface IButton {
  handleDelete: () => void;
  isDeleting: boolean;
}

export default function DeleteButton({ handleDelete, isDeleting }: IButton) {
  const btnStyle = isDeleting ? 'bg-red-300' : 'bg-red-500 hover:bg-red-600'

  return (
    <button
      onClick={handleDelete}
      className={`${btnStyle} text-white px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-red active:bg-red-800`}
      disabled={isDeleting}
    >
      {isDeleting ? 'Deleting...' : 'Delete'}
    </button>
  );
}
