/**
 * @typedef {Object} Address
 * @property {string} street - The street address.
 * @property {string} city - The city name.
 * @property {string} state - The state name.
 * @property {string} zip - The zip code.
 */

/**
 * @typedef {Object} Contact
 * @property {string} type - The type of contact (e.g., "email", "phone").
 * @property {string} value - The contact value.
 */

/**
 * @typedef {Object} UserProfile
 * @property {string} id - The unique identifier for the user.
 * @property {string} name - The name of the user.
 * @property {number} age - The age of the user.
 * @property {boolean} isActive - Indicates if the user is active.
 * @property {Address} address - The address of the user.
 * @property {Contact[]} contacts - A list of user contacts.
 */

/**
 * Get a summary of the user profile.
 * @param {UserProfile} userProfile - The user profile object.
 * @returns {string} A summary of the user profile.
 */
function getUserProfileSummary(userProfile) {
    const { name, age, isActive, address, contacts } = userProfile;
    const activeStatus = isActive ? 'active' : 'inactive';
    const addressSummary = `${address.street}, ${address.city}, ${address.state}, ${address.zip}`;
    const contactSummary = contacts.map(contact => `${contact.type}: ${contact.value}`).join(', ');

    return `${name} (Age: ${age}) is currently ${activeStatus}. Address: ${addressSummary}. Contacts: ${contactSummary}.`;
}

// Example usage:
const userProfile = {
    id: '12345',
    name: 'Jane Doe',
    age: 30,
    isActive: true,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    },
    contacts: [
        { type: 'email', value: 'jane.doe@example.com' },
        { type: 'phone', value: '555-1234' }
    ]
};

console.log(getUserProfileSummary(userProfile));
