/* any vs unknown */
// const a: unknown = 'arslonbek';

// if (typeof a === 'string') {
//   // a.toFixed(2);

//   console.log(a.length);
// }

type Role = 'admin' | 'user' | 'super-admin' | 'super-user';

function getAccess(role: Role) {
  switch (role) {
    case 'user':
      return `[${role}]: Access only view`;

    case 'admin':
      return `[${role}]: Access view and edit`;

    case 'super-admin':
      return `[${role}]: Access view and edit and delete`;
    default:
      throw new Error('Invalid role');
  }
}

// console.log(getAccess('user'));
// console.log(getAccess('admin'));
// console.log(getAccess('super-admin'));
// // @ts-ignore
// console.log(getAccess('superbek-admin'));
