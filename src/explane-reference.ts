/*
   const users = [
     { id: 123, name: 'Mark' }, // HM_0002
     { id: 124, name: 'Kent' }, // HM_0003
     { id: 125, name: 'Jorabek' } // HM_0004
   ]; // HM_0001

   // SM_users_001 = HM_0001
   const idx = 2; // SM_idx_002 = 2
   const user1 = users[idx]; // SM_user1_003 = HM_0001[2] -> HM_0004
   user1.name = 'Bob'; // HM_0004.name = "Bob"
   console.log(user1.name);

   const user2 = user1; // SM_user2_004 = HM_0004
   user2.name = 'John'; // HM_0004.name = "John"
   console.log(user2.name);

   const user3 = user2; // SM_user3_005 = HM_0004
   user3.name = 'Jorabek'; // HM_0004.name = "Jorabek"
   console.log(user3.name);
   console.log(users);
 */

const students = [
  {
    phone: '+998888606099',
    name: 'Ismoil',
    friends: [
      {
        phone: '+998001234567',
        name: 'Saidxon'
      } // HM_0006
    ] // HM_0004
  }, // HM_0002
  {
    phone: '+998935121142',
    name: 'Umar',
    friends: [
      {
        phone: '+998001234566',
        name: 'Saidxon'
      } // HM_0007
    ] // HM_0005
  } // HM_0003
]; // HM_0001

const friends1 = students[0].friends; //  HM_0004
const friends2 = students[1].friends; // HM_0005
friends1[0].name = friends2[0].name; // HM_0006.name = HM_0007.name
