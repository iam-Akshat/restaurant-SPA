(async () => { await import('../stylesheets/aboutForm.css'); })();
const loadContact = () => {
  const root = document.getElementById('content');

  const text = '<h1>Contact us here</h1>';

  const wrapper = document.createElement('div');
  wrapper.innerHTML = text;

  const formContainer = document.createElement('div');
  const formMarkup = `
    <form>

        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name..">

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">

        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

        <input type="submit" value="Submit">
    </form>
    `;
  formContainer.innerHTML = formMarkup;

  wrapper.appendChild(formContainer);

  const contact = document.createElement('div');
  contact.classList.add('contact');
  contact.appendChild(wrapper);

  root.appendChild(contact);
};

export { loadContact };
export default loadContact;