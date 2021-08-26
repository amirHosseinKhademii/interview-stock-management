export const TableToolbar = ({ title, onChange }) => {
  return (
    <div className="w-full flex items-center justify-between">
      {title ? (
        <span className="text-lg pb-4 text-gray-700">{title}</span>
      ) : (
        <div />
      )}
      <input
        className="w-1/4  bg-transparent rounded h-8 text-sm px-4 focus:outline-none"
        placeholder="Search here ..."
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
