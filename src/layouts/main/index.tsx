export const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-800 fixed w-full h-full inset-0 p-20">
      {children}
    </div>
  )
}
