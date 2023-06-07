import { RiUserSearchLine } from 'react-icons/ri';

export default function Navigation() {
  return (
    <div className="nav-bar">
      <h2>RandomUsers</h2>
      <div className="search-bar">
        <input type="search" placeholder="Search user ..." />
        <RiUserSearchLine />
      </div>
    </div>
  );
}
