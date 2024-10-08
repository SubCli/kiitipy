// routes
import { APP_PATH } from '../../routes/paths';
// components
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  // {
  //   title: 'Donation Link',
  //   icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
  //   path: APT_DONA_PATH.root,
  // },
  // {
  //   title: 'Form Donation',
  //   icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
  //   path: APT_DONA_PATH.manager.form,
  // },
  {
    title: 'Dashboard',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
    path: '/dashboard',
  },
  {
    title: 'Management',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
    path: APP_PATH.manager.link,
  },
  {
    title: 'Profile',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
    path: '/profile',
  }
  //PHONG:Hide menu item
  // {
  //   title: 'Components',
  //   icon: <Iconify icon={'ic:round-grain'} {...ICON_SIZE} />,
  //   path: PATH_PAGE.components,
  // },
  // {
  //   title: 'Pages',
  //   path: '/pages',
  //   icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
  //   children: [
  //     {
  //       subheader: 'Other',
  //       items: [
  //         { title: 'About us', path: PATH_PAGE.about },
  //         { title: 'Contact us', path: PATH_PAGE.contact },
  //         { title: 'FAQs', path: PATH_PAGE.faqs },
  //         { title: 'Pricing', path: PATH_PAGE.pricing },
  //         { title: 'Payment', path: PATH_PAGE.payment },
  //         { title: 'Maintenance', path: PATH_PAGE.maintenance },
  //         { title: 'Coming Soon', path: PATH_PAGE.comingSoon },
  //       ],
  //     },
  //     {
  //       subheader: 'Authentication',
  //       items: [
  //         { title: 'Login', path: PATH_AUTH.loginUnprotected },
  //         { title: 'Register', path: PATH_AUTH.registerUnprotected },
  //         { title: 'Reset password', path: PATH_AUTH.resetPassword },
  //         { title: 'Verify code', path: PATH_AUTH.verify },
  //       ],
  //     },
  //     {
  //       subheader: 'Error',
  //       items: [
  //         { title: 'Page 404', path: PATH_PAGE.page404 },
  //         { title: 'Page 500', path: PATH_PAGE.page500 },
  //       ],
  //     },
  //     {
  //       subheader: 'Dashboard',
  //       items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
  //     },
  //   ],
  // },
  // {
  //   title: 'Documentation',
  //   icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
  //   path: PATH_DOCS,
  // },
];

export default menuConfig;
