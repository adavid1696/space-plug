import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <a
          className="text-white text-2xl font-bold cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          Logo
        </a>
        <ul className="flex space-x-4">
          <li>
            <a
              className="text-white cursor-pointer"
              onClick={() => handleNavigation('/dashboard')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-white cursor-pointer"
              onClick={() => handleNavigation('/about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-white cursor-pointer"
              onClick={() => handleNavigation('/contact')}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="text-white cursor-pointer"
              onClick={() => handleNavigation('/host')}
            >
              List Your Space
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
