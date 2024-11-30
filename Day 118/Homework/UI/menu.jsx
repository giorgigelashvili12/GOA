import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const links = [
  { href: '/settings', label: 'Settings'},
  { href: './cart', label: 'Cart'},
  { href: './account', label: 'Account'}
];

export default function MenuBar() {
  return (
    <Menu>
      <MenuButton className="data-[active]:bg-blue-200">My account</MenuButton>
        <MenuItems anchor="bottom">
          {links.map((link) => (
            <MenuItem key={link.href} className="block data-[focus]:bg-blue-100">
              <a href={link.href}>{link.label}</a>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
  )

}