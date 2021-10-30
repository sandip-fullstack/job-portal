const Header = ({children, className}) => {
  return (
    <div className="w-100 bg-blue h3 fixed" style={{zIndex: 10}}>
      {children}
    </div>
  )
}

export default Header;
