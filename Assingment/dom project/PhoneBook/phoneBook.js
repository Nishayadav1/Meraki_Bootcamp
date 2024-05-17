const phoneBook={
    userData:[],
    add:function addContact(name, phone_no, email){
            this.userData.push({name, phone_no, email});
            return this.userData;
        },
    search: function searchContact(name) {
        const data = this.userData.find(data => data.name === name);
        if (data) {
            console.log('Contact found:');
            console.log('Name:', data.name);
            console.log('Phone:', data.phone_no);
            console.log('Email:', data.email);
        } else {
            console.log('Contact not found');
        }
    },
    update: function updateContact(name, newPhone, newEmail) {
        const data = this.userData.find(data => data.name === name);
        if (data) {
          data.phone = newPhone;
          data.email = newEmail;
          console.log('Contact updated successfully.');
        } else {
          console.log('Contact not found.');
        }
      },
    

    delet:function deleteContact(name) {
        const index = this.userData.findIndex(data => data.name === name);
        if (index !== -1) {
            this.userData.splice(index, 1);
            console.log('Contact deleted successfully.');
        } else {
            console.log('Contact not found.');
        }
    }
    
}
phoneBook.add("nisha","1234567890","nisha@MediaList.com");
phoneBook.add("kajal","1234567890","nisha@MediaList.com");

// console.log(phoneBook.search("kajal"))
// console.log(phoneBook.search("nisha"))
// console.log(phoneBook.search()) //undifind

// console.log(phoneBook.update("nisha","1234567890","sbyudwh@hmail.com"))
// console.log(phoneBook.search("nisha"))

console.log(phoneBook.delet("nisha"))
console.log(phoneBook.search("nisha"))
console.log(phoneBook.search("kajal"))





