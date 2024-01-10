export default function EmptyRow({ colSpan }: { colSpan: number }) {
  return (
    <tr>
      <td colSpan={colSpan} className='py-2 px-4 border-b text-center text-lg'>
        No data to show
      </td>
    </tr>
  );
}
