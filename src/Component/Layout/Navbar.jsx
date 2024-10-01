import { Link, useNavigate } from "react-router-dom";
import Container from "../container/Coniner";

const Navbar = () => {
    const navigate = useNavigate();
    const authStatus = true
    const navItems = [
        {
          name: "Home",
          slug: "/",
          active: true,
        },
        {
          name: "Login",
          slug: "/login",
          active: !authStatus,
        },
        {
          name: "Signup",
          slug: "/signup",
          active: !authStatus,
        },
        {
          name: "Bills",
          slug: "/bill",
          active: authStatus,
        },
        {
          name: "Add Post",
          slug: "/calender",
          active: authStatus,
        },
      ];

  return (
<header className="py-3 shadow bg-gray-500">
      <Container>
        <div className="flex">
          <div className="mr-4">
            <Link to="/">
              {/* <Logo width="70px" /> */}
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 
                    duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

          </ul>
        </div>
      </Container>
    </header>
  )
}

export default Navbar
